"use client";

import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import ServicesOptions from "./ServicesOptions";

export default function ServicesHome() {
  const { t } = useLanguage();

  return (
    <motion.div
      className="relative z-40 bg-white py-10 px-6 lg:px-10 lg:py-20"
      initial={{ y: 0 }}
    >
      <div className="w-full mx-auto">
        {/* Título principal */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className={cn(
              "font-semibold text-3xl text-dark mb-6",
              "lg:text-4xl",
              "xl:text-5xl"
            )}
          >
            {t.home.services.title}
          </h2>

          <motion.p
            className={cn(
              "text-dark font-light text-sm leading-relaxed",
              "lg:text-base"
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <BoldText>{t.home.services.subtitle}</BoldText>
          </motion.p>
        </motion.div>

        <ServicesOptions />
      </div>
    </motion.div>
  );
}
