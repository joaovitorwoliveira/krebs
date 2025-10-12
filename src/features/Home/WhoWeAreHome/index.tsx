"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { BoldText } from "@/common/utils/textUtils";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function WhoWeAreHome() {
  const { t } = useLanguage();

  return (
    <motion.div className="relative z-40 bg-white" initial={{ y: 0 }}>
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20">
        <div className="flex flex-col mx-auto w-full ">
          <motion.div
            className="flex flex-col text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Título principal */}
            <h1
              className={cn(
                "font-semibold text-3xl mb-12",
                "md:text-4xl",
                "lg:text-6xl"
              )}
            >
              {t.home.whoWeAre.title}
            </h1>
          </motion.div>
          {/* Texto +Imagem */}
          <div
            className={cn(
              "flex flex-col gap-8",
              "lg:flex-row lg:gap-12 lg:min-h-[600px] lg:items-end"
            )}
          >
            <div className="lg:w-1/2">
              <Image
                src="/images/vertical_temporaria.jpg"
                alt="Krebs+ Arquitetura Paisagística"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col lg:w-1/2">
              <div className="flex flex-col gap-4">
                <motion.p
                  className={cn(
                    "text-dark font-light text-sm leading-relaxed",
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
                    "text-dark font-light text-sm leading-relaxed",
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
                    "text-dark font-light text-sm leading-relaxed",
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
                className={cn("hidden", "lg:block lg:w-fit mt-6")}
              >
                <Button
                  variant="primary"
                  className="bg-green-1 uppercase"
                  text={t.home.whoWeAre.cta}
                ></Button>
              </Link>
            </div>
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
                className="w-full bg-green-1 uppercase"
                text={t.home.whoWeAre.cta}
              ></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
