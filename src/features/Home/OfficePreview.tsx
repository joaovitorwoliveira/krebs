"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

import { motion } from "@/lib/motion";

export default function OfficePreview() {
  const { t } = useLanguage();

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
              {t.home.heroTitle}
            </h1>
            <p className="font-normal pt-2 text-3xl lg:text-4xl xl:text-6xl">
              {t.home.heroSubtitle}
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
            {t.home.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/escritorio">
              <Button text={t.home.seeOffice}></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
