"use client";

import { useRef } from "react";
import Link from "next/link";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function HeroWhoWeAre() {
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
      className="py-10 px-6 lg:px-10 lg:py-20"
    >
      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-encode-bold text-dark mb-8 leading-tight">
            {t.office.hero.title}
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-base font-inter text-dark mb-8 leading-relaxed max-w-2xl">
            {t.office.hero.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="/projetos">
            <Button
              text={t.office.hero.cta}
              variant="primary"
              className="uppercase py-3"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
