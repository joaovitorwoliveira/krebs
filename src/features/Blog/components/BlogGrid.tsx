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

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
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
    if (ref.current && !hasAnimated) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight + 100 && rect.bottom > -100;
      if (isVisible) setHasAnimated(true);
    }
  }, [hasAnimated, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated, isMounted]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      className="flex flex-col gap-16 md:gap-24"
    >
      {posts.map((post, index) => (
        <motion.article key={post.id} variants={itemVariants}>
          <Link
            href={`/blog/${post.slug}`}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center group cursor-pointer"
          >
            <div className="md:col-span-5 aspect-[4/4] relative overflow-hidden">
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="md:col-span-7 flex flex-col">
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
              <h3 className="font-encode-semibold text-2xl md:text-3xl text-dark mt-2 leading-tight">
                {post.title}
              </h3>
              {post.resume && (
                <p className="font-inter-light text-base text-dark/70 mt-4 line-clamp-3 max-w-prose">
                  {post.resume}
                </p>
              )}
              <Button
                variant="icon"
                text={t.blog.readMore}
                className="mt-6 text-sm"
              />
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
