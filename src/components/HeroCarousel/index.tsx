"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  "/images/colegio-farroupilha/foto-1.jpg",
  "/images/colegio-farroupilha/foto-2.jpg",
  "/images/colegio-farroupilha/foto-3.jpg",
  "/images/colegio-farroupilha/foto-4.jpg",
  "/images/colegio-farroupilha/foto-5.jpg",
  "/images/colegio-farroupilha/foto-6.jpg",
  "/images/colegio-farroupilha/foto-7.jpg",
];

export default function HeroCarousel() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        loop={true}
        speed={1000}
        className="h-full w-full active:cursor-grabbing"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
