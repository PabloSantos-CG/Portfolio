"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col xl:flex-row justify-center xl:items-center xl:gap-x-8 gap-y-8 text-white"
    >
      <ProjectsContent />
    </motion.div>
  );
}
