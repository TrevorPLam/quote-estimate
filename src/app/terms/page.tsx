/**
 * Terms of service placeholder for engagements.
 */
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms for using the site and engaging our remodeling services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Terms</p>
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="text-slate-700">Review the conditions for consultations, proposals, and project work.</p>
      </div>
      <div className="space-y-3 text-slate-700">
        <p>Use of this site is for requesting estimates and learning about our services.</p>
        <p>Project agreements will include detailed scopes, payment schedules, and warranty language.</p>
        <p>Contact {siteConfig.email ?? "TODO:INPUT"} with any questions about these terms.</p>
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Terms", url: `${siteConfig.baseUrl}/terms` },
        ])}
      />
    </div>
  );
}
