"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/ui/button";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
          {t.office.team.title}
        </motion.h2>
        <motion.div variants={itemVariants} className="mb-6">
          <Image
            className="w-full max-w-md h-auto shadow-lg mx-auto grayscale"
            src="/images/team/socios.jpg"
            alt={t.office.team.title}
            unoptimized
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center"
        >
          <Link href="/equipe">
            <Button
              text={t.office.team.buttonText}
              variant="secondary"
              className="text-black border-black text-sm"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
