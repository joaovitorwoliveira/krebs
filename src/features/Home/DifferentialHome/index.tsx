"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { ArrowRight } from "lucide-react";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function DifferentialHome() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={cn("relative z-40 bg-green-1 py-10 px-6", "lg:px-10 lg:pb-40")}
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
              "text-2xl text-light mb-6 font-semibold text-center",
              "lg:text-3xl lg:mb-20"
            )}
          >
            {t.home.differentials.title}
          </h2>
        </motion.div>

        {/* Lista de diferenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {t.home.differentials.items.map((differential, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-light" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg lg:text-xl text-light mb-2">
                  {differential.title}
                </h3>
                <p className="text-base text-light text-regular">
                  {differential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
