/**
 * Sitemap generation covering static and dynamic routes.
 */
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/estimate",
    "/projects",
    "/process",
    "/service-areas",
    "/reviews",
    "/about",
    "/contact",
    "/policies",
    "/privacy",
    "/terms",
  ].map((path) => ({ url: `${siteConfig.baseUrl}${path}`, lastModified: new Date() }));

  const serviceRoutes = siteConfig.services.map((service) => ({
    url: `${siteConfig.baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = siteConfig.projects.map((project) => ({
    url: `${siteConfig.baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const serviceAreaRoutes = siteConfig.serviceAreas.map((area) => ({
    url: `${siteConfig.baseUrl}/service-areas/${area.city}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...serviceAreaRoutes];
}
