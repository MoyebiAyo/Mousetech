import type { MetadataRoute } from "next";
import { coreServices } from "@/data/services";
import { locations } from "@/data/locations";
import { caseStudies } from "@/data/caseStudies";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl =
  configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/$/, "")
    : "https://mousetech.app";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/web-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/mobile-apps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/web-development-nigeria", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/seo-nigeria", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/ecommerce-website-nigeria", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/website-design-lagos", changeFrequency: "weekly", priority: 0.85 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "weekly", priority: 0.8 },
  { path: "/locations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
  { path: "/search", changeFrequency: "monthly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Slightly in the past to avoid any “future date” issues with clock skew.
  const lastModified = new Date(Date.now() - 60_000);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = coreServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteUrl}/case-studies/${cs.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...locationEntries, ...caseStudyEntries];
}
