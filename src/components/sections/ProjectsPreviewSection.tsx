/**
 * Preview of recent projects/case studies.
 */
import { ProjectCards } from "../ProjectCards";

export function ProjectsPreviewSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container-responsive space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Recent projects</h2>
          <p className="text-slate-700">See how we moved from problem to outcome for homeowners nearby.</p>
        </div>
        <ProjectCards />
      </div>
    </section>
  );
}
