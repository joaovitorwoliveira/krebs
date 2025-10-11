"use client";

import React from "react";

import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

export default function ServicosPage() {
  const { t } = useLanguage();

  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            {t.header.services}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esta página está em desenvolvimento. Em breve você encontrará
            informações sobre nossos serviços.
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
