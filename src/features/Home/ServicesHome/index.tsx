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
      className="relative z-40 bg-light py-10 px-6 lg:px-10 lg:py-40"
      initial={{ y: 0 }}
    >
      <div className="w-full mx-auto">
        <motion.div
          className="mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
            <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
              {t.home.services.title}
            </h2>
          </div>

          <motion.p
            className={cn(
              "text-dark text-3xl pt-10 max-w-[1500px]",
              "lg:text-6xl"
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <BoldText className="font-encode">
              {t.home.services.subtitle}
            </BoldText>
          </motion.p>
        </motion.div>

        <ServicesOptions />
      </div>
    </motion.div>
  );
}
