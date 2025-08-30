"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, useScroll, useTransform } from "framer-motion";

import "framer-motion";

import { motion } from "@/lib/motion";
import { Progress } from "@/components/ui/progress";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { scrollY } = useScroll();

  // Transforma o scroll em opacidade (de 1 a 0.3 quando scrollar)
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Transforma o scroll em blur (de 0 a 3px quando scrollar)
  const blur = useTransform(scrollY, [0, 300], [0, 3]);

  // Efeito para animar o progresso
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setLoadingProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(timer);
  //         return 100;
  //       }
  //       return prev + 2;
  //     });
  //   }, 50);

  //   return () => clearInterval(timer);
  // }, []);

  const handleImagesLoaded = () => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-80 max-w-[80vw]">
                <Progress
                  value={loadingProgress}
                  className="h-1 bg-gray-800 [&>div]:bg-white"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Fixo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 w-full h-screen"
        style={{
          opacity,
          filter: blur.get() ? `blur(${blur.get()}px)` : "none",
        }}
      >
        <HeroCarousel onImagesLoaded={handleImagesLoaded} />
      </motion.div>

      {/* Spacer para dar altura ao scroll */}
      <div className="h-screen"></div>

      {/* Seção que se sobrepõe */}
      <motion.div
        className="relative z-40 bg-white min-h-screen"
        initial={{ y: 0 }}
        style={{
          boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Conteúdo da seção que se sobrepõe */}
        <div className="p-8 md:p-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossos Projetos
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Criamos paisagens que transformam espaços em experiências únicas.
            Cada projeto é pensado para harmonizar natureza e arquitetura,
            criando ambientes que inspiram e emocionam.
          </motion.p>

          {/* Grid de projetos exemplo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-gray-100 rounded-lg h-64 flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * item }}
                viewport={{ once: true }}
              >
                <span className="text-gray-500">Projeto {item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mais conteúdo para demonstrar o scroll */}
        <div className="p-8 md:p-16 bg-gray-50">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sobre o Escritório
          </motion.h3>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6">
              O Krebs+ é um escritório de paisagismo dedicado a criar espaços
              únicos que conectam pessoas e natureza. Nossa abordagem combina
              técnica e sensibilidade artística para desenvolver projetos que
              transformam ambientes.
            </p>
            <p className="text-lg text-gray-600">
              Cada projeto é uma oportunidade de criar algo especial, pensado
              para as necessidades específicas de cada cliente e as
              características únicas de cada espaço.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
