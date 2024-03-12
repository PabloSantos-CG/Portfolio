"use client";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import Icons from "./Icons";

export default function About() {
  return (
    <div className="flex justify-between items-center  text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="flex flex-col flex-[1.5] gap-y-5"
      >
        <h1 className="font-bold text-4xl mb-3">SOBRE MIM</h1>
        <h2 className="font-bold text-3xl">
          Olá, me chamo <span className="text-[#0057BE]">Pablo</span>.
        </h2>
        <p className="text-gray-300">
          Sou um entusiasta do desenvolvimento web, sempre buscando aprender e
          evoluir. Minha jornada até aqui me permitiu mergulhar em tecnologias
          do Back-End com Node.Js, além de explorar o universo do Front-End com
          React.js e Next.js.
        </p>
        <p className="text-gray-300">
          Estou determinado a oferecer soluções web que atendam às suas
          necessidades de forma eficiente e eficaz. Estou comprometido em
          trabalhar duro e aprender rapidamente para entregar resultados de alta
          qualidade.
        </p>
        <p className="font-semibold text-gray-300">
          Vamos colaborar e levar sua presença online para o próximo nível
          juntos.
        </p>
        <Icons />
      </motion.div>

      <Avatar />
    </div>
  );
}
