"use client";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";
import { Brain, Heart, Wrench } from "lucide-react";

import { motion } from "@/lib/motion";

export default function ServicesOptions() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
      {t.home.services.sections.map((section, index) => {
        const icons = [Brain, Heart, Wrench];
        const IconComponent = icons[index];

        return (
          <motion.div
            key={index}
            className="flex flex-col min-h-[400px] lg:min-h-[600px] relative px-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Divisória vertical para desktop */}
            {index < 2 && (
              <div className="hidden lg:block absolute lg:right-[-2rem] top-0 bottom-0 w-px bg-dark/25 max-h-[500px]" />
            )}

            {/* Ícone da seção */}
            {/* <div className="flex justify-center mb-6">
              <IconComponent className="w-26 h-26 text-dark" strokeWidth={1} />
            </div> */}

            {/* Título da seção */}
            <h3 className="font-semibold text-xl lg:text-2xl text-dark mb-10 text-center title-medium">
              {section.title}
            </h3>

            {/* Lista de itens */}
            <div className="space-y-6 mb-20 flex-1 lg:text-left lg:mb-0">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col">
                  <span className="font-semibold text-dark text-sm lg:text-base mb-2">
                    {item.label}
                  </span>
                  <span className="text-dark text-sm lg:text-base text-regular">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Botão Saiba mais */}
            <Button
              variant="secondary"
              className="border-dark text-dark uppercase w-full"
              text={section.cta}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
