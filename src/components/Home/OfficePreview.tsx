"use client";

import Image from "next/image";

import { motion } from "@/lib/motion";

import Button from "../ui/button";

export default function OfficePreview() {
  return (
    <motion.div
      className="relative z-40 bg-white min-h-screen"
      initial={{ y: 0 }}
    >
      <div className="flex flex-col min-h-screen gap-10 pt-10 px-6 lg:px-10 lg:pt-14">
        <div className="flex flex-col">
          <motion.h2
            className="flex flex-col text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-normal text-5xl lg:text-6xl xl:text-7xl">
              Criamos paisagens,
            </span>
            <span className="font-semibold text-5xl lg:text-6xl xl:text-8xl">
              Criamos emoções
            </span>
          </motion.h2>
        </div>
        <div className="flex flex-col gap-6 mb-10 items-center justify-center max-w-lg mx-auto">
          <motion.p
            className="text-base text-black leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Um espaço criativo onde a natureza encontra o design. Conheça onde
            desenvolvemos projetos únicos de paisagismo, combinando inovação,
            sustentabilidade e beleza em cada detalhe.
          </motion.p>

          <Image
            className="shadow-lg"
            src={"/images/working-pb.jpg"}
            alt={"time"}
            unoptimized
            width={600}
            height={600}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button text="VER ESCRITÓRIO"></Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
