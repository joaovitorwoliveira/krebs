"use client";

import { useState } from "react";

import { AnimatePresence, useScroll, useTransform } from "framer-motion";

import "framer-motion";

import Loading from "@/common/components/Loading";
import HeroCarousel from "@/features/Home/HeroCarousel";
import OfficePreview from "@/features/Home/OfficePreview";

import { motion } from "@/lib/motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const handleImagesLoaded = () => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading progress={loadingProgress} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 w-full h-screen"
        style={{
          opacity,
        }}
      >
        <HeroCarousel onImagesLoaded={handleImagesLoaded} />
      </motion.div>

      <div className="h-screen"></div>

      <OfficePreview />
    </>
  );
}
