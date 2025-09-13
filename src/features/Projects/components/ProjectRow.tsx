"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 pt-10"
    >
      {row.map((project, itemIndex) => {
        const globalIndex = rowIndex * 3 + itemIndex;
        return (
          <motion.div key={globalIndex} variants={itemVariants}>
            <Link
              href={`/projetos/${project.slug}`}
              className="relative group cursor-pointer block"
            >
              <motion.div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.coverPhoto}
                  alt={
                    t.projects.items[
                      project.slug as keyof typeof t.projects.items
                    ]?.title || project.slug
                  }
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                  priority={rowIndex === 0}
                  loading={rowIndex === 0 ? "eager" : "lazy"}
                />
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div className="p-2" variants={itemVariants}>
                <h3 className="text-dark text-sm font-light text-center lowercase">
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
