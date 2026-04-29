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

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} | Krebs + Paisagismo`,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Krebs + Paisagismo`,
      description: post.metaDescription,
      images: [post.coverImage.url],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
      <BlogPostPage post={post} />
    </>
  );
}
