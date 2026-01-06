/**
 * Dynamic service detail page with structured content.
 */
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";

interface ServicePageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: ServicePageProps) => {
  const service = siteConfig.services.find((item) => item.slug === params.slug);
  if (!service) return buildMetadata({ title: "Service" });
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = siteConfig.services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Service</p>
        <h1 className="text-3xl font-bold text-slate-900">{service.name}</h1>
        <p className="text-slate-700">{service.shortDescription}</p>
        {service.priceRange && <p className="text-sm text-slate-600">{service.priceRange}</p>}
      </div>
      <div className="space-y-4">
        {service.longDescriptionParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
      <JsonLd
        data={buildServiceSchema(service.name, `${siteConfig.baseUrl}/services/${service.slug}`)}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Services", url: `${siteConfig.baseUrl}/services` },
          { name: service.name, url: `${siteConfig.baseUrl}/services/${service.slug}` },
        ])}
      />
    </div>
  );
}
