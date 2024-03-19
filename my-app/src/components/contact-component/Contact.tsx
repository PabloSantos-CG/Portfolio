"use client";
import { motion, useInView } from "framer-motion";
import ContactForm from "./Form";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-y-8 xl:gap-x-8 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="xl:w-1/3 max-xl:h-[70vh] max-xl:flex max-xl:flex-col max-xl:justify-center"
      >
        <h1 className="font-bold sm:text-4xl text-3xl mb-3">
          VAMOS{" "}
          <span className="text-blue-600 inline-block xl:block">CONVERSAR</span>
        </h1>
        <p className="text-gray-300">
          Pronto para tornar suas ideias realidade? <br />
          Vamos discutir seu projeto e criar algo incrível juntos. Entre em
          contato para começarmos!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5571997061783&text=Ol%C3%A1,%20Pablo.%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
          target="_blank"
          className="
            flex items-center gap-x-3 
            bg-green-500 hover:bg-green-600 hover:text-gray-200 rounded font-semibold
            w-max px-5 py-1 mt-6 text-xs sm:text-lg
          "
        >
          WhatsApp{" "}
          <FaWhatsapp
            size={22}
            className="max-sm:w-[16.7px] max-sm:h-[16.4px]"
          />
        </a>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="xl:w-2/3 max-xl:h-screen max-xl:flex max-xl:flex-col max-xl:justify-center"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
