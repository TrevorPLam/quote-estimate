You are a senior full-stack engineer building a production-ready local service website template in a GitHub repo (developed in GitHub Codespaces).

GOAL
Build “Archetype 3 — Quote Request / Estimate First (non-emergency)” as a reusable, modern, high-converting marketing template for businesses like remodeling, roofing replacement, landscaping design/install, flooring, fencing.

This archetype is NOT emergency dispatch. Primary conversion is “Request Estimate” / “Schedule Consultation”.

STACK (REQUIRED)
- Next.js (App Router)
- TypeScript
- Tailwind CSS
No CMS. No database. Single config file for all content + behavior.

MARKETING + SEO STANDARDS FOR THIS ARCHETYPE (NON-NEGOTIABLE)
A) Estimate capture must be high-completion and low-friction
- Use a multi-step estimate form (3–5 steps) with:
  - progress indicator
  - logical grouping
  - minimal required fields early; details later
  - clear “what happens next” confirmation
Multi-step flows are widely used to reduce friction and improve completion when structured well. :contentReference[oaicite:4]{index=4}

B) Proof must be outcome-oriented (not just pretty photos)
- Include a Projects/Case Studies hub and detail pages:
  - problem → solution → scope → timeline → outcome
  - before/after photo placeholders
- Include a “Process” page explaining the estimate workflow and project phases.

C) Local SEO service-area pages must avoid doorway patterns
- Provide service-area (city) pages that are genuinely useful and unique:
  - city intro copy must be unique per city (2+ paragraphs per city from config)
  - include “projects in/near this city” (link to case studies)
  - include city-specific FAQs (optional)
Service-area page guidance emphasizes uniqueness/helpfulness and avoiding thin duplication. :contentReference[oaicite:5]{index=5}

D) Lead handling must be real (even if stubbed)
- Form submission routes to webhook (CRM) if configured; otherwise logs and returns success.
- Add “Call” as secondary CTA on mobile sticky bar (many estimate businesses convert via calls when running ads/LSAs). :contentReference[oaicite:6]{index=6}

OUTPUT CONTRACT (ANTI-TRUNCATION)
You MUST deliver the repo in STAGES. Do NOT omit code “for brevity”.
Stage A: Repo scaffold + config + layout + libs + SEO endpoints + devcontainer + tooling.
Stage B: Components/sections + pages/routes (Home, Services hub + service detail, Estimate, Projects hub + detail, Process, Service Areas hub + city detail, Reviews, About, Contact, Policies, Privacy, Terms, 404).
Stage C: QA checklist + README + final notes (build/lint/dev).

If you reach output limits mid-stage, STOP and print: “STOPPED AT: <filepath>” so I can resume from that exact file.

QUALITY BAR (MUST PASS)
- npm run dev
- npm run build
- npm run lint
- No runtime errors.
- No lorem ipsum. Unknown inputs must be explicit: "TODO:INPUT".

CODE COMMENTARY (FOR AI ITERATION)
- Add concise comments:
  - 1–2 line header per file: purpose.
  - Short “why” comments for non-obvious logic.
  - TODOs must be explicit: TODO:INPUT or TODO:PROD (with next action).
- Do not add excessive commentary.

NON-NEGOTIABLE UX RULES
- Mobile-first.
- Sticky primary CTA = “Get Estimate” on every page (mobile + desktop) via layout.
- Secondary CTA on mobile sticky bar: “Call” (tel: link).
- Sticky CTA must NOT cover content (global bottom padding).
- Estimate flow must be reachable in 1 click from any page.

MODERN DESIGN ACCEPTANCE CRITERIA (STRICT)
- Consistent container + section spacing rhythm (py-12/py-16).
- Typography hierarchy: hero 3xl–5xl, readable body.
- Buttons: primary + secondary with hover + focus-visible.
- Cards: consistent radius + subtle border/shadow.
- Home page must follow this order:
  1) HeroSection (headline, subheadline, 3 bullets, Get Estimate CTA, Call link, proof row)
  2) ProofSection (testimonials + badges/credentials placeholders)
  3) ServicesSection (service cards linking to service detail pages)
  4) ProjectsPreviewSection (3–6 case studies)
  5) ProcessPreviewSection (3–5 steps)
  6) FAQSection (3–6 FAQs)
  7) CTASection (final estimate CTA)

CANONICAL FILE TREE (MUST MATCH EXACTLY)
- src/
  - app/
    - layout.tsx
    - globals.css
    - page.tsx                          (Home)
    - services/page.tsx                 (Services hub)
    - services/[slug]/page.tsx          (Service detail)
    - estimate/page.tsx                 (Multi-step form)
    - projects/page.tsx                 (Projects hub)
    - projects/[slug]/page.tsx          (Case study detail)
    - process/page.tsx                  (How it works)
    - service-areas/page.tsx            (Service areas hub)
    - service-areas/[city]/page.tsx     (City page)
    - reviews/page.tsx
    - about/page.tsx
    - contact/page.tsx
    - policies/page.tsx
    - privacy/page.tsx
    - terms/page.tsx
    - not-found.tsx
    - api/
      - lead/route.ts
      - upload/route.ts                 (optional; see Upload rules)
    - robots.ts
    - sitemap.ts
  - components/
    - Header.tsx
    - Footer.tsx
    - StickyCTA.tsx
    - JsonLd.tsx
    - NAP.tsx
    - ContactMethods.tsx
    - LeadForm.tsx                      (simple fallback form)
    - EstimateWizard.tsx                (multi-step estimate form)
    - ProgressBar.tsx
    - FileUpload.tsx
    - ProofStack.tsx
    - Testimonials.tsx
    - FAQ.tsx
    - ServiceCards.tsx
    - ProjectCards.tsx
    - sections/
      - HeroSection.tsx
      - ProofSection.tsx
      - ServicesSection.tsx
      - ProjectsPreviewSection.tsx
      - ProcessPreviewSection.tsx
      - FAQSection.tsx
      - CTASection.tsx
  - config/site.ts
  - lib/
    - tracking.ts
    - analytics.ts
    - schema.ts
    - seo.ts
    - rateLimit.ts
    - utils.ts
- public/
  - projects/ (placeholder images allowed)
- .devcontainer/devcontainer.json
- README.md
- package.json
- tailwind.config.ts
- postcss.config.js
- tsconfig.json
- eslint config

CONFIG (SINGLE SOURCE OF TRUTH) — EXACT TYPES REQUIRED
In src/config/site.ts define and export these EXACT interfaces and config object. Do not rename fields.

type AnalyticsConfig =
  | { provider: "none" }
  | { provider: "ga4"; ga4MeasurementId: string }
  | { provider: "plausible"; plausibleDomain: string };

type SpamProtectionConfig = {
  turnstileEnabled: boolean;
  turnstileSiteKey?: string;
  turnstileSecretKey?: string;
};

type CopyBlocks = {
  heroHeadline: string;
  heroSubheadline: string;
  heroBullets: [string, string, string];
  ctaSectionHeadline: string;
  ctaSectionSubheadline: string;
};

type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescriptionParagraphs: [string, string, ...string[]]; // 2+ paragraphs unique to service
  priceRange?: string;                                     // e.g., “Most projects start at…”
};

type ProjectCaseStudy = {
  slug: string;
  title: string;
  city?: string;
  problem: string;
  solution: string;
  scopeBullets: string[];
  timelineText: string;
  resultsText: string;                // TODO:INPUT if unknown
  beforeImage?: string;               // /public/projects/...
  afterImage?: string;
};

type ServiceAreaCity = {
  city: string;                       // URL segment should be derived/safe
  headline: string;
  paragraphs: [string, string, ...string[]]; // at least 2 UNIQUE paragraphs
  featuredProjectSlugs: string[];     // links to projects
};

type EstimateWizardConfig = {
  steps: {
    id: "service" | "project_details" | "property" | "contact";
    title: string;
    fields: { name: string; label: string; type: "text" | "select" | "textarea" | "tel" | "email"; required?: boolean; options?: string[] }[];
  }[];
  enablePhotoUpload: boolean;
  maxPhotos: number;
};

export interface SiteConfig {
  baseUrl: string; // TODO:INPUT
  businessName: string;
  tagline: string;

  copy: CopyBlocks;

  phoneDisplay: string;
  phoneDial: string;
  email?: string;

  address: { serviceAreaOnly: true } | { line1: string; line2?: string; city: string; state: string; zip: string };
  hours: { day: string; open: string; close: string; closed?: boolean }[];

  services: ServiceItem[];
  projects: ProjectCaseStudy[];
  serviceAreas: ServiceAreaCity[];

  estimateWizard: EstimateWizardConfig;

  proof: { yearsInBusiness?: string; credentials?: string[]; guarantees?: string[] };
  reviews: { highlightQuotes: { name?: string; text: string }[]; reviewPlatformLinks: { label: string; url: string }[] };
  faqs: { q: string; a: string }[];

  policiesCopy: { cancellation?: string; noShow?: string; deposits?: string; warranties?: string; financing?: string };

  leadRouting: { webhookUrl?: string }; // TODO:INPUT
  seo: { siteTitle: string; titleTemplate: string; metaDescription: string; primaryServiceKeywords: string[]; ogImagePath?: string };

  analytics: AnalyticsConfig;
  spamProtection: SpamProtectionConfig;
}

export const siteConfig: SiteConfig = { ... } // populate with TODO:INPUT placeholders

ESTIMATE WIZARD (MANDATORY)
- Implement EstimateWizard as a multi-step form:
  - progress indicator
  - validation per step
  - cannot submit until required fields complete
  - clear confirmation screen: “What happens next” + expected response time (TODO:INPUT)
Multi-step form best practices: break into logical steps and reduce perceived effort. :contentReference[oaicite:7]{index=7}

PHOTO UPLOAD RULES (TEMPLATE-SAFE)
- enablePhotoUpload drives UI visibility.
- Implement FileUpload UI that accepts images.
- Server route /api/upload should be a TEMPLATE STUB:
  - If no storage is configured, return a clear TODO response and do not store images.
  - Do NOT add S3/GCS unless explicitly configured.
- Submission payload may include filenames or “upload not configured” marker.

LEAD ROUTING + SPAM HARDENING (MINIMUM)
- /api/lead must:
  - include honeypot + reject if filled
  - best-effort in-memory rate limiting per IP (TODO:PROD seam for Redis/Upstash)
  - sanitize inputs (trim, max length)
  - verify Turnstile if enabled + secret provided
  - forward to leadRouting.webhookUrl if present; else console.log and return success

ANALYTICS (STRICT)
- Standard events:
  cta_estimate_click, phone_click, estimate_step_complete, estimate_submit, estimate_success, estimate_error, lead_form_submit
- GA4 must use @next/third-parties/google if selected.
- track() must log to console and forward to provider if enabled.

SEO RULES (STRICT)
- Canonical URLs via Metadata API: alternates.canonical.
- robots.ts must include Sitemap: `${baseUrl}/sitemap.xml`.
- sitemap.ts must include all static routes plus:
  - each service detail route
  - each project detail route
  - each service-area city route
- Service-area pages must not be thin:
  - enforce 2+ city-specific paragraphs from config
Service-area page guidance emphasizes uniqueness and usefulness. :contentReference[oaicite:8]{index=8}

SCHEMA (JSON-LD)
- Home/Contact: LocalBusiness (or ServiceAreaBusiness pattern using serviceAreaOnly address)
- Service pages: Service schema where applicable
- BreadcrumbList on internal pages
- FAQPage where FAQs render

PAGES TO BUILD (MINIMUM)
Home: ordered sections (see design rules)
Services hub + service detail pages (indexable copy)
Estimate page (wizard)
Projects hub + case study detail pages
Process page
Service areas hub + city pages
Reviews, About, Contact, Policies, Privacy, Terms, 404

NOW EXECUTE STAGE A, then STAGE B, then STAGE C in the same response if possible.
