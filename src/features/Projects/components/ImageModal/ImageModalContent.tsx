import Image from "next/image";

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
        key={selectedImageIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[selectedImageIndex]}
          alt={`${projectTitle} - Imagem ${selectedImageIndex + 1}`}
          fill
          className="object-contain"
          quality={40}
        />
      </motion.div>
    </motion.div>
  );
}
