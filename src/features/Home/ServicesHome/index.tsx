"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { BoldText } from "@/common/utils/textUtils";
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
              DO PROJETO À EXECUÇÃO
            </h2>

            <div className="flex flex-col gap-4 text-dark max-w-2xl">
              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                O nosso processo une visão criativa e responsabilidade executiva
                desde a concepção: os diretores participam diretamente de cada
                etapa, garantindo que o projeto nasça com propósito, beleza e
                verdade.
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                A partir de uma investigação profunda que alinha essência e
                budget, avançamos por estudos preliminares até um projeto
                executivo preciso, que traduz a visão em diretrizes técnicas
                claras.
              </p>

              <p
                className={cn(
                  "font-normal",
                  "text-sm md:text-base",
                  "text-justify"
                )}
              >
                Essa metodologia integrada conecta design, viabilidade e
                inteligência de mercado, assegurando que cada decisão estética
                seja estratégica e que cada espaço entregue bem-estar,
                pertencimento e valorização real ao cliente.
              </p>
            </div>

            <Link href="/servicos" className={cn("w-fit mt-2", "lg:mt-4")}>
              <Button variant="icon" text="SERVIÇOS"></Button>
            </Link>
          </div>

          {/* Seção direita - Imagem */}
          <div className="lg:w-[35%] flex items-start">
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[700px]">
              <Image
                src="/images/services-home.jpg"
                alt="Do Projeto à Execução - Krebs+ Arquitetura Paisagística"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
