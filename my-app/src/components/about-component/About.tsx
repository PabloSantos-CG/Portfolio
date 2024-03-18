"use client";
import { motion, useInView } from "framer-motion";
import Avatar from "./Avatar";
import Icons from "./Icons";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-between items-center  text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col flex-[1.5] gap-y-5 "
      >
        <h1 className="font-bold sm:text-4xl text-3xl mb-3">SOBRE MIM</h1>
        <h2 className="font-bold sm:text-3xl text-2xl">
          Olá, me chamo <span className="text-[#0057BE]">Pablo</span>.
        </h2>
        <p className="text-gray-300 max-sm:text-xs">
          Sou um entusiasta do desenvolvimento web, sempre buscando aprender e
          evoluir. Minha jornada até aqui me permitiu mergulhar em tecnologias
          do Back-End com Node.Js, além de explorar o universo do Front-End com
          React.js e Next.js.
        </p>
        <p className="text-gray-300 max-sm:text-xs">
          Estou determinado a oferecer soluções web que atendam às suas
          necessidades de forma eficiente e eficaz. Estou comprometido em
          trabalhar duro e aprender rapidamente para entregar resultados de alta
          qualidade.
        </p>
        <p className="font-semibold text-gray-300 max-sm:text-xs">
          Vamos colaborar e levar sua presença online para o próximo nível
          juntos.
        </p>
        <Icons />
      </motion.div>

      <Avatar />
    </div>
  );
}
