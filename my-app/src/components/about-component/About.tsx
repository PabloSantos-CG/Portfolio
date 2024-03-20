"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutContent from "./AboutContent";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex justify-between items-center md:gap-x-3 text-white"
    >
      <AboutContent />
    </motion.div>
  );
}
