"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BLUR_PLACEHOLDER } from "@/common/constants/db-images";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import { Project } from "../types";

interface ProjectRowProps {
  row: Project[];
  rowIndex: number;
}

export default function ProjectRow({ row, rowIndex }: ProjectRowProps) {
  const { t } = useLanguage();
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
      if (isVisible || rowIndex < 2) {
        setHasAnimated(true);
      }
    }
  }, [hasAnimated, rowIndex, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, isMounted]);

  const isVisible = hasAnimated;

  const rowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
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
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={rowVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 pt-4"
    >
      {row.map((project, itemIndex) => {
        return (
          <motion.div key={project.slug} variants={itemVariants}>
            <Link
              href={`/projetos/${project.slug}`}
              className="relative group cursor-pointer block"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.coverPhoto}
                  alt={
                    t.projects.items[
                      project.slug as keyof typeof t.projects.items
                    ]?.title || project.slug
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                  priority={rowIndex === 0 && itemIndex < 3}
                  loading={rowIndex === 0 && itemIndex < 3 ? "eager" : "lazy"}
                  quality={40}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div className="p-2" variants={itemVariants}>
                <h3 className="text-dark text-md font-inter-light lowercase opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {t.projects.items[
                    project.slug as keyof typeof t.projects.items
                  ]?.title || project.slug}
                </h3>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
