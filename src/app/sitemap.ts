import { MetadataRoute } from "next";

import { projects } from "../features/Projects/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPagesConfig = [
    {
      path: "",
      priority: 1.0,
      changefreq: "weekly" as const,
      lastModified: new Date("2024-02-01"),
    },
    {
      path: "quem-somos",
      priority: 0.8,
      changefreq: "monthly" as const,
      lastModified: new Date("2024-01-15"),
    },
    {
      path: "servicos",
      priority: 0.8,
      changefreq: "monthly" as const,
      lastModified: new Date("2024-01-15"),
    },
    {
      path: "projetos",
      priority: 0.9,
      changefreq: "weekly" as const,
      lastModified: new Date("2024-02-01"),
    },
  ];

  const dynamicProjectPages = projects.map((project) => {
    const conclusionYear = parseInt(project.conclusionDate, 10);
    const lastModified = new Date(`${conclusionYear}-01-01`);

    return {
      url: `${siteUrl}/projetos/${project.slug}`,
      lastModified: lastModified.toISOString(),
      changefreq: "yearly" as const,
      priority: 0.6,
    };
  });

  return [
    ...staticPagesConfig.map((page) => ({
      url: `${siteUrl}/${page.path}`,
      lastModified: page.lastModified.toISOString(),
      changefreq: page.changefreq,
      priority: page.priority,
    })),
    ...dynamicProjectPages,
  ];
}
