"use client";

import { useMemo } from "react";
import Image from "next/image";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

import {
  useLocalizedBlogPost,
  useLocalizedBlogPosts,
} from "../hooks/use-localized-blog-post";
import type { BlogPost } from "../types";
import { calculateReadTime } from "../utils/calculate-read-time";
import { extractHeadings } from "../utils/extract-headings";
import { formatBlogDate } from "../utils/format-date";
import BlogBreadcrumb from "./BlogBreadcrumb";
import BlogPostFAQSection from "./BlogPostFAQ";
import BlogPostShare from "./BlogPostShare";
import BlogPostTOC from "./BlogPostTOC";
import BlogRecentPosts from "./BlogRecentPosts";
import RichTextRenderer from "./RichTextRenderer";

interface BlogPostPageProps {
  post: BlogPost;
  recentPosts?: BlogPost[];
  className?: string;
}

const EMPTY_RECENT_POSTS: BlogPost[] = [];

export default function BlogPostPage({
  post,
  recentPosts,
  className,
}: BlogPostPageProps) {
  const { t, language } = useLanguage();

  const localized = useLocalizedBlogPost(post);
  const localizedRecent = useLocalizedBlogPosts(
    recentPosts ?? EMPTY_RECENT_POSTS
  );

  const headings = useMemo(
    () => (localized.content ? extractHeadings(localized.content) : []),
    [localized.content]
  );
  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const showToc = headings.length >= 2;

  return (
    <BackgroundWrapper>
      <article className={cn("min-h-screen", className)}>
        {showToc && (
          <BlogPostTOC items={headings} label={t.blog.tableOfContents} />
        )}
        <div className="max-w-8xl mx-auto px-6 xl:px-10 pt-10 md:pt-16">
          <BlogBreadcrumb postTitle={localized.title} />
        </div>
        <div className="max-w-[600px] mx-auto px-6 md:px-8 xl:max-w-3xl">
          <header className="mt-4 md:mt-8 pb-8 md:pb-12">
            <div className="flex items-center gap-3 text-xs font-inter-light uppercase tracking-[0.18em] text-dark/50">
              <span>{formatBlogDate(localized.publishedAt, language)}</span>
              <span aria-hidden>·</span>
              <span>
                {calculateReadTime(
                  localized.content,
                  localized.frequentQuestions,
                  localized.resume
                )}{" "}
                {t.blog.readingTime}
              </span>
            </div>
            <h1 className="font-encode text-dark text-3xl md:text-5xl mt-4 leading-tight">
              {localized.title}
            </h1>
            {localized.resume && (
              <p className="mt-10 text-dark/70 font-inter-light text-base md:text-lg leading-relaxed">
                {localized.resume}
              </p>
            )}
          </header>

          <figure className="relative w-full aspect-[3/2] mt-12 mb-10 overflow-hidden">
            <Image
              src={localized.coverImage.url}
              alt={localized.coverImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </figure>
          {localized.caption && (
            <figcaption className="text-xs italic text-dark/60 mb-10 text-center">
              {localized.caption}
            </figcaption>
          )}

          <div className="pb-16 md:pb-24">
            {localized.content && (
              <RichTextRenderer
                content={localized.content}
                headingIds={headingIds}
              />
            )}
            <BlogPostShare title={localized.title} />
            {localized.frequentQuestions && localized.frequentQuestions.length > 0 && (
              <BlogPostFAQSection
                items={localized.frequentQuestions}
                title={t.blog.faqTitle}
              />
            )}
            {localizedRecent.length > 0 && (
              <BlogRecentPosts posts={localizedRecent} />
            )}
            <div data-toc-boundary aria-hidden />
          </div>
        </div>
      </article>
    </BackgroundWrapper>
  );
}
