"use client";

import { HeroSectionProps } from "@/features/Home/HeroSection/types";
import { useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import HeroCarousel from "./HeroCarousel";

export default function HeroSection({
  onImagesLoaded,
  className,
}: HeroSectionProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn("fixed inset-0 w-full h-screen", className)}
      style={{ opacity }}
    >
      <HeroCarousel onImagesLoaded={onImagesLoaded} />

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Mouse
          className="text-light animate-bounce"
          width={32}
          height={32}
          style={{ animationDuration: "1.5s" }}
        />

        <span className="text-light text-xs font-semibold mt-2 drop-shadow-lg silka-mono">
          SCROLL
        </span>
      </motion.div>
    </motion.div>
  );
}
