/**
 * City-specific service area page with unique copy and projects.
 */
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface CityPageProps {
  params: { city: string };
}

export const generateMetadata = ({ params }: CityPageProps) => {
  const city = siteConfig.serviceAreas.find((item) => item.city === params.city);
  if (!city) return buildMetadata({ title: "Service Area" });
  return buildMetadata({
    title: city.headline,
    description: city.paragraphs[0] ?? city.headline,
    path: `/service-areas/${city.city}`,
  });
};

export default function CityPage({ params }: CityPageProps) {
  const city = siteConfig.serviceAreas.find((item) => item.city === params.city);
  if (!city) return notFound();

  const featuredProjectSlugs = city.featuredProjectSlugs ?? [];
  const relatedProjects = siteConfig.projects.filter((project) => featuredProjectSlugs.includes(project.slug));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Service Area</p>
        <h1 className="text-3xl font-bold text-slate-900">{city.headline}</h1>
        {city.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Projects nearby</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {relatedProjects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="text-brand-primary underline">
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Service Areas", url: `${siteConfig.baseUrl}/service-areas` },
          { name: city.headline, url: `${siteConfig.baseUrl}/service-areas/${city.city}` },
        ])}
      />
    </div>
  );
}
