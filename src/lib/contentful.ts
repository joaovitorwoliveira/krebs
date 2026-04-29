import { createClient, type Entry, type EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPostFields {
  name: string;
  title: string;
  resume: string;
  meta_description: string;
  caption?: string;
  content?: Document;
  coverImage: ContentfulAsset;
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, "blogPost">;

export type BlogPostEntry = Entry<BlogPostSkeleton, undefined, string>;

export type ContentfulAsset = {
  sys: { id: string; type: "Asset" };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: { width: number; height: number };
      };
      fileName: string;
      contentType: string;
    };
  };
};

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

function getClient() {
  if (!space || !accessToken) {
    throw new Error(
      "Missing Contentful credentials. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your environment."
    );
  }

  return createClient({
    space,
    accessToken,
  });
}

export async function getAllBlogPostEntries(): Promise<BlogPostEntry[]> {
  const client = getClient();

  const response = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
    include: 4,
  });

  return response.items;
}
