"use client";

import { useRef } from "react";

import Button from "@/common/components/Button";
import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

const awardsData = [
  {
    ano: "2025",
    projeto: "Costero Condomínio Clube",
    arquitetura: "Rafael Grantham",
    premiacao: "Master Imobiliário",
  },
  {
    ano: "2021",
    projeto: "Surf Land",
    arquitetura: "GAD",
    premiacao: "A' Design Award",
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
  const { openContactDrawer } = useContactDrawer();
  const { t } = useLanguage();

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
        className="text-xl font-semibold text-dark mb-6"
      >
        {t.whoWeArePage.awardsSection.title}
      </motion.h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#999]">
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.year}
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.project}
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.architecture}
              </th>
              <th className="text-left py-2 px-4 font-medium font-inter-semibold text-[#767676] text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.award}
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

      {/* Mobile List */}
      <div className="md:hidden">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            variants={rowVariants}
            className="border-t border-[#999] py-3 space-y-1.5"
          >
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.year}
              </span>
              <span className="text-dark text-xs">{award.ano}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.project}
              </span>
              <span className="text-dark text-xs text-right flex-1 ml-4">
                {award.projeto}
              </span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-dark text-sm">
                {t.whoWeArePage.awardsSection.tableHeaders.award}
              </span>
              <span className="text-dark text-xs text-right flex-1 ml-4">
                {award.premiacao}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture + Nature Section */}
      <motion.div
        variants={titleVariants}
        className="mt-40 mb-8 lg:mb-20 lg:mt-40 2xl:mt-60"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-3 items-center lg:items-start mb-10">
          <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-dark lg:text-right lg:pr-10 xl:pr-20">
            {t.whoWeArePage.awardsSection.architecturePlusNature.architecture}
          </h3>
          <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-dark text-center lg:mt-20">
            +
          </span>
          <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-dark lg:text-left lg:pl-10 xl:pl-20 lg:mt-40">
            {t.whoWeArePage.awardsSection.architecturePlusNature.nature}
          </h3>
        </div>

        <div className="flex justify-center pt-6">
          <Button
            text={t.whoWeArePage.awardsSection.architecturePlusNature.cta}
            onClick={openContactDrawer}
            variant="primary"
            className="px-8 py-3"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
