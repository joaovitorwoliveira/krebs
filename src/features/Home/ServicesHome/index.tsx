"use client";

import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

import ServicesOptions from "./ServicesOptions";

export default function ServicesHome() {
  const { t } = useLanguage();

  return (
    <div className="relative z-40 bg-light py-10 px-6 lg:px-10 lg:py-40">
      <div className="w-full mx-auto">
        <div className="mb-12 lg:mb-20">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
            <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
              {t.home.services.title}
            </h2>
          </div>

          <p
            className={cn(
              "text-dark text-3xl pt-10 max-w-[1500px]",
              "lg:text-6xl"
            )}
          >
            <BoldText className="font-encode">
              {t.home.services.subtitle}
            </BoldText>
          </p>
        </div>

        <ServicesOptions />
      </div>
    </div>
  );
}
