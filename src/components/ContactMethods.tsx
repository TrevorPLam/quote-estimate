/**
 * Contact method list used across the site.
 */
import { siteConfig } from "@/config/site";

interface ContactMethodsProps {
  className?: string;
}

export function ContactMethods({ className }: ContactMethodsProps) {
  return (
    <div className={`flex flex-col gap-2 text-sm text-slate-700 ${className ?? ""}`}>
      <a href={`tel:${siteConfig.phoneDial}`} className="font-semibold text-brand-primary">
        {siteConfig.phoneDisplay}
      </a>
      {siteConfig.email && (
        <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-primary">
          {siteConfig.email}
        </a>
      )}
      <div>
        <div className="font-semibold text-slate-900">Hours</div>
        <ul className="mt-1 space-y-1">
          {siteConfig.hours.map((hour) => (
            <li key={hour.day}>
              {hour.day}: {hour.closed ? "Closed" : `${hour.open} - ${hour.close}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
