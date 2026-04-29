import type { Document } from "@contentful/rich-text-types";

export interface BlogPostCoverImage {
  url: string;
  width: number;
  height: number;
  alt: string;
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
}
