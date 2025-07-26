"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Variants, useInView } from "framer-motion";

import { motion } from "@/lib/motion";
import ImageModal from "./ImageModal";
import { ImageGalleryProps } from "./types";

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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

  return (
    <>
      <div className="px-4 md:px-6 pb-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="columns-1 md:columns-2 lg:columns-3 gap-3"
        >
          {images.map((image, index) => {
            const height = heights[index % heights.length];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="break-inside-avoid mb-3 cursor-pointer"
                style={{ height }}
                onClick={() => openModal(index)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`${projectTitle} - Imagem ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
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
