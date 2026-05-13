import { createClient, type Entry, type EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface FrequentQuestionFields {
  name?: string;
  question: string;
  answer: string;
  question_en?: string;
  question_es?: string;
  answer_en?: string;
  answer_es?: string;
}

export type FrequentQuestionSkeleton = EntrySkeletonType<
  FrequentQuestionFields,
  "frequentQuestions"
>;

export type FrequentQuestionEntry = Entry<FrequentQuestionSkeleton, undefined, string>;

export interface BlogPostFields {
  name: string;
  title: string;
  resume: string;
  meta_description: string;
  caption?: string;
  content?: Document;
  coverImage: ContentfulAsset;
  frequentQuestions?: FrequentQuestionEntry[];
  title_en?: string;
  title_es?: string;
  resume_en?: string;
  resume_es?: string;
  meta_description_en?: string;
  meta_description_es?: string;
  caption_en?: string;
  caption_es?: string;
  content_en?: Document;
  content_es?: Document;
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
