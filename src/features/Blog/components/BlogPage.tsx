"use client";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";
import { NoResults } from "@/features/Filter";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import type { BlogPost } from "../types";
import BlogGrid from "./BlogGrid";

interface BlogPageProps {
  posts: BlogPost[];
  className?: string;
}

export default function BlogPage({ posts, className }: BlogPageProps) {
  const { t } = useLanguage();
  const count = posts.length.toString().padStart(2, "0");

  return (
    <BackgroundWrapper>
      <div className={cn("min-h-screen", className)}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20 lg:pb-40">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.5, 0.7, 1.2] }}
            className="pt-16 md:pt-28 pb-12 md:pb-20"
          >
            <div className="flex items-center gap-3 text-xs font-inter-light uppercase tracking-[0.18em] text-dark/50">
              <span>{t.blog.eyebrow}</span>
              {posts.length > 0 && (
                <>
                  <span aria-hidden className="h-px w-8 bg-dark/30" />
                  <span>
                    {count} {t.blog.entriesLabel}
                  </span>
                </>
              )}
            </div>
            <h1 className="font-encode-semibold text-dark uppercase leading-[0.95] tracking-tight mt-6 text-4xl md:text-6xl lg:text-7xl">
              {t.blog.pageTitle}
            </h1>
            {t.blog.pageSubtitle && (
              <p className="mt-8 md:mt-10 max-w-xl text-dark/70 font-inter-light text-base md:text-lg leading-relaxed">
                {t.blog.pageSubtitle}
              </p>
            )}
          </motion.header>

          <div className="border-t border-dark/10 pt-12 md:pt-16">
            {posts.length === 0 ? (
              <NoResults message={t.blog.empty} />
            ) : (
              <BlogGrid posts={posts} />
            )}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
