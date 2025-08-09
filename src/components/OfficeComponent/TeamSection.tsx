"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";
import { teamContent } from "@/app/escritorio/office";

export default function TeamSection() {
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
      <div className="text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-semibold text-dark mb-6"
        >
          {teamContent.title}
        </motion.h2>
        <motion.div variants={itemVariants} className="mb-6">
          <Image
            className="w-full max-w-md h-auto shadow-lg mx-auto grayscale"
            src={teamContent.image}
            alt={teamContent.title}
            unoptimized
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-sm font-light text-green-5"
        >
          <Link
            href="/equipe"
            className="transition-colors duration-300 border p-2 border-green-4 hover:bg-green-4 hover:text-white"
          >
            {teamContent.text}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
