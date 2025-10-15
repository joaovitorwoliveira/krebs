"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import {
  JARDIM_SVG_IMAGE_2,
  JARDIM_SVG_IMAGE_5,
} from "@/common/constants/db-images";
import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function WhoWeAreHome() {
  const { t } = useLanguage();

  return (
    <motion.div className="relative z-40 bg-light" initial={{ y: 0 }}>
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-40 ">
        <div className="flex flex-col mx-auto w-full">
          <motion.div
            className="flex flex-col text-dark mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className={cn(
                "font-semibold text-3xl",
                "md:text-4xl",
                "lg:text-5xl"
              )}
            >
              {t.home.whoWeAre.title}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8 lg:gap-0">
            <div
              className={cn(
                "flex flex-col gap-8",
                "lg:flex-row lg:gap-0 lg:min-h-[400px]"
              )}
            >
              {/* Seção esquerda - Texto */}
              <div className={cn("flex flex-col gap-8", "lg:flex-1 lg:pr-8")}>
                <div className="flex flex-col gap-4 opacity-80">
                  <motion.p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph1}</BoldText>
                  </motion.p>

                  <motion.p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph2}</BoldText>
                  </motion.p>

                  <motion.p
                    className={cn(
                      "text-dark font-normal text-sm",
                      "lg:text-base"
                    )}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <BoldText>{t.home.whoWeAre.paragraph3}</BoldText>
                  </motion.p>
                </div>

                <Link
                  href="/quem-somos"
                  className={cn("hidden", "lg:block lg:w-fit")}
                >
                  <Button
                    variant="primary"
                    className="uppercase bg-green-1"
                    text={t.home.whoWeAre.cta}
                  ></Button>
                </Link>
              </div>

              {/* Seção direita - Imagem superior */}
              <div className={cn("lg:flex-1")}>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-[400px] overflow-hidden">
                    <Image
                      src={JARDIM_SVG_IMAGE_5}
                      alt="Projeto Varanda Fek - Krebs+ Arquitetura Paisagística"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={70}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Segunda linha - Imagem inferior ocupando toda a largura */}
            <motion.div
              className="relative lg:mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-[600px] overflow-hidden">
                <Image
                  src={JARDIM_SVG_IMAGE_2}
                  alt="Projeto Varanda Fek - Krebs+ Arquitetura Paisagística"
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover"
                  quality={70}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className={cn("block mt-8", "lg:hidden")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/quem-somos">
              <Button
                variant="primary"
                className="uppercase bg-green-1 w-full"
                text={t.home.whoWeAre.cta}
              ></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
