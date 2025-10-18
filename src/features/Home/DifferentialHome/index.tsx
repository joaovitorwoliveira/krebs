"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export default function DifferentialHome() {
  const { t } = useLanguage();

  return (
    <div
      className={cn("relative z-40 bg-light py-10 px-6", "lg:px-10 lg:py-20")}
    >
      <div className="w-full mx-auto">
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
            <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
              {t.home.differentials.subtitle}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {t.home.differentials.items.map((differential, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-green-1/10 to-green-1/5 border border-green-1/20 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-green-1/20 rounded-xl mb-4 group-hover:bg-green-1/30 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-green-1" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-dark mb-3 leading-tight group-hover:text-green-1 transition-colors duration-300">
                    {differential.title}
                  </h3>

                  <p className="text-dark/70 text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-green-1/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
