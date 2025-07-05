"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrevious();
  };

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
  }, [selectedImageIndex]);

  if (selectedImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/50 backdrop-blur-lg"
      onClick={handleBackdropClick}
    >
      <div className="relative z-20 p-6 flex justify-between items-center backdrop-blur-sm">
        <div className="text-white text-sm font-medium">
          {selectedImageIndex + 1} / {images.length}
        </div>

        <button
          onClick={onClose}
          className="text-white text-4xl hover:text-gray-300 transition-all duration-200 cursor-pointer 
                     w-10 h-10 flex items-center justify-center
                     hover:scale-110"
        >
          ×
        </button>
      </div>

      <div
        className="flex-1 flex items-center justify-center relative px-0 sm:px-4"
        onClick={handleBackdropClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Mostrar botões de navegação apenas em telas maiores */}
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

        <div
          className="relative max-w-[100vw] sm:max-w-[85vw] max-h-[80vh] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[selectedImageIndex]}
            alt={`${projectTitle} - Imagem ${selectedImageIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-4 backdrop-blur-sm">
        <div className="flex gap-2 justify-center overflow-x-auto max-w-full scrollbar-hide">
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
      </div>
    </div>
  );
}
