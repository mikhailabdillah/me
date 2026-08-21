import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = {
    disallow: "/",
    userAgent: "*",
  };

  if (process.env.NODE_ENV === "production") {
    rules.allow = "/";
    rules.disallow = undefined;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
  }

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
