/**
 * Footer with navigation, policies, and contact information.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NAP } from "./NAP";
import { ContactMethods } from "./ContactMethods";

const policyLinks = [
  { href: "/policies", label: "Policies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container-responsive grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{siteConfig.businessName}</h2>
          <p className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</p>
          <NAP className="mt-4 text-sm text-slate-600" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/process">Process</Link>
            <Link href="/reviews">Reviews</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <ContactMethods className="mt-3" />
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-700">
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
