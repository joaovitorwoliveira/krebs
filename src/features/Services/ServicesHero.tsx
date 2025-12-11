"use client";

import { useRef } from "react";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

export default function ServicesHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-40 2xl:px-80"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 items-start">
        {/* Video placeholder à esquerda - Desktop: mais acima */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[45%] flex-shrink-0"
        >
          <div className="relative w-full aspect-video bg-black">
            {/* Placeholder retângulo preto */}
          </div>
        </motion.div>

        {/* Texto à direita - Desktop: mais abaixo */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-20 2xl:pt-40"
        >
          <div className="flex flex-col gap-4 text-sm md:text-base font-inter text-dark">
            <p className="text-justify">
              Na KREBS+, o projeto é o coração do nosso ecossistema e recebe,
              desde a concepção, o olhar integrado dos nossos diretores.
              Diferente de processos onde a criação é apenas delegada,
              garantimos que cada novo trabalho nasça com a influência direta
              dos sócios, assegurando um resultado que é, ao mesmo tempo, belo e
              verdadeiro. Essa imersão inicial une a excelência do design à
              viabilidade financeira e ao profundo conhecimento de mercado,
              garantindo que as premissas estratégicas orientem cada decisão
              estética.
            </p>
            <p className="text-justify">
              Nosso processo criativo traduz essa visão multidisciplinar em uma
              metodologia rigorosa. Da Investigação Projetual, onde captamos a
              essência e alinhamos o budget, ao Estudo Preliminar e Anteprojeto,
              transformamos desejos em cenários de vida tangíveis. A evolução
              culmina no Projeto Executivo, um manual técnico detalhado que
              assegura que cada especificação seja um guia inequívoco para a
              obra, mantendo a fidelidade à promessa visual e técnica definida
              pela diretoria.
            </p>
            <p className="text-justify">
              Essa abordagem estruturada nos permite equilibrar a visão
              artística com a responsabilidade executiva. Ao integrar a
              criatividade do projeto com a inteligência da consultoria e a
              força da execução, entregamos ao cliente a segurança de que o
              investimento estético está alicerçado em soluções reais. Assim,
              criamos espaços que despertam bem-estar e pertencimento,
              transformando cada traço do desenho em um ativo de valorização e
              qualidade de vida.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
