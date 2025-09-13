"use client";

import { motion } from "@/lib/motion";

import { NoResultsProps } from "../types";

export default function NoResults({ message }: NoResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <p className="text-gray-500 text-lg">{message}</p>
    </motion.div>
  );
}
