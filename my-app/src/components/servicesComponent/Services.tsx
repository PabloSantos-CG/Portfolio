"use client";
import { motion } from "framer-motion";
import ServiceSlide from "./ServiceSlide";

export default function Services() {
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
          SERVIÇOS
        </h1>
        <p className="text-gray-300">
          Explorando o vasto campo dos serviços de desenvolvimento web, serviços
          especializados que não só impulsionam, mas também elevam seu projeto a
          novos patamares. Ofereço soluções personalizadas, adaptadas para
          atender às suas necessidades,
          <strong>garantindo resultados que superam suas expectativas</strong>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="w-2/3"
      >
        <ServiceSlide />
      </motion.div>
    </div>
  );
}
