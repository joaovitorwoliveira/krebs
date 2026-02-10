"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import { Project } from "../types";

interface RelatedProjectsProps {
  currentProjectSlug: string;
  allProjects: Project[];
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function seededRandom(seed: number) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function RelatedProjects({
  currentProjectSlug,
  allProjects,
}: RelatedProjectsProps) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.1,
  });

  const relatedProjects = useMemo(() => {
    const filteredProjects = allProjects.filter(
      (p) => p.slug !== currentProjectSlug
    );

    if (filteredProjects.length === 0) return [];

    const seed = hashCode(currentProjectSlug);

    const shuffled = [...filteredProjects].sort((a, b) => {
      const seedA = hashCode(a.slug + seed);
      const seedB = hashCode(b.slug + seed);
      return seededRandom(seedA) - seededRandom(seedB);
    });

    return shuffled.slice(0, 3);
  }, [currentProjectSlug, allProjects]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (ref.current && !hasAnimated) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight + 100 && rect.bottom > -100;
      if (isVisible) {
        setHasAnimated(true);
      }
    }
  }, [hasAnimated, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, isMounted]);

  const isVisible = hasAnimated;

  const containerVariants: Variants = {
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
    <div className="max-w-8xl mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-28">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-dark uppercase"
        >
          {/* {t.relatedProjects.title} */}
          Outros Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {relatedProjects.map((project) => {
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
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.div className="p-2" variants={itemVariants}>
                    <h3 className="text-dark text-md font-inter-light lowercase opacity-100  duration-300 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dark after:transition-all after:duration-300 group-hover:after:w-full">
                      {t.projects.items[
                        project.slug as keyof typeof t.projects.items
                      ]?.title || project.slug}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
