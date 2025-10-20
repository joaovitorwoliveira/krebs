"use client";

import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";
import { Award, Leaf, Users, Workflow } from "lucide-react";

import { cn } from "@/lib/utils";

export default function DifferentialHome() {
  const { t } = useLanguage();

  const differentialIcons = [
    {
      Icon: Leaf,
      color: "text-green-1",
      bgColor: "bg-green-1/10",
      accent: "bg-green-2/20",
    },
    {
      Icon: Users,
      color: "text-green-2",
      bgColor: "bg-green-2/10",
      accent: "bg-green-3/20",
    },
    {
      Icon: Workflow,
      color: "text-green-3",
      bgColor: "bg-green-3/10",
      accent: "bg-green-4/20",
    },
    {
      Icon: Award,
      color: "text-green-4",
      bgColor: "bg-green-4/10",
      accent: "bg-green-5/20",
    },
  ];

  return (
    <div
      className={cn("relative z-40 bg-light py-10 px-6", "lg:px-10 lg:py-40")}
    >
      <div className="w-full mx-auto">
        <div className="mb-12 lg:mb-20">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
            <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
              {t.home.differentials.subtitle}
            </h2>
          </div>

          <p
            className={cn(
              "text-dark text-3xl pt-10 max-w-[1500px]",
              "lg:text-6xl"
            )}
          >
            <BoldText className="font-encode">
              {t.home.differentials.title}
            </BoldText>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 relative">
          {t.home.differentials.items.map((differential, index) => {
            const { Icon, color, bgColor, accent } = differentialIcons[index];

            const positionVariations = [
              { transform: "translateY(0)", height: "h-[320px]" },
              { transform: "translateY(20px)", height: "h-[340px]" },
              { transform: "translateY(-10px)", height: "h-[300px]" },
              { transform: "translateY(15px)", height: "h-[360px]" },
            ];

            const variation =
              positionVariations[index % positionVariations.length];

            return (
              <div
                key={index}
                className={cn(
                  "relative border border-green-1/30 bg-white/90 backdrop-blur-sm",
                  "p-6 lg:p-8 shadow-lg",
                  variation.height
                )}
                style={{
                  transform: variation.transform,
                }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={cn(
                      "relative w-16 h-16 mb-6 flex items-center justify-center",
                      bgColor
                    )}
                  >
                    <Icon className={cn("w-8 h-8", color)} />

                    <div
                      className={cn(
                        "absolute -top-1 -right-1 w-4 h-4 rounded-full",
                        accent,
                        "opacity-60"
                      )}
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="font-bold text-xl text-dark mb-4 leading-tight">
                      {differential.title}
                    </h3>

                    <p className="text-dark/70 text-base leading-relaxed flex-1 mb-4">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-1/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-1/5 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  );
}
