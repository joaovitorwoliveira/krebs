"use client";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";
import { NoResults } from "@/features/Filter";

import { cn } from "@/lib/utils";

import type { BlogPost } from "../types";
import BlogGrid from "./BlogGrid";

interface BlogPageProps {
  posts: BlogPost[];
  className?: string;
}

export default function BlogPage({ posts, className }: BlogPageProps) {
  const { t } = useLanguage();

  return (
    <BackgroundWrapper>
      <div className={cn("min-h-screen", className)}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <header className="pt-12 pb-16 md:pt-20 md:pb-24 text-center max-w-2xl mx-auto">
            <h1 className="font-encode-bold text-dark text-3xl md:text-5xl">
              {t.blog.pageTitle}
            </h1>
            {t.blog.pageSubtitle && (
              <p className="mt-4 text-dark/70 font-inter-light text-base md:text-lg">
                {t.blog.pageSubtitle}
              </p>
            )}
          </header>

          {posts.length === 0 ? (
            <NoResults message={t.blog.empty} />
          ) : (
            <BlogGrid posts={posts} />
          )}
        </div>
      </div>
    </BackgroundWrapper>
  );
}
