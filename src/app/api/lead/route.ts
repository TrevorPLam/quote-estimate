/**
 * Lead submission endpoint with basic spam hardening and webhook forwarding.
 */
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { rateLimit } from "@/lib/rateLimit";
import { formatPhone, isValidEmail, sanitizeString } from "@/lib/utils";

const RATE_LIMIT = { limit: 10, windowMs: 60 * 60 * 1000 };

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  const rateResult = rateLimit(ip, RATE_LIMIT.limit, RATE_LIMIT.windowMs);
  if (!rateResult.allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json();
  if (body.company) {
    // Honeypot field catches bots.
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (siteConfig.spamProtection.turnstileEnabled && siteConfig.spamProtection.turnstileSecretKey) {
    const token = body.turnstileToken as string | undefined;
    if (!token) {
      return NextResponse.json({ error: "Turnstile verification required" }, { status: 400 });
    }
    try {
      const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          secret: siteConfig.spamProtection.turnstileSecretKey,
          response: token,
          remoteip: ip,
        }),
      });
      const verification = await verifyResponse.json();
      if (!verification.success) {
        return NextResponse.json({ error: "Turnstile verification failed" }, { status: 400 });
      }
    } catch (error) {
      console.error("Turnstile verification error", error);
      return NextResponse.json({ error: "Turnstile verification failed" }, { status: 400 });
    }
  }

  const submission = {
    name: sanitizeString(body.name, 120),
    email: sanitizeString(body.email, 200),
    phone: formatPhone(sanitizeString(body.phone, 40)),
    message: sanitizeString(body.message ?? body.goals ?? "", 1000),
    service: sanitizeString(body.service ?? "", 120),
    source: sanitizeString(body.source ?? "", 120),
    budget: sanitizeString(body.budget ?? "", 120),
    timeline: sanitizeString(body.timeline ?? "", 120),
    address: sanitizeString(body.address ?? "", 200),
    propertyType: sanitizeString(body.propertyType ?? "", 80),
    photos: Array.isArray(body.photos)
      ? body.photos.slice(0, 5).map((photo: unknown) => sanitizeString(photo, 300))
      : [],
  };

  if (!submission.name || !submission.email || !isValidEmail(submission.email)) {
    return NextResponse.json({ error: "Contact details are required" }, { status: 400 });
  }

  if (siteConfig.leadRouting.webhookUrl) {
    try {
      await fetch(siteConfig.leadRouting.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...submission,
          receivedAt: new Date().toISOString(),
          ip,
        }),
      });
    } catch (error) {
      console.error("Webhook forwarding failed", error);
    }
  } else {
    console.log("Lead received", submission);
  }

  return NextResponse.json({ success: true });
}
