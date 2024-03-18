"use client";
import { motion, useInView } from "framer-motion";
import ProjectsSlide from "./ProjectSlide";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-x-8 gap-y-8 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-[640px] text-center xl:text-left xl:w-1/3"
      >
        <h1 className="font-bold text-2xl md:text-4xl mb-3">
          MEUS <span className="inline-block xl:block">PROJETOS</span>
        </h1>
        <p className="text-gray-300">
          Explore minha coleção de projetos. Cada um demonstra meu compromisso
          em criar soluções eficazes e alcançar resultados cada vez melhores.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="xl:w-2/3 w-full flex"
      >
        <ProjectsSlide />
      </motion.div>
    </div>
  );
}
