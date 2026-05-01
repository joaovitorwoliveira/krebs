"use client";

import { useMemo } from "react";
import Image from "next/image";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

import type { BlogPost } from "../types";
import { calculateReadTime } from "../utils/calculate-read-time";
import { extractHeadings } from "../utils/extract-headings";
import { formatBlogDate } from "../utils/format-date";
import BlogBreadcrumb from "./BlogBreadcrumb";
import BlogPostFAQSection from "./BlogPostFAQ";
import BlogPostShare from "./BlogPostShare";
import BlogPostTOC from "./BlogPostTOC";
import RichTextRenderer from "./RichTextRenderer";

interface BlogPostPageProps {
  post: BlogPost;
  className?: string;
}

export default function BlogPostPage({ post, className }: BlogPostPageProps) {
  const { t, language } = useLanguage();

  const headings = useMemo(
    () => (post.content ? extractHeadings(post.content) : []),
    [post.content]
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
          <BlogBreadcrumb postTitle={post.title} />
        </div>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <header className="mt-4 md:mt-8 pb-8 md:pb-12">
            <div className="flex items-center gap-3 text-xs font-inter-light uppercase tracking-wide text-dark/50">
              <span>{formatBlogDate(post.publishedAt, language)}</span>
              <span aria-hidden>·</span>
              <span>
                {calculateReadTime(
                  post.content,
                  post.frequentQuestions,
                  post.resume
                )}{" "}
                {t.blog.readingTime}
              </span>
            </div>
            <h1 className="font-encode text-dark text-3xl md:text-5xl mt-4 leading-tight">
              {post.title}
            </h1>
            {post.resume && (
              <p className="mt-10 text-dark/70 font-inter-light text-base leading-relaxed">
                {post.resume}
              </p>
            )}
          </header>

          <figure className="relative w-full aspect-[3/2] my-10 overflow-hidden">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </figure>
          {post.caption && (
            <figcaption className="text-xs italic text-dark/60 mb-10 text-center">
              {post.caption}
            </figcaption>
          )}

          <div className="pb-16 md:pb-24">
            {post.content && (
              <RichTextRenderer
                content={post.content}
                headingIds={headingIds}
              />
            )}
            <BlogPostShare title={post.title} />
            {post.frequentQuestions && post.frequentQuestions.length > 0 && (
              <BlogPostFAQSection
                items={post.frequentQuestions}
                title={t.blog.faqTitle}
              />
            )}
            <div data-toc-boundary aria-hidden />
          </div>
        </div>
      </article>
    </BackgroundWrapper>
  );
}
