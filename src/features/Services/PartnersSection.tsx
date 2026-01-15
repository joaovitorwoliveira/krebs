"use client";

import { useRef } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "@/lib/motion";

import "swiper/css";

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const creativePartnership =
    t.servicesPage.partnersSection.creativePartnership;
  const profitabilityFocus = t.servicesPage.partnersSection.profitabilityFocus;

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-40 2xl:px-80 bg-white"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 max-w-7xl mx-auto">
        {/* Coluna Esquerda - Parceria Criativa */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {/* Título */}
          <h2 className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl">
            {creativePartnership.title}
          </h2>

          {/* Parágrafos */}
          <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
            <p className="text-justify">{creativePartnership.paragraph1}</p>
            <p className="text-justify">{creativePartnership.paragraph2}</p>
            <p className="text-justify">{creativePartnership.paragraph3}</p>
          </div>

          {/* Subtítulo */}
          <h3 className="font-inter text-dark/60 uppercase text-xs md:text-sm mt-6">
            {creativePartnership.subtitle}
          </h3>

          {/* Grid de Logos - Escritórios Parceiros */}
          {/* Mobile: Carousel */}
          <div className="md:hidden mt-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView={2}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={2000}
              loop={true}
              allowTouchMove={false}
              className="partners-swiper"
            >
              {creativePartnership.partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] bg-gray-200 rounded-sm flex items-center justify-center p-2">
                    <span className="text-[10px] font-inter text-dark/70 text-center leading-tight break-words">
                      {partner}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-3 md:gap-4 mt-4">
            {creativePartnership.partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-gray-200 rounded-sm flex items-center justify-center p-2 md:p-3"
              >
                <span className="text-[10px] md:text-xs font-inter text-dark/70 text-center leading-tight break-words">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coluna Direita - Foco em Rentabilidade */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {/* Título */}
          <h2 className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl">
            {profitabilityFocus.title}
          </h2>

          {/* Parágrafos */}
          <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
            <p className="text-justify">{profitabilityFocus.paragraph1}</p>
            <p className="text-justify">{profitabilityFocus.paragraph2}</p>
            <p className="text-justify">{profitabilityFocus.paragraph3}</p>
          </div>

          {/* Subtítulo */}
          <h3 className="font-inter text-dark/60 uppercase text-xs md:text-sm mt-6">
            {profitabilityFocus.subtitle}
          </h3>

          {/* Grid de Logos - Incorporadoras Parceiras */}
          {/* Mobile: Carousel */}
          <div className="md:hidden mt-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView={2}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={2000}
              loop={true}
              allowTouchMove={false}
              className="partners-swiper"
            >
              {profitabilityFocus.partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] bg-gray-200 rounded-sm flex items-center justify-center p-2">
                    <span className="text-[10px] font-inter text-dark/70 text-center leading-tight break-words">
                      {partner}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-3 md:gap-4 mt-4">
            {profitabilityFocus.partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-gray-200 rounded-sm flex items-center justify-center p-2 md:p-3"
              >
                <span className="text-[10px] md:text-xs font-inter text-dark/70 text-center leading-tight break-words">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
