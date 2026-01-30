"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import { ImageGalleryProps } from "../types";
import ImageModal from "./ImageModal";

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Anima imediatamente se o componente já estiver visível na tela
    if (ref.current && !hasAnimated) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight + 50;
      if (isVisible) {
        setHasAnimated(true);
      }
    }
  }, [hasAnimated, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    // Anima quando entra na viewport pela primeira vez
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, isMounted]);

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
      <div className="px-6 md:px-10 pb-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
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
                    quality={25}
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
