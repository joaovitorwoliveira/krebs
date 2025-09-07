"use client";

import { useRef } from "react";
import Image from "next/image";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageProvider";
import BackgroundWrapper from "@/components/BackgroundWrapper";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
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

  const memberVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <BackgroundWrapper>
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 py-4 lg:py-10"
      >
        <div className="text-center mb-12">
          <motion.h1
            variants={titleVariants}
            className="text-3xl font-semibold text-dark mb-4"
          >
            {t.team.title}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.team.members.map((member, index) => (
            <motion.div
              key={index}
              variants={memberVariants}
              className="text-center group"
            >
              <div className="relative overflow-hidden mb-4 aspect-square">
                <Image
                  src={`/images/team/${index === 0 ? 'andre' : index === 1 ? 'victor' : 'jp'}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-light text-green-5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </BackgroundWrapper>
  );
}
