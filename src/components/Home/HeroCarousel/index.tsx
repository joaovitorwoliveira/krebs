"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "@/lib/motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Button from "../../ui/button";
import {
  checkScreenSize,
  getProjectName,
  getProjectSlug,
  images,
} from "./util";

interface HeroCarouselProps {
  onImagesLoaded?: () => void;
}

export default function HeroCarousel({ onImagesLoaded }: HeroCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const currentProjectName = getProjectName(images[currentSlide]);
  const currentProjectSlug = getProjectSlug(images[currentSlide]);

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
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "custom-bullet-active",
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
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                  quality={80}
                  unoptimized={isMobile}
                  onLoad={handleImageLoad}
                />

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
            className="text-white text-xl md:text-2xl font-semibold tracking-wide drop-shadow-lg"
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
              text="VER PROJETO"
            ></Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
