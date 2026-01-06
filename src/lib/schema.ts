/**
 * JSON-LD schema helpers for SEO and rich results.
 */
import { siteConfig } from "@/config/site";

export const buildLocalBusinessSchema = () => {
  const address = siteConfig.address;
  const addressBlock =
    "serviceAreaOnly" in address && address.serviceAreaOnly
      ? undefined
      : {
          streetAddress: address.line1,
          addressLocality: address.city,
          addressRegion: address.state,
          postalCode: address.zip,
        };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.phoneDial,
    image: siteConfig.seo.ogImagePath,
    url: siteConfig.baseUrl,
    address: addressBlock,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
    })),
  };
};

export const buildServiceSchema = (serviceName: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "City", name: area.city })),
  url,
});

export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const buildFAQSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});
