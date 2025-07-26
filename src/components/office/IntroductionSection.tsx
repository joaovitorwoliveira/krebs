"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";
import { introductionContent } from "@/app/escritorio/office";

export default function IntroductionSection() {
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
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

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <Image
            className="w-full h-auto shadow-lg"
            src={introductionContent.image.src}
            alt={introductionContent.image.alt}
            unoptimized
            width={400}
            height={400}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <h1 className="text-3xl font-semibold text-dark mb-6">
            {introductionContent.title}
          </h1>
          <div className="text-sm font-light text-green-5 mb-4">
            {introductionContent.text.map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
