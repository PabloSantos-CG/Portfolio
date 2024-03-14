"use client";
import { motion } from "framer-motion";
import ProjectsSlide from "./ProjectSlide";

export default function Projects() {
  return (
    <div className="flex items-center gap-x-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="w-1/3"
      >
        <h1 className="font-bold text-4xl mb-3">
          MEUS <br />
          PROJETOS
        </h1>
        <p className="text-gray-300">
          Explore minha coleção de projetos. Cada um demonstra meu compromisso
          em criar soluções eficazes e alcançar resultados cada vez melhores.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="w-2/3"
      >
        <ProjectsSlide />
      </motion.div>
    </div>
  );
}
