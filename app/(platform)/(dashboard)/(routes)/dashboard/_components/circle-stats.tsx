"use client";

import { motion } from "framer-motion";
import CountingNumbers from "./counting-numbers";

export default function CircleStatus() {
  return (
    <div className="relative h-full w-full">
      <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#f3fafe"
          stroke="#2d679c"
        />
      </motion.svg>
      <CountingNumbers
        value={100}
        duration={2500}
        className="absolute inset-0 mx-auto flex items-center justify-center font-display text-5xl text-2d679c"
      />
    </div>
  );
}