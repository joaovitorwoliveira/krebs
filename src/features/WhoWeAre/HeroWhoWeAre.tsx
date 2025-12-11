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
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-40 2xl:px-80"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Imagem à esquerda */}
        <motion.div variants={itemVariants} className="w-full lg:w-2/5">
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="/images/team/andre-bw.jpg"
              alt="André Krebs"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto à direita */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-3/5 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3 text-sm md:text-base font-inter text-dark leading-relaxed">
            <h1 className="font-inter-base">{t.office.hero.title}</h1>
            <p className="text-justify">{t.office.hero.paragraph1}</p>
            <p className="text-justify">{t.office.hero.paragraph2}</p>
            <p className="text-justify">{t.office.hero.paragraph3}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
