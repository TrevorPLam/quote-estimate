/**
 * Metadata helpers for consistent SEO tags and canonical URLs.
 */
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const buildMetadata = (options: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata => {
  const fullTitle = options.title
    ? siteConfig.seo.titleTemplate.replace("%s", options.title)
    : siteConfig.seo.siteTitle;
  const canonicalUrl = options.path ? `${siteConfig.baseUrl}${options.path}` : siteConfig.baseUrl;

  return {
    title: fullTitle,
    description: options.description ?? siteConfig.seo.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: options.description ?? siteConfig.seo.metaDescription,
      url: canonicalUrl,
      images: siteConfig.seo.ogImagePath ? [{ url: siteConfig.seo.ogImagePath }] : undefined,
    },
  };
};
