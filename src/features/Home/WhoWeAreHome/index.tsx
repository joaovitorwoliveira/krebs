"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import {
  JARDIM_SVG_IMAGE_1,
  JARDIM_SVG_IMAGE_2,
  JARDIM_SVG_IMAGE_3,
  JARDIM_SVG_IMAGE_4,
  JARDIM_SVG_IMAGE_5,
} from "@/common/constants/db-images";
import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

export default function WhoWeAreHome() {
  const { t } = useLanguage();

  return (
    <div className="relative z-40 bg-light">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-40 ">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
          <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
            {t.home.whoWeAre.subtitle}
          </h2>
        </div>
        <div className="flex flex-col mx-auto w-full">
          <div className="flex flex-col gap-8 lg:gap-0">
            <div
              className={cn(
                "flex flex-col gap-8",
                "lg:flex-row lg:gap-0 lg:min-h-[600px]"
              )}
            >
              {/* Seção esquerda - Título e Texto */}
              <div className={cn("flex flex-col gap-8", "lg:flex-1 lg:pr-8")}>
                <div className="flex flex-col text-dark leading-tight">
                  <h2
                    className={cn(
                      "font-semibold text-3xl",
                      "md:text-4xl",
                      "lg:text-6xl"
                    )}
                  >
                    {t.home.whoWeAre.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 opacity-80">
                  <p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph1}</BoldText>
                  </p>

                  <p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph2}</BoldText>
                  </p>

                  <p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph3}</BoldText>
                  </p>
                </div>

                <Link
                  href="/quem-somos"
                  className={cn("hidden", "lg:block lg:w-fit")}
                >
                  <Button variant="icon" text={t.home.whoWeAre.cta}></Button>
                </Link>
              </div>

              {/* Seção direita - Imagem */}
              <div className={cn("lg:flex-1")}>
                <div className="relative h-full">
                  <div className="w-full h-[400px] lg:h-full overflow-hidden">
                    <Image
                      src={JARDIM_SVG_IMAGE_5}
                      alt="Projeto Varanda Fek - Krebs+ Arquitetura Paisagística"
                      fill
                      className="w-full h-full object-cover"
                      quality={70}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda linha - Grid de imagens */}
            <div className="relative lg:mt-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 h-[800px]">
                <div className="relative overflow-hidden">
                  <Image
                    src={JARDIM_SVG_IMAGE_1}
                    alt="Projeto Jardim SVG - Krebs+ Arquitetura Paisagística"
                    fill
                    className="object-cover"
                    quality={70}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={JARDIM_SVG_IMAGE_2}
                    alt="Projeto Jardim SVG - Krebs+ Arquitetura Paisagística"
                    fill
                    className="object-cover"
                    quality={70}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={JARDIM_SVG_IMAGE_3}
                    alt="Projeto Jardim SVG - Krebs+ Arquitetura Paisagística"
                    fill
                    className="object-cover"
                    quality={70}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={JARDIM_SVG_IMAGE_4}
                    alt="Projeto Jardim SVG - Krebs+ Arquitetura Paisagística"
                    fill
                    className="object-cover"
                    quality={70}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={cn("block mt-8", "lg:hidden")}>
            <Link href="/quem-somos">
              <Button
                variant="icon"
                className="w-full justify-start"
                text={t.home.whoWeAre.cta}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
