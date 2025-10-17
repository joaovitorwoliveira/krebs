"use client";

import Button from "@/common/components/Button";
import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";
import ContactDrawer from "@/features/ContactDrawer";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function CtaHome() {
  const { isContactDrawerOpen, openContactDrawer, closeContactDrawer } =
    useContactDrawer();
  const { t } = useLanguage();
  return (
    <motion.div
      className={cn("relative z-40 bg-light py-10 px-6", "lg:px-10 lg:py-20")}
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
          <div className="flex items-center gap-2 mb-10">
            <div className="rounded-full bg-dark w-[10px] h-[10px]"></div>
            <h2 className={cn("text-sm text-dark uppercase font-inter-light")}>
              {t.home.ctaHome.subtitle}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1 w-2/3">
              <h2
                className={cn(
                  "font-semibold text-4xl text-dark mb-6 leading-tight",
                  "lg:text-6xl lg:mb-8"
                )}
              >
                {t.home.ctaHome.title}
              </h2>

              <motion.p
                className={cn("text-dark/80 text-lg leading-relaxed max-w-2xl")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate laboriosam quod.
              </motion.p>
            </div>

            <motion.div
              className="flex-shrink-0 w-1/3 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                text={t.home.ctaHome.button}
                onClick={openContactDrawer}
                className="px-8 py-4 uppercase bg-green-1 text-light hover:bg-green-1/90 transition-colors duration-300 font-semibold"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={closeContactDrawer}
      />
    </motion.div>
  );
}
