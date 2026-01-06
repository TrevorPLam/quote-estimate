/**
 * Final call-to-action encouraging estimate requests.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section className="bg-white py-16">
      <div className="container-responsive rounded-2xl bg-brand-primary px-6 py-10 text-white shadow-md">
        <div className="space-y-3 md:flex md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold">{siteConfig.copy.ctaSectionHeadline}</h2>
            <p className="mt-2 text-lg opacity-90">{siteConfig.copy.ctaSectionSubheadline}</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
            <Link href="/estimate" className="rounded-full bg-white px-5 py-3 text-brand-primary font-semibold">
              Get Estimate
            </Link>
            <a href={`tel:${siteConfig.phoneDial}`} className="font-semibold underline">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
