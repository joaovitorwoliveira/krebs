"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import NavigationButton from "./NavigationButton";
import ThumbnailButton from "./ThumbnailButton";

interface ImageModalProps {
  images: string[];
  projectTitle: string;
  selectedImageIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (index: number) => void;
}

export default function ImageModal({
  images,
  projectTitle,
  selectedImageIndex,
  onClose,
  onNext,
  onPrevious,
  onSelectImage,
}: ImageModalProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    },
    [onClose, onNext, onPrevious]
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (
      isLeftSwipe &&
      selectedImageIndex !== null &&
      selectedImageIndex < images.length - 1
    ) {
      onNext();
    }
    if (isRightSwipe && selectedImageIndex !== null && selectedImageIndex > 0) {
      onPrevious();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex, handleKeyDown]);

  return (
    <AnimatePresence mode="wait">
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-50 flex flex-col bg-dark"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative z-20 p-6 flex justify-between items-center"
          >
            <div className="text-white text-sm font-medium">
              {selectedImageIndex + 1} / {images.length}
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-4xl hover:text-green-1 transition-all duration-200 cursor-pointer 
                         w-10 h-10 flex items-center justify-center"
            >
              ×
            </motion.button>
          </motion.div>

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
            onClick={handleBackdropClick}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {selectedImageIndex > 0 && (
              <NavigationButton onClick={onPrevious} position="left">
                ‹
              </NavigationButton>
            )}

            {selectedImageIndex < images.length - 1 && (
              <NavigationButton onClick={onNext} position="right">
                ›
              </NavigationButton>
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
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="p-2"
          >
            <div className="flex gap-1 justify-center overflow-x-auto max-w-full scrollbar-hide">
              {images.map((image, index) => (
                <ThumbnailButton
                  key={index}
                  image={image}
                  index={index}
                  isSelected={index === selectedImageIndex}
                  onClick={() => onSelectImage(index)}
                  projectTitle={projectTitle}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// max-w-[120vw] sm:max-w-[85vw] max-h-[100vh]
