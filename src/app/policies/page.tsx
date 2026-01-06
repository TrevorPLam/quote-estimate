/**
 * Policies page outlining operational terms.
 */
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Policies",
  description: "Operational policies including cancellation and warranties.",
  path: "/policies",
});

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Policies</p>
        <h1 className="text-3xl font-bold text-slate-900">Service policies</h1>
        <p className="text-slate-700">Review how we handle scheduling, payments, and changes.</p>
      </div>
      <div className="space-y-3 text-slate-700">
        <p><strong>Cancellation:</strong> {siteConfig.policiesCopy.cancellation ?? "TODO:INPUT"}</p>
        <p><strong>No-show:</strong> {siteConfig.policiesCopy.noShow ?? "TODO:INPUT"}</p>
        <p><strong>Deposits:</strong> {siteConfig.policiesCopy.deposits ?? "TODO:INPUT"}</p>
        <p><strong>Warranties:</strong> {siteConfig.policiesCopy.warranties ?? "TODO:INPUT"}</p>
        <p><strong>Financing:</strong> {siteConfig.policiesCopy.financing ?? "TODO:INPUT"}</p>
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Policies", url: `${siteConfig.baseUrl}/policies` },
        ])}
      />
    </div>
  );
}
