"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import "framer-motion";

import { motion } from "@/lib/motion";
import HeroCarousel from "@/components/HeroCarousel";
import Loading from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImagesLoaded = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="h-screen w-full fixed inset-0 overflow-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="z-50"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <HeroCarousel onImagesLoaded={handleImagesLoaded} />
      </motion.div>
    </div>
  );
}
