"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "@/lib/motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  "/images/projects/jardim-svg/foto-5.jpg",
  "/images/projects/jardim-ltx/foto-8.jpg",
  "/images/projects/jardim-svg/foto-2.jpg",
  "/images/projects/jardim-svg/foto-4.jpg",
  "/images/projects/jardim-atj/foto-3.jpg",
  "/images/projects/jardim-malu/foto-2.jpg",
  "/images/projects/jardim-atj/foto-1.jpg",
];

interface HeroCarouselProps {
  onImagesLoaded?: () => void;
}

export default function HeroCarousel({ onImagesLoaded }: HeroCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (loadedImages >= 3 && onImagesLoaded) {
      onImagesLoaded();
    }
  }, [loadedImages, onImagesLoaded]);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 backdrop-blur-[1px]"
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(1px)" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
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
                className="object-cover object-center sm:object-center md:object-center"
                priority={index === 0}
                sizes="100vw"
                quality={80}
                unoptimized={isMobile}
                onLoad={handleImageLoad}
              />

              <motion.div
                className="absolute inset-0 bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
