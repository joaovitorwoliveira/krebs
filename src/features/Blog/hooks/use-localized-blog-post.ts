"use client";

import { useMemo } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import type { Language } from "@/languages";

import type {
  BlogPost,
  BlogPostFAQ,
  BlogTranslatableLocale,
} from "../types";

function resolveFAQ(faq: BlogPostFAQ, locale: BlogTranslatableLocale): BlogPostFAQ {
  const tr = faq.translations?.[locale];
  if (!tr) return faq;
  return {
    ...faq,
    question: tr.question ?? faq.question,
    answer: tr.answer ?? faq.answer,
  };
}

function resolveFAQs(
  faqs: BlogPostFAQ[] | undefined,
  locale: BlogTranslatableLocale
): BlogPostFAQ[] | undefined {
  if (!faqs) return undefined;
  return faqs.map((faq) => resolveFAQ(faq, locale));
}

function resolveBlogPost(post: BlogPost, language: Language): BlogPost {
  if (language === "pt") return post;
  const locale = language as BlogTranslatableLocale;
  const tr = post.translations?.[locale];

  const resume = tr?.resume ?? post.resume;
  const metaDescription =
    tr?.metaDescription ?? tr?.resume ?? post.metaDescription ?? post.resume;

  return {
    ...post,
    title: tr?.title ?? post.title,
    resume,
    metaDescription,
    caption: tr?.caption ?? post.caption,
    content: tr?.content ?? post.content,
    frequentQuestions: resolveFAQs(post.frequentQuestions, locale),
  };
}

export function useLocalizedBlogPost(post: BlogPost): BlogPost {
  const { language } = useLanguage();
  return useMemo(() => resolveBlogPost(post, language), [post, language]);
}

export function useLocalizedBlogPosts(posts: BlogPost[]): BlogPost[] {
  const { language } = useLanguage();
  return useMemo(
    () => posts.map((post) => resolveBlogPost(post, language)),
    [posts, language]
  );
}
