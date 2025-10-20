"use client";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

export default function ServicesOptions() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {t.home.services.sections.map((section, index) => {
        return (
          <div
            key={index}
            className="flex flex-col h-[800px] border border-green-1/10 bg-green-1 p-2 shadow-lg"
          >
            <div
              className="relative w-full h-1/2 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/images/placeholder.png)",
              }}
            ></div>

            <div className="flex flex-col h-1/2 p-8 bg-green-1">
              <h3 className="font-semibold text-2xl lg:text-3xl text-light mb-6 leading-tight">
                {section.title}
              </h3>

              <div className="space-y-4 mb-6 flex-1 overflow-y-auto max-h-[200px]">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col">
                    <span className="font-inter-semibold text-light text-base mb-1 leading-tight">
                      {item.label}
                    </span>
                    <span className="text-light/80 text-sm leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant="icon"
                  className="w-full justify-start text-light"
                  text={section.cta}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
