"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { JARDIM_SVG_IMAGE_7 } from "@/common/constants/db-images";
import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

export default function WhoWeAreHome() {
  const { t } = useLanguage();

  return (
    <div className="relative z-40 bg-white">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Seção esquerda - Título e Texto */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-1 lg:pr-8">
            <h2
              className={cn(
                "text-dark font-semibold leading-tight uppercase max-w-4xl",
                "text-3xl md:text-5xl",
                "lg:text-6xl 2xl:text-7xl"
              )}
            >
              {t.home.whoWeAre.title}
            </h2>

            <div className="flex flex-col gap-4 text-dark max-w-2xl">
              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "lg:text-base"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph1}</BoldText>
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "lg:text-base"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph2}</BoldText>
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "lg:text-base"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph3}</BoldText>
              </p>
            </div>

            <Link href="/quem-somos" className={cn("w-fit mt-2", "lg:mt-4")}>
              <Button variant="icon" text={t.home.whoWeAre.cta}></Button>
            </Link>
          </div>

          {/* Seção direita - Imagem */}
          <div className="lg:flex-1 lg:max-w-[50%]">
            <div className="relative w-full h-[400px] lg:h-full lg:min-h-[600px] overflow-hidden">
              <Image
                src="/images/team/office-bw.jpg"
                alt="Krebs+ Arquitetura Paisagística"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
