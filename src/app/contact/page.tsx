/**
 * Contact page with direct methods and fallback form.
 */
import { ContactMethods } from "@/components/ContactMethods";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Reach our team for estimates, consultations, or project questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Contact</p>
        <h1 className="text-3xl font-bold text-slate-900">Talk with our team</h1>
        <p className="text-slate-700">We respond quickly during business hours to confirm next steps.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ContactMethods className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" />
        <LeadForm />
      </div>
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Contact", url: `${siteConfig.baseUrl}/contact` },
        ])}
      />
    </div>
  );
}
