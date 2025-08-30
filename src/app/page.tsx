"use client";

import { useState } from "react";

import { AnimatePresence, useScroll, useTransform } from "framer-motion";

import "framer-motion";

import { motion } from "@/lib/motion";
import { Progress } from "@/components/ui/progress";
import HeroCarousel from "@/components/Home/HeroCarousel";
import OfficePreview from "@/components/Home/OfficePreview";

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
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-80 max-w-[80vw]">
                <Progress
                  value={loadingProgress}
                  className="h-1 bg-green-5 [&>div]:bg-white"
                />
              </div>
            </div>
          </motion.div>
        )}
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
