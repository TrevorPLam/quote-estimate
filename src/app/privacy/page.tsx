/**
 * Privacy policy placeholder content.
 */
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we handle contact information for estimate requests and projects.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Privacy</p>
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-slate-700">We respect your information and only use it to respond to project inquiries.</p>
      </div>
      <div className="space-y-3 text-slate-700">
        <p>We collect contact details and project notes to prepare estimates and manage projects.</p>
        <p>Data may be shared with project partners strictly for scheduling or proposal creation.</p>
        {siteConfig.email && (
          <p>Request deletion or updates by emailing {siteConfig.email}.</p>
        )}
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Privacy", url: `${siteConfig.baseUrl}/privacy` },
        ])}
      />
    </div>
  );
}
