"use client";

import { useRef } from "react";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import { ProjectDetail } from "./ProjectDetails";
import { ProjectTextsProps } from "./types";

export default function ProjectTexts({
  title,
  description,
  projectDetails,
}: ProjectTextsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const detailsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const detailItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
    >
      <motion.div variants={itemVariants} className="md:col-span-2">
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl text-dark font-semibold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-dark font-light text-sm leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>

      <motion.div variants={detailsVariants} className="space-y-3">
        {projectDetails.map((detail) => (
          <motion.div key={detail.label} variants={detailItemVariants}>
            <ProjectDetail label={detail?.label} value={detail?.value} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
