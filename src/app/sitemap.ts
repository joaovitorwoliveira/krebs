import { MetadataRoute } from "next";

import { transformBlogPostEntries } from "@/features/Blog/utils/transform-entry";
import { getAllBlogPostEntries } from "@/lib/contentful";

import { projects } from "../features/Projects/get-projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    {
      path: "blog",
      priority: 0.8,
      changefreq: "weekly" as const,
      lastModified: new Date(),
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

  let dynamicBlogPages: MetadataRoute.Sitemap = [];
  try {
    const entries = await getAllBlogPostEntries();
    const posts = transformBlogPostEntries(entries);
    dynamicBlogPages = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changefreq: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    dynamicBlogPages = [];
  }

  return [
    ...staticPagesConfig.map((page) => ({
      url: `${siteUrl}/${page.path}`,
      lastModified: page.lastModified.toISOString(),
      changefreq: page.changefreq,
      priority: page.priority,
    })),
    ...dynamicProjectPages,
    ...dynamicBlogPages,
  ];
}
