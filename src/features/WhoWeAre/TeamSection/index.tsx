"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

import { TeamMember, teamMembers } from "./utils";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMember, setSelectedMember] = useState<TeamMember>(
    teamMembers[0]
  );

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
      },
    },
  };

  const socios = teamMembers.filter((m) => m.category === "socios");
  const associados = teamMembers.filter((m) => m.category === "associados");
  const equipe = teamMembers.filter((m) => m.category === "equipe");

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full px-4 py-16 lg:py-24"
    >
      <div className="">
        {/* Title Above Everything */}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-inter-bold text-green-5 mb-16 tracking-tight lg:pl-12">
          TIME KREBS+
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Sócios e Associados (mobile: coluna esquerda) */}
          <div className="col-span-1 lg:col-start-4 lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
              {/* Coluna esquerda mobile - SÓCIOS e ASSOCIADOS */}
              <div className="col-span-1 space-y-8">
                {/* SÓCIOS */}
                <div>
                  <p className="text-[10px] text-gray-400 mb-3 tracking-widest">
                    SÓCIOS
                  </p>
                  <ul className="space-y-2">
                    {socios.map((member) => (
                      <li key={member.id}>
                        <button
                          onMouseEnter={() => setSelectedMember(member)}
                          onClick={() => setSelectedMember(member)}
                          className={`text-base lg:text-2xl text-left transition-all duration-300 cursor-pointer ${
                            selectedMember.id === member.id
                              ? "font-bold text-black"
                              : "font-normal text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {member.name}
                          {selectedMember.id === member.id && (
                            <span className="ml-2 text-lg">+</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ASSOCIADOS */}
                <div>
                  <p className="text-[10px] text-gray-400 mb-3 tracking-widest">
                    ASSOCIADOS
                  </p>
                  <ul className="space-y-2">
                    {associados.map((member) => (
                      <li key={member.id}>
                        <button
                          onMouseEnter={() => setSelectedMember(member)}
                          onClick={() => setSelectedMember(member)}
                          className={`text-base lg:text-2xl text-left transition-all duration-300 cursor-pointer ${
                            selectedMember.id === member.id
                              ? "font-bold text-black"
                              : "font-normal text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {member.name}
                          {selectedMember.id === member.id && (
                            <span className="ml-2 text-lg">+</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coluna direita mobile - EQUIPE */}
              <div className="col-span-1">
                <div>
                  <p className="text-[10px] text-gray-400 mb-3 tracking-widest">
                    EQUIPE
                  </p>
                  <ul className="space-y-2">
                    {equipe.map((member) => (
                      <li key={member.id}>
                        <button
                          onMouseEnter={() => setSelectedMember(member)}
                          onClick={() => setSelectedMember(member)}
                          className={`text-base lg:text-2xl text-left transition-all duration-300 cursor-pointer ${
                            selectedMember.id === member.id
                              ? "font-bold text-black"
                              : "font-normal text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {member.name}
                          {selectedMember.id === member.id && (
                            <span className="ml-2 text-lg">+</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Member Info */}
          <div className="lg:col-start-8 lg:col-span-5">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Member Image */}
              <div className="relative w-full aspect-square max-w-xs mx-auto lg:mx-0 overflow-hidden">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Member Info */}
              <div className="max-w-sm mx-auto lg:mx-0">
                <h3 className="text-sm font-inter-base text-dark">
                  {selectedMember.role}
                </h3>
                <div className="">
                  {selectedMember.description.map((line, index) => (
                    <p
                      key={index}
                      className={`${
                        line === "+" ? "text-sm" : "text-sm"
                      } text-dark`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
