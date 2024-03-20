"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ServicesContent from "./ServicesContent";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col xl:flex-row xl:items-center  xl:gap-x-8 gap-y-8 text-white"
    >
      <ServicesContent />
    </motion.div>
  );
}
