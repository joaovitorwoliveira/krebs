import type {
  BlogPostEntry,
  ContentfulAsset,
  FrequentQuestionEntry,
} from "@/lib/contentful";

import type { BlogPost, BlogPostCoverImage, BlogPostFAQ } from "../types";
import { slugify } from "./slugify";

function resolveAsset(asset: ContentfulAsset | undefined, alt: string): BlogPostCoverImage | null {
  const file = asset?.fields?.file;
  if (!file?.url) return null;

  const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
  const dims = file.details?.image;

  return {
    url,
    width: dims?.width ?? 1600,
    height: dims?.height ?? 900,
    alt: asset?.fields?.description || asset?.fields?.title || alt,
  };
}

export function transformBlogPostEntry(entry: BlogPostEntry): BlogPost | null {
  const fields = entry.fields;
  if (!fields?.title || !fields.coverImage) return null;

  const coverImage = resolveAsset(fields.coverImage as ContentfulAsset, fields.title);
  if (!coverImage) return null;

  const rawFaq = (fields.frequentQuestions ?? []) as unknown as FrequentQuestionEntry[];
  const frequentQuestions = rawFaq
    .map((faqEntry): BlogPostFAQ | null => {
      const f = faqEntry?.fields;
      if (!f?.question || !f.answer) return null;
      return { id: faqEntry.sys.id, question: f.question, answer: f.answer };
    })
    .filter((x): x is BlogPostFAQ => x !== null);

  return {
    id: entry.sys.id,
    slug: slugify(fields.title),
    title: fields.title,
    resume: fields.resume ?? "",
    metaDescription: fields.meta_description ?? fields.resume ?? "",
    caption: fields.caption || undefined,
    content: fields.content,
    coverImage,
    publishedAt: entry.sys.createdAt,
    frequentQuestions: frequentQuestions.length > 0 ? frequentQuestions : undefined,
  };
}

export function transformBlogPostEntries(entries: BlogPostEntry[]): BlogPost[] {
  return entries
    .map(transformBlogPostEntry)
    .filter((post): post is BlogPost => post !== null);
}
