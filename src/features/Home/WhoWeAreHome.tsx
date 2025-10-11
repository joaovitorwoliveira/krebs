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
    <motion.div
      className="relative z-40 bg-white min-h-screen"
      initial={{ y: 0 }}
    >
      <div className="flex flex-col min-h-screen gap-6 pt-10 px-6 lg:px-10 lg:pt-14">
        <div className="flex flex-col max-w-[1440px] mx-auto w-full">
          <motion.div
            className="flex flex-col text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Título principal */}
            <h1 className="font-semibold text-4xl lg:text-4xl xl:text-6xl mb-8">
              {t.home.whoWeAre.title}
            </h1>
          </motion.div>
          {/* Texto +Imagem */}
          <div
            className={cn(
              "flex flex-col gap-6",
              "lg:flex-row lg:gap-10 lg:min-h-[500px]"
            )}
          >
            <Image
              src="/images/vertical_temporaria.jpg"
              alt="Krebs+ Arquitetura Paisagística"
              width={400}
              height={400}
            />

            <div className="flex flex-col gap-6 lg:w-1/2 lg:justify-between">
              <div className="flex flex-col gap-6">
                <motion.p
                  className="text-base text-black leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <BoldText>{t.home.whoWeAre.paragraph1}</BoldText>
                </motion.p>

                <motion.p
                  className="text-base text-black leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <BoldText>{t.home.whoWeAre.paragraph2}</BoldText>
                </motion.p>

                <motion.p
                  className="text-base text-black leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <BoldText>{t.home.whoWeAre.paragraph3}</BoldText>
                </motion.p>
              </div>

              <Link href="/quem-somos" className={cn("hidden", "lg:block")}>
                <Button variant="primary" text={t.home.whoWeAre.cta}></Button>
              </Link>
            </div>
          </div>

          <motion.div
            className={cn("block mt-10", "lg:hidden")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/quem-somos">
              <Button variant="primary" text={t.home.whoWeAre.cta}></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
