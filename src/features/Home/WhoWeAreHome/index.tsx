"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

export default function WhoWeAreHome() {
  const { t } = useLanguage();

  return (
    <div className="relative z-40 bg-white">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20 2xl:px-20">
        <h2
          className={cn(
            "text-dark font-semibold leading-tight uppercase max-w-4xl",
            "text-3xl md:text-5xl",
            "lg:text-6xl 2xl:text-7xl"
          )}
        >
          {t.home.whoWeAre.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full pt-4 lg:pt-10 2xl:pt-16">
          {/* Seção esquerda - Texto */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-1 lg:pr-8">
            <div className="flex flex-col gap-4 text-dark max-w-[420px]">
              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph1}</BoldText>
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph2}</BoldText>
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                <BoldText>{t.home.whoWeAre.paragraph3}</BoldText>
              </p>
            </div>

            {/* Botão desktop - visível apenas em lg+ */}
            <Link
              href="/quem-somos"
              className={cn("w-fit mt-2 hidden lg:block", "lg:mt-4")}
            >
              <Button variant="icon" text={t.home.whoWeAre.cta}></Button>
            </Link>
          </div>

          {/* Seção direita - Imagem */}
          <div className="lg:flex-1 lg:max-w-[50%]">
            <div className="relative w-full md:h-[400px] lg:h-full lg:min-h-[500px] overflow-hidden">
              <Image
                src="/images/team/office-2-bw.jpg"
                alt="Krebs+ Arquitetura Paisagística"
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Botão mobile - visível apenas até lg */}
        <Link href="/quem-somos" className={cn("w-fit mt-2 block lg:hidden")}>
          <Button variant="icon" text={t.home.whoWeAre.cta}></Button>
        </Link>
      </div>
    </div>
  );
}
