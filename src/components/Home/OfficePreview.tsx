"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "@/lib/motion";

import Button from "../ui/button";

export default function OfficePreview() {
  return (
    <motion.div
      className="relative z-40 bg-white min-h-screen"
      initial={{ y: 0 }}
    >
      <div className="flex flex-col min-h-screen gap-6 pt-10 px-6 lg:px-10 lg:pt-14">
        <div className="flex flex-col">
          <motion.div
            className="flex flex-col text-black mb-8 leading-tight "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="font-semibold text-5xl lg:text-6xl xl:text-8xl">
              KREBS+ Arquitetura Paisagística
            </h1>
            <p className="font-normal pt-2 text-3xl lg:text-4xl xl:text-6xl">
              Criamos paisagens. Criamos emoções.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 mb-10 items-center justify-center max-w-6xl mx-auto">
          <Image
            className="shadow-lg"
            src={"/images/projects/jardim-svg/foto-2.jpg"}
            alt={"plantas"}
            unoptimized
            width={1000}
            height={200}
          />
          <motion.p
            className="text-base text-black leading-relaxed max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A KREBS+ nasceu do olhar visionário de André Krebs e evoluiu para
            uma estrutura profissional que integra estratégia (consultoria e
            viabilidade), design (projeto) e execução (obra e fornecimento).
            Atuamos lado a lado com incorporadoras, construtoras e escritórios
            de arquitetura para transformar áreas externas em ativos que elevam
            VGV, experiência e marca
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/escritorio">
              <Button text="VER ESCRITÓRIO"></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
