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
      <div className="w-full mx-auto flex flex-col items-center justify-center">
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
            {t.home.ctaHome.title}
          </h2>
        </motion.div>

        {/* Botao que abre o Drawer de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            text={t.home.ctaHome.button}
            onClick={openContactDrawer}
            className="text-lg px-6 py-3 uppercase bg-brown-2 text-white"
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
