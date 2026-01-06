/**
 * Process page describing estimate workflow and project phases.
 */
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

const phases = [
  { title: "Consult", detail: "We review goals, constraints, and timelines during a focused conversation." },
  { title: "Estimate", detail: "You receive a phased estimate with inclusions, exclusions, and milestone dates." },
  { title: "Pre-construction", detail: "We finalize selections, handle permits, and align the build schedule." },
  { title: "Build", detail: "Dedicated lead keeps you updated on progress, inspections, and punch list." },
];

export const metadata = buildMetadata({
  title: "Process",
  description: "Understand how we move from consultation to final walkthrough with transparent steps.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Process</p>
        <h1 className="text-3xl font-bold text-slate-900">How our estimate-first process works</h1>
        <p className="text-slate-700">Clear milestones and communication from start to finish.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{phase.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{phase.detail}</p>
          </div>
        ))}
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Process", url: `${siteConfig.baseUrl}/process` },
        ])}
      />
    </div>
  );
}
