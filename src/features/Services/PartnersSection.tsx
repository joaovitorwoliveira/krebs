"use client";

import Image from "next/image";
import { useRef } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";

import "swiper/css";

const OFFICES_BASE = "/images/partners/offices";
const ESTATE_DEVELOPERS_BASE = "/images/partners/estate-developers";

const offices: { name: string; logo: string; size: 1 | 2 | 3 }[] = [
  { name: "Obraprima", logo: `${OFFICES_BASE}/obraprima.jpeg`, size: 2 },
  { name: "Studio Ronaldo Rezende", logo: `${OFFICES_BASE}/ronaldo-rezende.svg`, size: 2 },
  { name: "Ambidestro", logo: `${OFFICES_BASE}/ambidestro.png`, size: 2 },
  { name: "bg arq", logo: `${OFFICES_BASE}/bg-arq.png`, size: 2 },
  { name: "Lubianca", logo: `${OFFICES_BASE}/lubianca.png`, size: 2 },
  { name: "eMe Que", logo: `${OFFICES_BASE}/emeque.jpeg`, size: 2 },
  { name: "Graphitar", logo: `${OFFICES_BASE}/graphitar.png`, size: 2 },
  { name: "Lidia Maciel", logo: `${OFFICES_BASE}/lidia-maciel.png`, size: 2 },
  { name: "ZBL+", logo: `${OFFICES_BASE}/zbl.jpeg`, size: 2 },
  { name: "Marcia Barbieri", logo: `${OFFICES_BASE}/marcia-barbieri.jpg`, size: 2 },
  { name: "Bernardes Arquitetura", logo: `${OFFICES_BASE}/bernardes.jpeg`, size: 2 },
  { name: "Andre Petracco", logo: `${OFFICES_BASE}/andre-petracco.png`, size: 2 },
  { name: "DDM", logo: `${OFFICES_BASE}/DDM.jpg`, size: 2 },
  { name: "Rafael Grantham", logo: `${OFFICES_BASE}/rafael gran.jpeg`, size: 2 },
  { name: "Projetebem", logo: `${OFFICES_BASE}/projetebem.jpeg`, size: 2 },
];

const estateDevelopers: { name: string; logo: string; size: 1 | 2 | 3 }[] = [
  { name: "Melnick", logo: `${ESTATE_DEVELOPERS_BASE}/melnick.png`, size: 2 },
  { name: "Arcadia", logo: `${ESTATE_DEVELOPERS_BASE}/arcadia.png`, size: 2 },
  { name: "Wagnerpar", logo: `${ESTATE_DEVELOPERS_BASE}/wagnerpar.png`, size: 2 },
  { name: "Joal Teitelbaum", logo: `${ESTATE_DEVELOPERS_BASE}/joal.png`, size: 2 },
  { name: "Grupo Zaffari", logo: `${ESTATE_DEVELOPERS_BASE}/zaffari.png`, size: 2 },
  { name: "Krystal", logo: `${ESTATE_DEVELOPERS_BASE}/krystal.png`, size: 2 },
  { name: "Andora", logo: `${ESTATE_DEVELOPERS_BASE}/andora.png`, size: 2 },
  { name: "Dallasanta", logo: `${ESTATE_DEVELOPERS_BASE}/dallasanta.png`, size: 2 },
  { name: "Aviva", logo: `${ESTATE_DEVELOPERS_BASE}/aviva.png`, size: 2 },
  { name: "Roque Chies", logo: `${ESTATE_DEVELOPERS_BASE}/roque-chies.png`, size: 2 },
  { name: "Cotiza", logo: `${ESTATE_DEVELOPERS_BASE}/cotiza.png`, size: 2 },
  { name: "ABF Developments", logo: `${ESTATE_DEVELOPERS_BASE}/abf.avif`, size: 2 },
  { name: "Porto5", logo: `${ESTATE_DEVELOPERS_BASE}/porto5.png`, size: 2 },
  { name: "Maiojama", logo: `${ESTATE_DEVELOPERS_BASE}/maiojama.png`, size: 2 },
  { name: "Latitude", logo: `${ESTATE_DEVELOPERS_BASE}/latitude.png`, size: 2 },
];

type Partner = { name: string; logo: string; size: 1 | 2 | 3 };

function PartnerLogo({
  partner,
  className,
}: {
  partner: Partner;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full",
          partner.size === 1 && "h-10 md:h-12 lg:h-14",
          partner.size === 2 && "h-14 md:h-16 lg:h-20",
          partner.size === 3 && "h-18 md:h-20 lg:h-24"
        )}
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

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
        {/* Coluna Esquerda - Escritórios Parceiros */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl">
            {creativePartnership.title}
          </h2>

          <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
            <p className="text-justify">{creativePartnership.paragraph1}</p>
            <p className="text-justify">{creativePartnership.paragraph2}</p>
            <p className="text-justify">{creativePartnership.paragraph3}</p>
          </div>

          <h3 className="font-inter text-dark/60 uppercase text-xs md:text-sm mt-6">
            {creativePartnership.subtitle}
          </h3>

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
              {offices.map((partner) => (
                <SwiperSlide key={partner.name}>
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <PartnerLogo partner={partner} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid 3 colunas */}
          <div
            className={cn(
              "hidden md:grid grid-cols-3 gap-3 mt-4",
              "md:gap-4 lg:gap-6"
            )}
          >
            {offices.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </motion.div>

        {/* Coluna Direita - Incorporadoras Parceiras */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="font-inter-bold text-dark uppercase text-base md:text-lg lg:text-xl">
            {profitabilityFocus.title}
          </h2>

          <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
            <p className="text-justify">{profitabilityFocus.paragraph1}</p>
            <p className="text-justify">{profitabilityFocus.paragraph2}</p>
            <p className="text-justify">{profitabilityFocus.paragraph3}</p>
          </div>

          <h3 className="font-inter text-dark/60 uppercase text-xs md:text-sm mt-6">
            {profitabilityFocus.subtitle}
          </h3>

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
              {estateDevelopers.map((partner) => (
                <SwiperSlide key={partner.name}>
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <PartnerLogo partner={partner} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid 3 colunas */}
          <div
            className={cn(
              "hidden md:grid grid-cols-3 gap-3 mt-4",
              "md:gap-4 lg:gap-6"
            )}
          >
            {estateDevelopers.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
