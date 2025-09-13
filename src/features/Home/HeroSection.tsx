"use client";

import { useScroll, useTransform } from "framer-motion";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import HeroCarousel from "./HeroCarousel";
import type { HeroSectionProps } from "./types";

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
    </motion.div>
  );
}
