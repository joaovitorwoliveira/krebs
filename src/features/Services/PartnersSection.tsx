"use client";

import { useRef } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function PartnersSection() {
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
        staggerChildren: 0.2,
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

  const creativePartnership =
    t.servicesPage.partnersSection.creativePartnership;
  const profitabilityFocus = t.servicesPage.partnersSection.profitabilityFocus;

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-40 2xl:px-80 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto_auto] gap-y-6 gap-x-0 lg:gap-x-16 xl:gap-x-24 2xl:gap-x-32 lg:gap-y-6 max-w-7xl mx-auto">
        {/* Coluna Esquerda - Escritórios Parceiros */}
        <motion.h2
          variants={itemVariants}
          className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl order-1 lg:order-none"
        >
          {creativePartnership.title}
        </motion.h2>

        <motion.h2
          variants={itemVariants}
          className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl order-5 lg:order-none"
        >
          {profitabilityFocus.title}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark min-h-0 order-2 lg:order-none"
        >
          <p className="text-justify">{creativePartnership.paragraph1}</p>
          <p className="text-justify">{creativePartnership.paragraph2}</p>
          <p className="text-justify">{creativePartnership.paragraph3}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark min-h-0 order-6 lg:order-none"
        >
          <p className="text-justify">{profitabilityFocus.paragraph1}</p>
          <p className="text-justify">{profitabilityFocus.paragraph2}</p>
          <p className="text-justify">{profitabilityFocus.paragraph3}</p>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="font-inter text-dark/60 uppercase text-xs md:text-sm pt-6 order-3 lg:order-none"
        >
          {creativePartnership.subtitle}
        </motion.h3>

        <motion.h3
          variants={itemVariants}
          className="font-inter text-dark/60 uppercase text-xs md:text-sm pt-6 order-7 lg:order-none"
        >
          {profitabilityFocus.subtitle}
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="pt-4 order-4 lg:order-none mb-6 lg:mb-0"
        >
          <Image
            src="/images/partners/offices/offices-grid.svg"
            alt="escritorios"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-4 order-8 lg:order-none"
        >
          <Image
            src="/images/partners/estate-developers/developers-grid.svg"
            alt="incorporadoras"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
