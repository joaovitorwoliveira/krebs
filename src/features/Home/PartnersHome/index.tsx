"use client";

import { useLanguage } from "@/context/LanguageProvider";

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
    <div className={`text-center ${className}`}>
      <div className="p-6 h-full flex flex-col justify-center bg-light text-regular">
        <span className="text-4xl lg:text-6xl xl:text-7xl text-green-1 break-words font-encode-semibold">
          {number}
        </span>
        <span className="text-xs sm:text-sm lg:text-base font-medium text-green-1 text-center break-words">
          {text}
        </span>
      </div>
    </div>
  );
}

export default function PartnersHome() {
  const { t } = useLanguage();

  return (
    <div
      className={cn("relative z-40 bg-green-1 py-10 px-6", "lg:px-10 lg:py-40")}
    >
      <div className="flex items-center gap-2 mb-10">
        <div className="rounded-full bg-light w-[10px] h-[10px]"></div>
        <h2 className={cn("text-sm text-light uppercase font-inter-light")}>
          {t.home.partners.title}
        </h2>
      </div>

      <div className={cn("w-full mx-auto flex flex-col gap-10", "lg:gap-20")}>
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

        <div className="">
          <PartnersCarousel />
        </div>
      </div>
    </div>
  );
}
