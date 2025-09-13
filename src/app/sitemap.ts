import { MetadataRoute } from "next";

import { projects } from "../features/Projects/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "equipe", "escritorio", "projetos"];

  const dynamicProjectPages = projects.map((project) => ({
    url: `${siteUrl}/projetos/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: new Date().toISOString(),
    })),
    ...dynamicProjectPages,
  ];
}
