"use client";

import Image from "next/image";

import Button from "@/common/components/Button";
import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

const clients = [
  { name: "Iguatemi", logo: "/images/partners/iguatemi.png" },
  { name: "Vivo", logo: "/images/partners/vivo.png" },
  { name: "Unisinos", logo: "/images/partners/unisinos.png" },
  {
    name: "Hospital Moinhos de Vento",
    logo: "/images/partners/moinhos-de-vento.png",
  },
  { name: "Dadobier", logo: "/images/partners/dadobier.png" },
  { name: "Gerdau", logo: "/images/partners/gerdau.png" },
  { name: "Laghetto", logo: "/images/partners/laghetto.png" },
  { name: "Vinicola Aurora", logo: "/images/partners/aurora.png" },
  { name: "Yara", logo: "/images/partners/yara.png" },
  { name: "CPFL Energia", logo: "/images/partners/cpfl.png" },
  { name: "Zaffari", logo: "/images/partners/zaffari.png" },
  { name: "Aviva", logo: "/images/partners/aviva.png" },
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
                  <div className="relative w-full h-10 md:h-12 lg:h-14">
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
