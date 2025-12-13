"use client";

import { useRef } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function MapSection() {
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

  const stats = [
    {
      number: t.whoWeArePage.mapSection.stats.projects.number,
      label: t.whoWeArePage.mapSection.stats.projects.label,
    },
    {
      number: t.whoWeArePage.mapSection.stats.states.number,
      label: t.whoWeArePage.mapSection.stats.states.label,
    },
    {
      number: t.whoWeArePage.mapSection.stats.cities.number,
      label: t.whoWeArePage.mapSection.stats.cities.label,
    },
    {
      number: t.whoWeArePage.mapSection.stats.countries.number,
      label: t.whoWeArePage.mapSection.stats.countries.label,
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-20 xl:px-40 2xl:px-60"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        {/* Mapa à esquerda - ~65% em desktop */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[65%] flex justify-center lg:justify-start"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[800px]">
            <Image
              src="/images/mapa-sem-fundo-recorte.png"
              alt="Mapa de atuação da Krebs+"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Números à direita - ~35% em desktop */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[35%] flex flex-col gap-3 lg:gap-4"
        >
          <h2 className="text-base lg:text-lg font-inter-base text-dark">
            <span className="font-inter-bold">
              {t.whoWeArePage.mapSection.title}
            </span>{" "}
            {t.whoWeArePage.mapSection.titleBold}
          </h2>

          <div className="flex flex-col text-base gap-2 font-inter text-dark  max-w-lg">
            <p>{t.whoWeArePage.mapSection.paragraph1}</p>
            <p>{t.whoWeArePage.mapSection.paragraph2}</p>
          </div>

          {/* Grid de números grandes */}
          <div className="grid grid-cols-2 gap-2 lg:gap-4 mt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-start"
              >
                <span className="text-5xl md:text-6xl xl:text-7xl font-encode-bold text-dark">
                  {stat.number}
                </span>
                <span className="text-base md:text-lg xl:text-xl font-encode text-dark">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
