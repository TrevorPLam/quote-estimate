/**
 * Service areas hub listing cities served.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Service Areas",
  description: "Cities we serve with remodeling estimates and project delivery.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Service Areas</p>
        <h1 className="text-3xl font-bold text-slate-900">Cities we serve</h1>
        <p className="text-slate-700">Each city page highlights local context and nearby projects.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {siteConfig.serviceAreas.map((city) => (
          <Link
            key={city.city}
            href={`/service-areas/${city.city}`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900">{city.headline}</h2>
            <p className="mt-2 text-sm text-slate-700">{city.paragraphs[0]}</p>
          </Link>
        ))}
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Service Areas", url: `${siteConfig.baseUrl}/service-areas` },
        ])}
      />
    </div>
  );
}
