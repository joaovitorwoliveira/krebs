"use client";

import { useCallback, useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import { motion } from "@/lib/motion";

import ImageModalContent from "./ImageModalContent";
import ImageModalHeader from "./ImageModalHeader";
import ImageModalThumbnails from "./ImageModalThumbnails";
import { ImageModalProps } from "./types";
import { useFullscreen } from "./useFullscreen";
import { useSwipeHandlers } from "./useSwipeHandlers";

export default function ImageModal({
  images,
  projectTitle,
  selectedImageIndex,
  onClose,
  onNext,
  onPrevious,
  onSelectImage,
}: ImageModalProps) {
  const { isFullscreen, toggleFullscreen, exitFullscreen } = useFullscreen();
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeHandlers({
    onNext,
    onPrevious,
    selectedImageIndex,
    imagesLength: images.length,
  });

  const handleClose = useCallback(async () => {
    if (isFullscreen) {
      await exitFullscreen();
    }
    onClose();
  }, [isFullscreen, exitFullscreen, onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          exitFullscreen();
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    },
    [
      onClose,
      onNext,
      onPrevious,
      isFullscreen,
      exitFullscreen,
      toggleFullscreen,
    ]
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
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
          <ImageModalHeader
            currentIndex={selectedImageIndex}
            totalImages={images.length}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
            onClose={handleClose}
          />

          <ImageModalContent
            images={images}
            projectTitle={projectTitle}
            selectedImageIndex={selectedImageIndex}
            onNext={onNext}
            onPrevious={onPrevious}
            onBackdropClick={handleBackdropClick}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />

          {!isFullscreen && (
            <ImageModalThumbnails
              images={images}
              selectedImageIndex={selectedImageIndex}
              onSelectImage={onSelectImage}
              projectTitle={projectTitle}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
