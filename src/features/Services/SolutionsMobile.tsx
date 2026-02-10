"use client";

import { useState } from "react";

import { motion, Variants } from "framer-motion";

interface SolutionsMobileProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  services: string[];
  serviceDescriptions: string[];
  itemVariants: Variants;
}

export default function SolutionsMobile({
  title,
  paragraph1,
  paragraph2,
  services,
  serviceDescriptions,
  itemVariants,
}: SolutionsMobileProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="flex lg:hidden flex-col gap-8">
      {/* Título e parágrafos */}
      <motion.div variants={itemVariants} className="flex flex-col gap-6">
        <h2 className="font-inter-bold text-dark uppercase">{title}</h2>
        <div className="flex flex-col gap-4 text-sm font-inter text-dark">
          <p className="text-justify">{paragraph1}</p>
          <p className="text-justify">{paragraph2}</p>
        </div>
      </motion.div>

      {/* Accordion */}
      <motion.div variants={itemVariants} className="flex flex-col">
        {services.map((service, index) => {
          const isOpen = activeAccordion === index;

          return (
            <div key={index} className="border-b border-dark/20">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left py-4 group"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
              >
                <span
                  className={`text-sm font-inter transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    isOpen ? "font-bold text-dark" : "font-normal text-dark/70"
                  }`}
                >
                  {service}
                </span>

                {/* Seta com rotação via CSS transition */}
                <span
                  className="flex-shrink-0 ml-3 inline-flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-[stroke] duration-300 ease-out"
                      style={{
                        stroke: isOpen ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.5)",
                      }}
                    />
                  </svg>
                </span>
              </button>

              {/* Conteúdo do accordion com CSS grid trick */}
              <div
                id={`accordion-content-${index}`}
                className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div className="pb-4 pt-1">
                    <p className="text-xs font-inter text-dark/80 text-justify leading-relaxed whitespace-pre-wrap">
                      {serviceDescriptions[index]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
