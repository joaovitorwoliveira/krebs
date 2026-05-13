import { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostPage } from "@/features/Blog";
import { transformBlogPostEntries } from "@/features/Blog/utils/transform-entry";
import { getAllBlogPostEntries } from "@/lib/contentful";
import {
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
} from "@/utils/seo/schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export const dynamic = "force-static";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPosts() {
  const entries = await getAllBlogPostEntries();
  return transformBlogPostEntries(entries);
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post não encontrado" };
  }

  const ogImageUrl = buildOgImageUrl(post.coverImage.url);
  const pageUrl = `${siteUrl}/blog/${slug}`;
  const ogTitle = `${post.title} | Krebs + Paisagismo`;

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: ogTitle,
      description: post.metaDescription,
      url: pageUrl,
      siteName: "Krebs +",
      locale: "pt_BR",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.coverImage.alt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: post.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

function buildOgImageUrl(rawUrl: string): string {
  const absolute = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
  if (!absolute.includes("ctfassets.net")) return absolute;
  const [base] = absolute.split("?");
  const params = new URLSearchParams({
    w: "1200",
    h: "630",
    fit: "fill",
    f: "center",
    fm: "jpg",
    q: "85",
  });
  return `${base}?${params.toString()}`;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: post.title, url: `${siteUrl}/blog/${slug}` },
  ]);

  const articleSchema = generateBlogPostingSchema(post, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostPage post={post} recentPosts={recentPosts} />
    </>
  );
}
