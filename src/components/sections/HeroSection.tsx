/**
 * Home hero with headline, bullets, and primary CTA.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ProofStack } from "../ProofStack";

export function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-responsive grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{siteConfig.copy.heroHeadline}</h1>
          <p className="text-lg text-slate-700">{siteConfig.copy.heroSubheadline}</p>
          <ul className="space-y-2 text-slate-700">
            {siteConfig.copy.heroBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/estimate"
              className="rounded-full bg-brand-primary px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              Get Estimate
            </Link>
            <a className="font-semibold text-slate-900" href={`tel:${siteConfig.phoneDial}`}>
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
        <ProofStack />
      </div>
    </section>
  );
}
