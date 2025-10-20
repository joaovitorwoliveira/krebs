// "use client";

import { Compare } from "@/common/components/Compare";
import {
  JARDIM_SVG_IMAGE_1,
  JARDIM_SVG_IMAGE_2,
} from "@/common/constants/db-images";
import { BoldText } from "@/common/utils/textUtils";

// import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

export default function CompareHome() {
  // const { t } = useLanguage();

  const SECOND_IMAGE = "/images/img-sem-plantas.png";

  return (
    <div className="relative z-40 bg-light">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20">
        {/* <div className="flex items-center gap-2">
          <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
          <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
            Compare
          </h2>
        </div> */}

        <div className="flex flex-col mx-auto w-full">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Título e Descrição */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2
                className={cn(
                  "font-semibold text-3xl text-dark leading-tight",
                  "md:text-4xl",
                  "lg:text-6xl"
                )}
              >
                Título da seção de comparação
              </h2>

              <p
                className={cn(
                  "text-dark font-normal text-sm opacity-80 max-w-2xl",
                  "lg:text-base"
                )}
              >
                Descrição da seção de comparação
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-7xl shadow-lg">
                <Compare
                  firstImage={JARDIM_SVG_IMAGE_1}
                  secondImage={SECOND_IMAGE}
                  className="w-full h-[300px] md:h-[500px] lg:h-[700px]"
                  firstImageClassName="object-cover"
                  secondImageClassname="object-cover"
                  initialSliderPercentage={50}
                  slideMode="hover"
                  showHandlebar={true}
                  autoplay={false}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <p className="text-sm text-dark opacity-60 font-inter-light">
                Passe o mouse sobre a imagem para ver a comparação
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
