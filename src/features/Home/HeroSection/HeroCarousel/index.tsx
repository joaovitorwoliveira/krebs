"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageProvider";
import { useScroll, useTransform } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "@/lib/motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Button from "@/common/components/Button";
import { TextGenerateEffect } from "@/common/components/TextGenerateEffect";

import { cn } from "@/lib/utils";

import {
  checkScreenSize,
  getProjectName,
  getProjectSlug,
  HeroImage,
  images,
} from "./util";

interface HeroCarouselProps {
  onImagesLoaded?: () => void;
}

export default function HeroCarousel({ onImagesLoaded }: HeroCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(checkScreenSize());
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (loadedImages >= 3 && onImagesLoaded) {
      onImagesLoaded();
    }
  }, [loadedImages, onImagesLoaded]);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  };

  const currentImage: HeroImage = images[currentSlide];
  const currentProjectName = getProjectName(currentImage, language);
  const currentProjectSlug = getProjectSlug(currentImage);

  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          className="h-full w-full active:cursor-grabbing"
          onSlideChange={handleSlideChange}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index === 0 ? 0.3 : 0,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="relative h-full w-full"
                  initial={{
                    scale: 1.2,
                    filter: "blur(10px)",
                    opacity: 0.5,
                  }}
                  animate={{
                    scale: 1,
                    filter: "blur(0px)",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2.0,
                    delay: index === 0 ? 0.5 : 0,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={`${image.projectName.pt} - Slide ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                    sizes="100vw"
                    quality={80}
                    unoptimized={isMobile}
                    onLoad={handleImageLoad}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nome do projeto */}
        <motion.div
          className="absolute z-20 bottom-24 left-6 md:left-10 md:bottom-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h2
            key={currentProjectName}
            className="text-white text-base uppercase font-semibold tracking-wide drop-shadow-lg text-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentProjectName}
          </motion.h2>
        </motion.div>

        {/* Botão Ver Projeto */}
        <motion.div
          className="absolute z-20 bottom-24 right-6 md:right-10 md:bottom-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href={`/projetos/${currentProjectSlug}`}>
            <Button
              key={currentProjectSlug}
              variant="secondary"
              className="text-sm md:text-base"
              text={t.home.seeProject}
            ></Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Texto centralizado com efeito de scroll */}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
        style={{ y, opacity }}
      >
        <motion.div
          className={cn("text-center px-6 flex")}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="text-light text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* {t.home.heroTitle} */}
            <TextGenerateEffect
              words={t.home.heroSubtitle}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-2xl"
              duration={2.0}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
