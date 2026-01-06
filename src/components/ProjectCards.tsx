/**
 * Project/case study cards with city context.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ProjectCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="text-xs uppercase tracking-wide text-slate-500">{project.city ?? "Project"}</div>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{project.solution}</p>
        </Link>
      ))}
    </div>
  );
}
