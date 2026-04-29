import { Metadata } from "next";

import { BlogPage } from "@/features/Blog";
import { transformBlogPostEntries } from "@/features/Blog/utils/transform-entry";
import { getAllBlogPostEntries } from "@/lib/contentful";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflexões, projetos e bastidores do escritório Krebs + sobre arquitetura paisagística e paisagismo.",
  keywords: [
    "blog paisagismo",
    "arquitetura paisagística",
    "krebs mais blog",
    "jardins",
    "natureza",
  ],
  openGraph: {
    title: "Blog | Krebs + Paisagismo",
    description:
      "Reflexões, projetos e bastidores do escritório Krebs + sobre arquitetura paisagística e paisagismo.",
    url: `${siteUrl}/blog`,
    images: [
      {
        url: `${siteUrl}/images/logo_full_textura.png`,
        width: 1200,
        height: 630,
        alt: "Blog Krebs + Paisagismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Krebs + Paisagismo",
    description:
      "Reflexões, projetos e bastidores do escritório Krebs + sobre arquitetura paisagística e paisagismo.",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default async function Blog() {
  const entries = await getAllBlogPostEntries();
  const posts = transformBlogPostEntries(entries);

  return <BlogPage posts={posts} />;
}
