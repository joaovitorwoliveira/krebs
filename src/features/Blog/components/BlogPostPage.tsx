"use client";

import Image from "next/image";
import Link from "next/link";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

import type { BlogPost } from "../types";
import { formatBlogDate } from "../utils/format-date";
import BlogPostFAQSection from "./BlogPostFAQ";
import RichTextRenderer from "./RichTextRenderer";

interface BlogPostPageProps {
  post: BlogPost;
  className?: string;
}

export default function BlogPostPage({ post, className }: BlogPostPageProps) {
  const { t, language } = useLanguage();

  return (
    <BackgroundWrapper>
      <article className={cn("min-h-screen", className)}>
        <div className="max-w-3xl mx-auto px-6 md:px-8 pt-10 md:pt-16">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-wide font-inter-light text-dark/60 hover:text-dark transition-colors"
          >
            ← {t.blog.backToList}
          </Link>

          <header className="mt-10 md:mt-16 pb-8 md:pb-12">
            <span className="text-xs font-inter-light uppercase tracking-wide text-dark/50">
              {formatBlogDate(post.publishedAt, language)}
            </span>
            <h1 className="font-encode-bold text-dark text-3xl md:text-5xl mt-3 leading-tight">
              {post.title}
            </h1>
            {post.resume && (
              <p className="mt-4 text-dark/70 font-inter-light text-base md:text-lg leading-relaxed">
                {post.resume}
              </p>
            )}
          </header>

          <figure className="relative w-full aspect-[3/2] my-10 md:my-14 overflow-hidden">
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
            <figcaption className="text-xs italic text-dark/60 mt-2 text-center">
              {post.caption}
            </figcaption>
          )}

          <div className="pb-16 md:pb-24">
            {post.content && <RichTextRenderer content={post.content} />}
            {post.frequentQuestions && post.frequentQuestions.length > 0 && (
              <BlogPostFAQSection
                items={post.frequentQuestions}
                title={t.blog.faqTitle}
              />
            )}
          </div>
        </div>
      </article>
    </BackgroundWrapper>
  );
}
