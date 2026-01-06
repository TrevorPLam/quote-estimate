/**
 * Name, address, and phone block for local SEO consistency.
 */
import { siteConfig } from "@/config/site";

interface NAPProps {
  className?: string;
}

export function NAP({ className }: NAPProps) {
  const address = siteConfig.address;
  return (
    <div className={className}>
      <div>{siteConfig.businessName}</div>
      {"serviceAreaOnly" in address && address.serviceAreaOnly ? (
        <div>Serving clients across the region</div>
      ) : (
        <div>
          <div>{address.line1}</div>
          {address.line2 && <div>{address.line2}</div>}
          <div>
            {address.city}, {address.state} {address.zip}
          </div>
        </div>
      )}
      <a className="text-brand-primary" href={`tel:${siteConfig.phoneDial}`}>
        {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
