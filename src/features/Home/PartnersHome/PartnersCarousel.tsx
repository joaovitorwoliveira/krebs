"use client";

import { useEffect, useRef } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { IMAGE_DB_URL } from "@/common/constants/db-images";

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
  {
    name: "Parceiro 7",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
  {
    name: "Parceiro 8",
    logo: `${IMAGE_DB_URL}SLdhHfnzGw1tzUue1Bw5pzaSolJvN3eILXkZqrGHbfRuW9jh`,
  },
];

export default function PartnersCarousel() {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Força o autoplay a iniciar quando o componente monta
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <div>
      <h3
        className={cn(
          "text-xl text-light mb-20 font-semibold",
          "lg:text-4xl",
          "xl:text-5xl"
        )}
      >
        {t.home.partners.subtitle}
      </h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: "auto",
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        loop={true}
        loopAdditionalSlides={2}
        speed={10000}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="partners-swiper"
      >
        {[...partners, ...partners].map((partner, index) => (
          <SwiperSlide
            key={`${partner.name}-${index}`}
            className="!w-32 lg:!w-1/6"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-30 lg:h-40 object-contain grayscale transition-all duration-300"
              />
            ) : (
              <div className="w-full h-30 lg:h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xs text-center px-2 break-words">
                  {/* {partner.name} */}
                </span>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .partners-swiper .swiper-slide {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}
