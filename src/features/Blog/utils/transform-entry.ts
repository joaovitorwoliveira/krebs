import type { Document } from "@contentful/rich-text-types";

import type {
  BlogPostEntry,
  ContentfulAsset,
  FrequentQuestionEntry,
} from "@/lib/contentful";

import type {
  BlogPost,
  BlogPostCoverImage,
  BlogPostFAQ,
  BlogPostFAQTranslation,
  BlogPostTranslation,
  BlogTranslatableLocale,
} from "../types";
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

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonEmptyDocument(doc: Document | undefined): doc is Document {
  return !!doc && Array.isArray(doc.content) && doc.content.length > 0;
}

function pruneBlogPostTranslation(
  translation: BlogPostTranslation
): BlogPostTranslation | undefined {
  const result: BlogPostTranslation = {};
  if (isNonEmptyString(translation.title)) result.title = translation.title;
  if (isNonEmptyString(translation.resume)) result.resume = translation.resume;
  if (isNonEmptyString(translation.metaDescription))
    result.metaDescription = translation.metaDescription;
  if (isNonEmptyString(translation.caption)) result.caption = translation.caption;
  if (isNonEmptyDocument(translation.content)) result.content = translation.content;
  return Object.keys(result).length > 0 ? result : undefined;
}

function pruneFAQTranslation(
  translation: BlogPostFAQTranslation
): BlogPostFAQTranslation | undefined {
  const result: BlogPostFAQTranslation = {};
  if (isNonEmptyString(translation.question)) result.question = translation.question;
  if (isNonEmptyString(translation.answer)) result.answer = translation.answer;
  return Object.keys(result).length > 0 ? result : undefined;
}

function buildPostTranslations(
  fields: BlogPostEntry["fields"]
): BlogPost["translations"] {
  const en = pruneBlogPostTranslation({
    title: fields.title_en,
    resume: fields.resume_en,
    metaDescription: fields.meta_description_en,
    caption: fields.caption_en,
    content: fields.content_en,
  });
  const es = pruneBlogPostTranslation({
    title: fields.title_es,
    resume: fields.resume_es,
    metaDescription: fields.meta_description_es,
    caption: fields.caption_es,
    content: fields.content_es,
  });
  const translations: Partial<Record<BlogTranslatableLocale, BlogPostTranslation>> = {};
  if (en) translations.en = en;
  if (es) translations.es = es;
  return Object.keys(translations).length > 0 ? translations : undefined;
}

function buildFAQTranslations(
  fields: FrequentQuestionEntry["fields"]
): BlogPostFAQ["translations"] {
  const en = pruneFAQTranslation({
    question: fields.question_en,
    answer: fields.answer_en,
  });
  const es = pruneFAQTranslation({
    question: fields.question_es,
    answer: fields.answer_es,
  });
  const translations: Partial<Record<BlogTranslatableLocale, BlogPostFAQTranslation>> = {};
  if (en) translations.en = en;
  if (es) translations.es = es;
  return Object.keys(translations).length > 0 ? translations : undefined;
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
      return {
        id: faqEntry.sys.id,
        question: f.question,
        answer: f.answer,
        translations: buildFAQTranslations(f),
      };
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
    translations: buildPostTranslations(fields),
  };
}

export function transformBlogPostEntries(entries: BlogPostEntry[]): BlogPost[] {
  return entries
    .map(transformBlogPostEntry)
    .filter((post): post is BlogPost => post !== null);
}
