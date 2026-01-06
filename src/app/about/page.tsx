/**
 * About page sharing team story and approach.
 */
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about the team delivering estimate-first remodeling projects.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">About</p>
        <h1 className="text-3xl font-bold text-slate-900">We plan before we build</h1>
        <p className="text-slate-700">
          {siteConfig.businessName} focuses on transparent planning, reliable schedules, and clear communication.
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Our approach</h2>
        <p className="text-slate-700">Every project starts with discovery, a phased estimate, and a clear milestone map.</p>
        <p className="text-slate-700">
          We coordinate design, permits, and construction partners so homeowners avoid surprises.
        </p>
      </div>
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "About", url: `${siteConfig.baseUrl}/about` },
        ])}
      />
    </div>
  );
}
