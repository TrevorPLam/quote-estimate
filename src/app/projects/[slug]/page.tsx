/**
 * Project detail page walking through outcome and scope.
 */
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface ProjectPageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: ProjectPageProps) => {
  const project = siteConfig.projects.find((item) => item.slug === params.slug);
  if (!project) return buildMetadata({ title: "Project" });
  return buildMetadata({
    title: project.title,
    description: project.solution,
    path: `/projects/${project.slug}`,
  });
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = siteConfig.projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Case Study</p>
        <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
        <p className="text-slate-700">Problem: {project.problem}</p>
        <p className="text-slate-700">Solution: {project.solution}</p>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Scope</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {project.scopeBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-slate-700">Timeline: {project.timelineText}</p>
        <p className="text-slate-700">Results: {project.resultsText}</p>
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Projects", url: `${siteConfig.baseUrl}/projects` },
          { name: project.title, url: `${siteConfig.baseUrl}/projects/${project.slug}` },
        ])}
      />
    </div>
  );
}
