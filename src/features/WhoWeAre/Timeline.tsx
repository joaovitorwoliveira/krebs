"use client";

import React, { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { motion, useScroll, useTransform } from "motion/react";

interface TimelineEntry {
  year: string;
  description: string;
  hasCarousel?: boolean;
}

interface TimelineProps {
  data: TimelineEntry[];
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const slides = Array.from({ length: 6 }, (_, i) => i); // 6 slides placeholder
  const slidesToShow = 2; // Mostrar 2 slides no desktop

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Arrastou para direita - slide anterior
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else {
        // Arrastou para esquerda - próximo slide
        setCurrentSlide((prev) =>
          Math.min(slides.length - slidesToShow, prev + 1)
        );
      }
    }

    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Arrastou para direita - slide anterior
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else {
        // Arrastou para esquerda - próximo slide
        setCurrentSlide((prev) =>
          Math.min(slides.length - slidesToShow, prev + 1)
        );
      }
    }

    setDragOffset(0);
  };

  return (
    <div className="mt-6 relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(calc(-${currentSlide * (100 / slidesToShow)}% + ${dragOffset / slidesToShow}px))`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div
              key={slide}
              className="w-full md:w-1/2 flex-shrink-0 h-48 md:h-64 bg-green-1 flex items-center justify-center mr-2 last:mr-0"
            >
              <span className="text-light font-inter text-sm">
                Foto {slide + 1} - André Krebs {1982 + slide}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from(
          { length: slides.length - slidesToShow + 1 },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-green-4" : "bg-green-1"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-encode-bold text-dark">
          {t.office.timeline.title}
        </h2>
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-2 md:left-2 w-8 rounded-full bg-green-4 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-light" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-3xl font-encode-bold text-green-4">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-encode-bold text-green-4">
                {item.year}
              </h3>
              <p className="text-dark font-inter text-base leading-relaxed">
                {item.description}
              </p>
              {item.hasCarousel && <Carousel />}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-green-2 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-green-4 via-green-3 to-green-2"
          />
        </div>
      </div>
    </div>
  );
};
