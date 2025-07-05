"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const selectImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div className="px-4 md:px-6 pb-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
          {images.map((image, index) => {
            const heights = [
              "250px",
              "320px",
              "280px",
              "400px",
              "350px",
              "300px",
              "450px",
              "270px",
            ];
            const height = heights[index % heights.length];

            return (
              <div
                key={index}
                className="break-inside-avoid mb-3 cursor-pointer"
                style={{ height }}
                onClick={() => openModal(index)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`${projectTitle} - Imagem ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        images={images}
        projectTitle={projectTitle}
        selectedImageIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onSelectImage={selectImage}
      />
    </>
  );
}
