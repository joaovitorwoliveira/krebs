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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full  2xl:pt-40">
          {/* Seção direita - Título e Texto */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-[60%] lg:pl-8 lg:items-end lg:text-right order-1 lg:order-2">
            <h2
              className={cn(
                "text-dark font-semibold leading-tight uppercase max-w-3xl",
                "text-3xl md:text-5xl",
                "lg:text-6xl 2xl:text-7xl"
              )}
            >
              {t.home.servicesHome.title}
            </h2>

            <div className="flex flex-col gap-4 text-dark max-w-lg ">
              <p
                className={cn(
                  "font-normal text-justify",
                  "text-sm md:text-base"
                )}
              >
                {t.home.servicesHome.paragraph1}
              </p>

              <p
                className={cn(
                  "font-normal text-justify",
                  "text-sm md:text-base"
                )}
              >
                {t.home.servicesHome.paragraph2}
              </p>

              <p
                className={cn(
                  "font-normal text-justify",
                  "text-sm md:text-base"
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

          {/* Seção esquerda - Imagem */}
          <div className="lg:w-[50%] flex items-start order-2 lg:order-1">
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[900px] ">
              <Image
                src="/images/andre-obra.jpg"
                alt={t.home.servicesHome.imageAlt}
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* Botão mobile - visível apenas até lg */}
          <Link
            href="/servicos"
            className={cn("w-fit mt-2 block lg:hidden order-3")}
          >
            <Button variant="icon" text={t.home.servicesHome.cta}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
