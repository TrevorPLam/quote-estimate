/**
 * Projects hub with case study previews.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ProjectCards } from "@/components/ProjectCards";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Case studies showing problems solved, scope, and measurable outcomes.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Projects</p>
        <h1 className="text-3xl font-bold text-slate-900">Case studies with clear before/after</h1>
        <p className="text-slate-700">Each project highlights the problem, our approach, and the outcome.</p>
        <Link href="/estimate" className="text-brand-primary underline">
          Start an estimate
        </Link>
      </div>
      <ProjectCards />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Projects", url: `${siteConfig.baseUrl}/projects` },
        ])}
      />
    </div>
  );
}
