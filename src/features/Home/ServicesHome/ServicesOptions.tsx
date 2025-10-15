"use client";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

export default function ServicesOptions() {
  const { t } = useLanguage();

  const placeholderTexts = [
    "1 - Imagem consultoria",
    "2 - Imagem projeto",
    "3 - Imagem execução",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {t.home.services.sections.map((section, index) => {
        return (
          <motion.div
            key={index}
            className="flex flex-col h-[800px] border border-dark/10 bg-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-1/2 bg-green-1 flex items-center justify-center">
              <span className="text-light text-lg font-medium">
                {placeholderTexts[index]}
              </span>
            </div>

            <div className="flex flex-col h-1/2 p-8 bg-light">
              <h3 className="font-semibold text-2xl lg:text-3xl text-dark mb-6 leading-tight">
                {section.title}
              </h3>

              <div className="space-y-4 mb-6 flex-1 overflow-y-auto max-h-[200px]">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col">
                    <span className="font-inter-semibold text-dark text-base mb-1 leading-tight">
                      {item.label}
                    </span>
                    <span className="text-dark/80 text-sm leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant="icon"
                  className="w-full justify-start"
                  text={section.cta}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
