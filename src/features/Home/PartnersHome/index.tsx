"use client";

import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

import "swiper/css";

import { cn } from "@/lib/utils";

import PartnersCarousel from "./PartnersCarousel";

interface CardBigNumberProps {
  number: string;
  text: string;
  delay: number;
  className?: string;
}

function CardBigNumber({
  number,
  text,
  delay,
  className = "",
}: CardBigNumberProps) {
  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="p-6 h-full flex flex-col justify-center bg-white silka-mono">
        <div className="text-5xl lg:text-6xl xl:text-7xl font-black text-green-1 mb-2 break-words">
          {number}
        </div>
        <div className="text-xs sm:text-sm lg:text-base font-medium text-green-4 text-center break-words">
          {text}
        </div>
      </div>
    </motion.div>
  );
}

export default function PartnersHome() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={cn(
        "relative z-40 bg-green-1 py-10 px-6 ",
        "lg:px-10 lg:py-20"
      )}
      initial={{ y: 0 }}
    >
      <div className={cn("w-full mx-auto flex flex-col gap-10", "lg:gap-20")}>
        {/* Números em destaque */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CardBigNumber
              number={t.home.partners.numbers.projects.number}
              text={t.home.partners.numbers.projects.text}
              delay={0.1}
            />

            <CardBigNumber
              number={t.home.partners.numbers.cities.number}
              text={t.home.partners.numbers.cities.text}
              delay={0.2}
            />

            <CardBigNumber
              number={t.home.partners.numbers.countries.number}
              text={t.home.partners.numbers.countries.text}
              delay={0.3}
              className="col-span-2 lg:col-span-1"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            <CardBigNumber
              number={t.home.partners.numbers.developers.number}
              text={t.home.partners.numbers.developers.text}
              delay={0.4}
            />

            <CardBigNumber
              number={t.home.partners.numbers.partners.number}
              text={t.home.partners.numbers.partners.text}
              delay={0.5}
            />
          </div>
        </div>

        {/* Carousel de marcas parceiras */}
        <div className="">
          <PartnersCarousel />
        </div>
      </div>
    </motion.div>
  );
}
