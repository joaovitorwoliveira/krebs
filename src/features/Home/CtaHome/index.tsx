"use client";

import { useState } from "react";

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
      className="relative z-40 bg-light py-10 px-6 lg:px-10 lg:py-20"
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
              Contato
            </h2>
          </div>

          <h2
            className={cn(
              "font-semibold text-4xl text-dark mb-8 text-center leading-tight",
              "lg:text-6xl lg:mb-12"
            )}
          >
            {t.home.ctaHome.title}
          </h2>

          <motion.p
            className={cn(
              "text-dark/80 text-lg text-center max-w-2xl mx-auto leading-relaxed",
              "lg:text-xl"
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            laboriosam quod.
          </motion.p>
        </motion.div>

        {/* Botao que abre o Drawer de Contato */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            text={t.home.ctaHome.button}
            onClick={openContactDrawer}
            className="text-lg px-8 py-3 uppercase bg-brown-2 text-light"
          />
        </motion.div>
      </div>

      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={closeContactDrawer}
      />
    </motion.div>
  );
}
