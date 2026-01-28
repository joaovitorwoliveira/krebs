"use client";

import { useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [hoveredService, setHoveredService] = useState<number>(0);

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

  const services = t.servicesPage.solutions.services;
  const serviceDescriptions = t.servicesPage.solutions.descriptions;

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-40 2xl:px-80 bg-white"
    >
      <div className="flex flex-col gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
          {/* Coluna esquerda - Título e parágrafos */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/5 flex flex-col gap-6"
          >
            <h2 className="font-inter-bold text-dark uppercase">
              {t.servicesPage.solutions.title}
            </h2>
            <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
              <p className="text-justify">
                {t.servicesPage.solutions.paragraph1}
              </p>
              <p className="text-justify">
                {t.servicesPage.solutions.paragraph2}
              </p>
            </div>
          </motion.div>

          {/* Linha vertical separadora */}
          <div className="hidden lg:flex flex-col items-center self-stretch">
            <div className="w-1 h-1 rounded-full bg-dark" />
            <div className="w-px bg-dark flex-1" />
            <div className="w-1 h-1 rounded-full bg-dark" />
          </div>

          {/* Coluna direita - Lista de serviços */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/5 flex flex-col py-2"
          >
            <ul className="flex flex-col gap-5 md:gap-6 text-sm md:text-base font-inter text-dark">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="select-none text-dark/60 lg:hidden"
                  >
                    —
                  </span>
                  <button
                    onMouseEnter={() => setHoveredService(index)}
                    onClick={() => setHoveredService(index)}
                    className={`text-left leading-relaxed transition-all duration-300 cursor-pointer ${
                      hoveredService === index
                        ? "font-bold text-dark"
                        : "font-normal text-dark/60"
                    }`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna extra direita - Descrição dinâmica (desktop) */}
          <div className="hidden lg:flex w-full lg:w-2/5 flex-col py-2 h-[450px]">
            {serviceDescriptions && serviceDescriptions[hoveredService] && (
              <motion.div
                key={hoveredService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-[12px] font-inter text-dark text-justify leading-relaxed whitespace-pre-wrap"
              >
                {serviceDescriptions[hoveredService]}
              </motion.div>
            )}
          </div>
        </div>

        {/* Descrição dinâmica (mobile) - aparece abaixo de tudo */}
        <motion.div
          variants={itemVariants}
          className="flex lg:hidden w-full flex-col py-2 min-h-[200px]"
        >
          {serviceDescriptions && serviceDescriptions[hoveredService] && (
            <motion.div
              key={hoveredService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-inter text-dark text-justify leading-relaxed whitespace-pre-wrap"
            >
              {serviceDescriptions[hoveredService]}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
