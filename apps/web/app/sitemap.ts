import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NODE_ENV !== "production") {
    return [];
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
  }

  const pages = ["about", "projects"];

  const sites: MetadataRoute.Sitemap = [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1.0,
      url: siteUrl, // Homepage
    },
  ];

  for (const page of pages) {
    sites.push({
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${siteUrl}/${page}`,
    });
  }

  return sites;
}
