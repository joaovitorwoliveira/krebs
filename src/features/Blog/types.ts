import type { Document } from "@contentful/rich-text-types";

export type BlogLocale = "pt" | "en" | "es";

export type BlogTranslatableLocale = Exclude<BlogLocale, "pt">;

export interface BlogPostCoverImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface BlogPostFAQTranslation {
  question?: string;
  answer?: string;
}

export interface BlogPostFAQ {
  id: string;
  question: string;
  answer: string;
  translations?: Partial<Record<BlogTranslatableLocale, BlogPostFAQTranslation>>;
}

export interface BlogPostTranslation {
  title?: string;
  resume?: string;
  metaDescription?: string;
  caption?: string;
  content?: Document;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  resume: string;
  metaDescription: string;
  caption?: string;
  content?: Document;
  coverImage: BlogPostCoverImage;
  publishedAt: string;
  frequentQuestions?: BlogPostFAQ[];
  translations?: Partial<Record<BlogTranslatableLocale, BlogPostTranslation>>;
}
