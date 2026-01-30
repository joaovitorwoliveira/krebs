"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

import Spinner from "@/common/components/Loading/Spinner";
import { motion } from "@/lib/motion";

import NavigationButton from "../NavigationButton";
import { ImageModalContentProps } from "./types";

export default function ImageModalContent({
  images,
  projectTitle,
  selectedImageIndex,
  onNext,
  onPrevious,
  onBackdropClick,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: ImageModalContentProps) {
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((index: number) => {
    setLoadedIndices((prev) => new Set(prev).add(index));
  }, []);

  const isCurrentImageLoaded = loadedIndices.has(selectedImageIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex-1 flex items-center justify-center relative px-0 sm:px-2"
      onClick={onBackdropClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {selectedImageIndex > 0 && (
        <NavigationButton onClick={onPrevious} direction="left" />
      )}

      {selectedImageIndex < images.length - 1 && (
        <NavigationButton onClick={onNext} direction="right" />
      )}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!isCurrentImageLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
            <Spinner />
          </div>
        )}
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${projectTitle} - Imagem ${index + 1}`}
            fill
            className="object-contain transition-opacity duration-200"
            quality={70}
            style={{
              zIndex: index === selectedImageIndex ? 1 : 0,
              opacity: index === selectedImageIndex ? 1 : 0,
              pointerEvents: index === selectedImageIndex ? "auto" : "none",
            }}
            onLoad={() => handleImageLoad(index)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
