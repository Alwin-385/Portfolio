import type { MetadataRoute } from "next";

import { getAllProjectSlugs, PROJECT_ROUTES } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getAllProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}${PROJECT_ROUTES[slug]}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
