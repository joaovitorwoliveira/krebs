"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import type { BlogPost } from "../types";
import { calculateReadTime } from "../utils/calculate-read-time";
import { formatBlogDate } from "../utils/format-date";

interface BlogRecentPostsProps {
  posts: BlogPost[];
}

export default function BlogRecentPosts({ posts }: BlogRecentPostsProps) {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated, isMounted]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  if (!posts.length) return null;

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-dark/10"
    >
      <h2 className="font-encode text-dark text-2xl md:text-3xl mb-10 leading-tight">
        {t.blog.recentPostsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {posts.map((post) => (
          <motion.article key={post.id} variants={itemVariants}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={post.coverImage.url}
                  alt={post.coverImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center gap-3 text-[11px] font-inter-light uppercase tracking-wide text-dark/50">
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
                <h3 className="font-encode-semibold text-lg md:text-lg text-dark mt-2 leading-tight">
                  {post.title}
                </h3>
                <Button
                  variant="icon"
                  text={t.blog.readMore}
                  className="mt-4 text-sm"
                />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
