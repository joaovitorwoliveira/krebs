"use client";

import Image from "next/image";

import Button from "@/common/components/Button";
import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

const clients = [
  { name: "Iguatemi", logo: "/images/clients/iguatemi.png", size: 4 },
  { name: "Vivo", logo: "/images/clients/vivo.png", size: 1 },
  { name: "Unisinos", logo: "/images/clients/unisinos.png", size: 2 },
  {
    name: "Hospital Moinhos de Vento",
    logo: "/images/clients/moinhos.png",
    size: 1,
  },
  { name: "Dadobier", logo: "/images/clients/dadobier.png", size: 2 },
  { name: "Gerdau", logo: "/images/clients/gerdau.png", size: 2 },
  { name: "Surfland", logo: "/images/clients/surfland.png", size: 4 },
  { name: "Laghetto", logo: "/images/clients/laghetto.png", size: 2 },
  { name: "Yara", logo: "/images/clients/yara.png", size: 2 },
  {
    name: "Colégio Farroupilha",
    logo: "/images/clients/colegio-farroupilha.jpg",
    size: 4,
  },
  { name: "Vila Ventura", logo: "/images/clients/vila-ventura.webp", size: 1 },
  { name: "CPFL Energia", logo: "/images/clients/cpfl.png", size: 3 },
];

export default function ClientsHome() {
  const { t } = useLanguage();
  const { openContactDrawer } = useContactDrawer();

  return (
    <div className="relative z-40 bg-white">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Seção esquerda - Clientes */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2 lg:pr-8">
            <h2
              className={cn(
                "text-dark font-semibold leading-tight uppercase",
                "text-3xl md:text-5xl",
                "lg:text-6xl 2xl:text-7xl"
              )}
            >
              {t.home.partners.subtitle}
            </h2>

            {/* Grid de logos dos clientes */}
            <div
              className={cn(
                "grid grid-cols-2 gap-6 w-full pt-4",
                "md:grid-cols-3",
                "lg:grid-cols-4 lg:gap-8",
                "2xl:pt-16"
              )}
            >
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div
                    className={cn(
                      "relative w-full",
                      client.size === 1 && "h-10 md:h-12 lg:h-14",
                      client.size === 2 && "h-14 md:h-16 lg:h-20",
                      client.size === 3 && "h-18 md:h-20 lg:h-24",
                      client.size === 4 && "h-22 md:h-24 lg:h-28"
                    )}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Botão desktop - visível apenas em lg+ */}
            <div className={cn("w-fit mt-2 hidden lg:block", "lg:mt-20")}>
              <Button
                variant="icon"
                text={t.home.partners.cta}
                onClick={openContactDrawer}
              />
            </div>
          </div>

          {/* Seção direita - Imagem */}
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/5] max-w-xl overflow-hidden mx-auto">
              <Image
                src="/images/desenho-jp.jpg"
                alt="Desenho arquitetônico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Botão mobile - visível apenas até lg */}
        <div className={cn("w-fit mt-2 block lg:hidden")}>
          <Button
            variant="icon"
            text={t.home.partners.cta}
            onClick={openContactDrawer}
          />
        </div>
      </div>
    </div>
  );
}
