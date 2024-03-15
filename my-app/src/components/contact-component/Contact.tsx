"use client";
import { motion } from "framer-motion";
import ContactForm from "./Form";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex items-center gap-x-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="w-1/3"
      >
        <h1 className="font-bold text-4xl mb-3">
          VAMOS <br />
          <span className="text-blue-600">CONVERSAR</span>
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
            w-max px-5 py-1 mt-6
          "
        >
          WhatsApp <FaWhatsapp size={22} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="w-2/3"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
