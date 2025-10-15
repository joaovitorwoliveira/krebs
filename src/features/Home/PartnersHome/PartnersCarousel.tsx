"use client";

import { IMAGE_DB_URL } from "@/common/constants/db-images";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

const partners = [
  {
    name: "Melnick",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Obra Prima Arquitetura",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Condomínios de Alto Padrão",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Resorts Parceiros",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Clubes Parceiros",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Parceiro 6",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
];

export default function PartnersCarousel() {
  const { t } = useLanguage();

  return (
    <div>
      <h2
        className={cn(
          "text-2xl text-light mb-6 font-semibold text-center",
          "lg:text-3xl lg:mb-20"
        )}
      >
        {t.home.partners.subtitle}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-30 lg:h-40 object-contain brightness-0 invert transition-all duration-300"
              />
            ) : (
              <div className="w-full h-30 lg:h-40 bg-light rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xs text-center px-2 break-words">
                  {partner.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
