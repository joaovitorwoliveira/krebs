"use client";

import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";
import { awardsContent } from "@/app/escritorio/office";

export default function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionVariants: Variants = {
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
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
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
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-[1250px] mx-auto">
        <motion.h2
          variants={titleVariants}
          className="text-3xl font-semibold text-dark mb-6"
        >
          {awardsContent.title}
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {awardsContent.awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-6 last:mb-0"
            >
              <h3 className="font-semibold text-dark mb-2">
                {award.year} {award.title}
              </h3>
              <p className="text-sm font-light text-green-5 mb-2">
                {award.description}
              </p>
              {award.project && (
                <p className="text-sm font-light text-green-5 italic">
                  {award.project}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
