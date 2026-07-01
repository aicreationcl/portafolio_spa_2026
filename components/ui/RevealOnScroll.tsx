"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
