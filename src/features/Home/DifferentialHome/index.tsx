"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { ArrowRight } from "lucide-react";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function DifferentialHome() {
  const { t } = useLanguage();

  return (
    <motion.div
      className={cn("relative z-40 bg-green-1 py-10 px-6", "lg:px-10 lg:py-20")}
      initial={{ y: 0 }}
    >
      <div className="w-full mx-auto">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className={cn(
              "text-3xl text-light mb-8 font-semibold text-center",
              "lg:mb-10"
            )}
          >
            {t.home.differentials.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {t.home.differentials.items.map((differential, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-8 bg-light/5 backdrop-blur-sm border border-light/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-2">
                <div className="w-12 h-12 bg-light/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-light" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-xl lg:text-2xl text-light mb-4 leading-tight">
                  {differential.title}
                </h3>
                <p className="text-base text-light/90 leading-relaxed">
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
