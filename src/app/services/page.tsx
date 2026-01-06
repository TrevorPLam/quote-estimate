/**
 * Services hub listing available offerings.
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { ServiceCards } from "@/components/ServiceCards";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Services",
  description: "Explore remodeling services with transparent estimates before work begins.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Services</p>
        <h1 className="text-3xl font-bold text-slate-900">Choose a project type to start your estimate</h1>
        <p className="text-slate-700">
          Each service includes a scoped estimate with phasing options so you can prioritize budget and schedule.
        </p>
        <Link href="/estimate" className="text-brand-primary underline">
          Start estimate
        </Link>
      </div>
      <ServiceCards />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Services", url: `${siteConfig.baseUrl}/services` },
        ])}
      />
    </div>
  );
}
