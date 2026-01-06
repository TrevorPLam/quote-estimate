/**
 * Service cards linking to detailed service pages.
 */
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
          <p className="mt-2 text-sm text-slate-700">{service.shortDescription}</p>
          {service.priceRange && <p className="mt-2 text-xs text-slate-500">{service.priceRange}</p>}
        </Link>
      ))}
    </div>
  );
}
