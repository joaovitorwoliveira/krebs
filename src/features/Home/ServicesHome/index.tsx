"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

export default function ServicesHome() {
  const { t } = useLanguage();

  return (
    <div className="relative z-40 bg-white">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Seção esquerda - Título e Texto */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-[60%] lg:pr-8">
            <h2
              className={cn(
                "text-dark font-semibold leading-tight uppercase max-w-3xl",
                "text-3xl md:text-5xl",
                "lg:text-6xl 2xl:text-7xl"
              )}
            >
              {t.home.servicesHome.title}
            </h2>

            <div className="flex flex-col gap-4 text-dark max-w-2xl">
              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                {t.home.servicesHome.paragraph1}
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                {t.home.servicesHome.paragraph2}
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                {t.home.servicesHome.paragraph3}
              </p>
            </div>

            {/* Botão desktop - visível apenas em lg+ */}
            <Link
              href="/servicos"
              className={cn("w-fit mt-2 hidden lg:block", "lg:mt-4")}
            >
              <Button variant="icon" text={t.home.servicesHome.cta}></Button>
            </Link>
          </div>

          {/* Seção direita - Imagem */}
          <div className="lg:w-[35%] flex items-start">
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[700px]">
              <Image
                src="/images/services-home.jpg"
                alt={t.home.servicesHome.imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Botão mobile - visível apenas até lg */}
        <Link href="/servicos" className={cn("w-fit mt-2 block lg:hidden")}>
          <Button variant="icon" text={t.home.servicesHome.cta}></Button>
        </Link>
      </div>
    </div>
  );
}
