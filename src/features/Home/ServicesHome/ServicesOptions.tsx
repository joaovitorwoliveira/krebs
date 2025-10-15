"use client";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

export default function ServicesOptions() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      {t.home.services.sections.map((section, index) => {
        return (
          <motion.div
            key={index}
            className="flex flex-col min-h-[300px] lg:min-h-[400px] relative p-8 bg-light/2 border border-dark/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-2xl lg:text-3xl text-dark mb-12 text-center leading-tight">
              {section.title}
            </h3>

            <div className="space-y-8 mb-12 flex-1 lg:text-left">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col">
                  <span className="font-inter-semibold text-dark text-base mb-3 leading-tight">
                    {item.label}
                  </span>
                  <span className="text-dark/80 text-base leading-relaxed">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="icon" className="w-full" text={section.cta} />
          </motion.div>
        );
      })}
    </div>
  );
}
