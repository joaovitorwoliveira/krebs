"use client";

import { useRef } from "react";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

const awardsData = [
  {
    ano: "2025",
    projeto: "Costero Condomínio Clube",
    arquitetura: "Rafael Grantan",
    premiacao: "Master Imobiliário",
  },
  {
    ano: "2021",
    projeto: "Surf Land",
    arquitetura: "GAD",
    premiacao: "A` Design Award",
  },
  {
    ano: "2020",
    projeto: "?",
    arquitetura: "?",
    premiacao: "AsBEA-RS",
  },
  {
    ano: "2014-2015",
    projeto: "Condomínio Villaggio São José",
    arquitetura: "Torres e Bello",
    premiacao: "Central & South America Property Awards",
  },
  {
    ano: "2009",
    projeto: "Espaço Sustentabilidade",
    arquitetura: "-",
    premiacao: "CASA COR - RS",
  },
  {
    ano: "2006",
    projeto: "Edifício Carlos Gomes Center",
    arquitetura: "Livia Bortoncello",
    premiacao: "Instituto de Arquitetos do Brasil",
  },
];

export default function AwardsSection() {
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
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
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

  const rowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      className="py-10 px-6 lg:px-10 lg:py-12"
    >
      <motion.h2
        variants={titleVariants}
        className="text-3xl font-semibold text-dark mb-6"
      >
        PREMIAÇÕES
      </motion.h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#999]">
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                ANO
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                PROJETO
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                ARQUITETURA
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                PREMIAÇÃO
              </th>
            </tr>
          </thead>
          <tbody>
            {awardsData.map((award, index) => (
              <motion.tr
                key={index}
                variants={rowVariants}
                className="border-b border-[#999]"
              >
                <td className="py-2 px-4 text-dark">{award.ano}</td>
                <td className="py-2 px-4 text-dark">{award.projeto}</td>
                <td className="py-2 px-4 text-dark">{award.arquitetura}</td>
                <td className="py-2 px-4 text-dark">{award.premiacao}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            variants={rowVariants}
            className="bg-white border border-[#999] rounded-lg p-4 space-y-2"
          >
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">ANO</span>
              <span className="text-dark text-sm">{award.ano}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">PROJETO</span>
              <span className="text-dark text-sm text-right flex-1 ml-4">
                {award.projeto}
              </span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">
                ARQUITETURA
              </span>
              <span className="text-dark text-sm text-right flex-1 ml-4">
                {award.arquitetura}
              </span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">PREMIAÇÃO</span>
              <span className="text-dark text-sm text-right flex-1 ml-4">
                {award.premiacao}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
