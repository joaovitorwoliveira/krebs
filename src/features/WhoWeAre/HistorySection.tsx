"use client";

import { useRef } from "react";

import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        staggerChildren: 0.3,
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
      className="py-10 px-6 lg:px-10 lg:py-20"
    >
      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-encode-bold text-dark mb-8">
            {t.office.history.title}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex flex-col gap-6">
            <p className="text-base font-inter text-dark leading-relaxed">
              <BoldText>{t.office.history.paragraph1}</BoldText>
            </p>
            <p className="text-base font-inter text-dark leading-relaxed">
              {t.office.history.paragraph2}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
