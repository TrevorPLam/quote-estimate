/**
 * Primary site header with navigation and brand mark.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container-responsive flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          {siteConfig.businessName}
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-700 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/estimate" className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Get Estimate
          </Link>
          <a className="text-sm text-slate-700" href={`tel:${siteConfig.phoneDial}`}>
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
        <Link
          href="/estimate"
          className="md:hidden rounded-full bg-brand-primary px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          aria-label="Get Estimate"
        >
          Estimate
        </Link>
      </div>
    </header>
  );
}
