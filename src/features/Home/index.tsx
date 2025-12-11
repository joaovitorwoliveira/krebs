"use client";

import { useState } from "react";

import Loading from "@/common/components/Loading";
import { AnimatePresence } from "framer-motion";

import HeroSection from "./HeroSection";
import type { HomePageProps } from "./HeroSection/types";
import ServicesHome from "./ServicesHome";
import WhoWeAreHome from "./WhoWeAreHome";

export default function HomePage({ className }: HomePageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

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

      <HeroSection
        onImagesLoaded={handleImagesLoaded}
        className={isLoading ? "opacity-0" : "opacity-100"}
      />

      <div className="h-screen"></div>

      <WhoWeAreHome />
      <ServicesHome />
    </>
  );
}
