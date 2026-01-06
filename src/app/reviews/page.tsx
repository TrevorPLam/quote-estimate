/**
 * Reviews page showcasing client feedback and proof links.
 */
import { siteConfig } from "@/config/site";
import { Testimonials } from "@/components/Testimonials";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Reviews",
  description: "Client feedback and links to verified review platforms.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Reviews</p>
        <h1 className="text-3xl font-bold text-slate-900">What clients say</h1>
        <p className="text-slate-700">Transparent feedback plus links to verified profiles.</p>
      </div>
      <Testimonials />
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">More reviews</h2>
        <ul className="mt-2 space-y-2 text-sm text-brand-primary">
          {siteConfig.reviews.reviewPlatformLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.businessName, url: siteConfig.baseUrl },
          { name: "Reviews", url: `${siteConfig.baseUrl}/reviews` },
        ])}
      />
    </div>
  );
}
