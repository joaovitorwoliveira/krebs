"use client";

import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

import "swiper/css";

import { cn } from "@/lib/utils";

import PartnersCarousel from "./PartnersCarousel";

// Componente para cards de números grandes
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
      <div className="border-2 border-light rounded-lg p-6 h-full flex flex-col justify-center bg-green-5">
        <div className="text-5xl lg:text-6xl xl:text-7xl font-black text-light mb-2">
          {number}
        </div>
        <div className="text-sm lg:text-base font-medium text-light">
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
      className={cn("relative z-40 bg-white py-10 px-6 ", "lg:px-10 lg:py-40")}
      initial={{ y: 0 }}
    >
      <div
        className={cn(
          "max-w-[1440px] mx-auto flex flex-col gap-10",
          "lg:gap-20"
        )}
      >
        {/* Números em destaque */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CardBigNumber number="+ 500" text="projetos" delay={0.1} />

            <CardBigNumber number="+70" text="cidades" delay={0.2} />

            <CardBigNumber
              number="3"
              text="países"
              delay={0.3}
              className="col-span-2 lg:col-span-1"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            <CardBigNumber number="+ 25" text="incorporadoras" delay={0.4} />

            <CardBigNumber
              number="+30"
              text="escritórios parceiros"
              delay={0.5}
            />
          </div>
        </div>

        {/* Carousel de marcas parceiras */}
        <div className="mb-8">
          <PartnersCarousel />
        </div>
      </div>
    </motion.div>
  );
}
