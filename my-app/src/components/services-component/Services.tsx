"use client";
import { motion } from "framer-motion";
import ServiceSlide from "./ServiceSlide";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col xl:flex-row  xl:gap-x-8 gap-y-8 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:max-w-[640px] max-w-[440px] xl:w-1/3"
      >
        <h1 className="font-bold sm:text-4xl text-3xl mb-3">
          MEUS <span className="inline-block xl:block">SERVIÇOS</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-base">
          Explorando o vasto campo dos serviços de desenvolvimento web, serviços
          especializados que não só impulsionam, mas também elevam seu projeto a
          novos patamares. Ofereço soluções personalizadas, adaptadas para
          atender às suas necessidades,
          <strong> garantindo resultados que superam suas expectativas</strong>.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full xl:w-2/3"
      >
        <ServiceSlide />
      </motion.div>
    </div>
  );
}
