"use client";
import { motion, useInView } from "framer-motion";
import ContactForm from "./Form";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col xl:flex-row xl:items-center gap-y-8 xl:gap-x-8 text-white "
    >
      <div className="xl:w-1/3 max-xl:flex max-xl:flex-col max-xl:justify-center">
        <h2 className="font-bold sm:text-4xl text-3xl mb-3 max-xl:text-center">
          Entre em{" "}
          <span className="text-blue-600 inline-block xl:block">Contato</span>
        </h2>
        <p className="text-gray-300 max-xl:hidden">
          Pronto para tornar suas ideias realidade? <br />
          Vamos discutir seu projeto e criar algo incrível juntos. Entre em
          contato para começarmos!
        </p>
      </div>

      <ContactForm />
    </motion.div>
  );
}
