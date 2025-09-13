"use client";

import Image from "next/image";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { TeamMemberCardProps } from "./types";

export default function TeamMemberCard({
  member,
  index,
  className,
}: TeamMemberCardProps) {
  const memberVariants = {
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
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const getImageName = (index: number) => {
    return index === 0 ? "andre" : index === 1 ? "victor" : "jp";
  };

  return (
    <motion.div
      variants={memberVariants}
      className={cn("text-center group", className)}
    >
      <div className="relative overflow-hidden mb-4 aspect-square">
        <Image
          src={`/images/team/${getImageName(index)}.jpg`}
          alt={member.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{member.name}</h3>
      <p className="text-sm font-light text-green-5">{member.role}</p>
    </motion.div>
  );
}
