"use client";

import { useRef } from "react";
import Image from "next/image";

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
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-30"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
        {/* Imagem à esquerda */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-2/5 shrink-0"
        >
          <div className="relative w-full aspect-[3/5] max-w-sm lg:max-w-md">
            <Image
              src="/images/team/andre-bw.jpg"
              alt="André Krebs"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto colado na margem direita */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:ml-auto lg:max-w-xl flex flex-col gap-3 text-sm md:text-base font-inter text-dark leading-relaxed text-justify"
        >
          <p>{t.office.hero.title}</p>
          <p>{t.office.hero.paragraph1}</p>
          <p>{t.office.hero.paragraph2}</p>
          <p>{t.office.hero.paragraph3}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
