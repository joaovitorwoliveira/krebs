"use client";

import { useRef } from "react";
import Image from "next/image";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function ImagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-20 xl:py-40 xl:px-40 2xl:px-60"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 lg:items-start">
        {/* Imagem da esquerda - Escritório PB */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-3/4 flex justify-center"
        >
          <div className="relative w-full aspect-[5/3]">
            <Image
              src="/images/escritorio-pb.jpg"
              alt="Escritório de arquitetura paisagística Krebs +"
              fill
              className="object-cover"
              quality={40}
            />
          </div>
        </motion.div>

        {/* Imagem da direita - Planta Verde */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/3 flex justify-center mt-20 lg:-mt-32 xl:-mt-60"
        >
          <div className="relative w-full aspect-[3/5] max-w-sm">
            <Image
              src="/images/planta-verde.jpg"
              alt="Detalhe de vegetação - Projetos de paisagismo Krebs +"
              fill
              className="object-cover"
              quality={40}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
