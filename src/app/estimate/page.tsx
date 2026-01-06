/**
 * Estimate page hosting the multi-step wizard.
 */
import { EstimateWizard } from "@/components/EstimateWizard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request an Estimate",
  description: "Share project details through a guided, multi-step estimate form.",
  path: "/estimate",
});

export default function EstimatePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Estimate</p>
        <h1 className="text-3xl font-bold text-slate-900">Start your estimate</h1>
        <p className="text-slate-700">
          Provide the essentials now; we will confirm site visit steps once we review your submission.
        </p>
      </div>
      <EstimateWizard />
    </div>
  );
}
