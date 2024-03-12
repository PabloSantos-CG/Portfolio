"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { dataAbout } from "@/data/dataAbout";

export default function Skills() {
  const [index, setIndex] = useState(0);
  return (
    <section className="flex items-center max-w-6xl m-auto h-screen">
      <div className="flex justify-between items-center  text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="flex flex-col flex-[1.5] gap-y-5"
        >
          <h1 className="font-bold text-4xl mb-3">
            MINHAS <br />
            HABILIDADES
          </h1>
          <p className="text-gray-300">
            Como desenvolvedor de software, estou sempre em busca de
            conhecimento e comprometido com a excelência. Minha curiosidade
            natural me impulsiona a melhorar continuamente, e sou apaixonado por
            criar soluções com propósito.
          </p>

          <p className="font-semibold text-gray-300">
            Vamos colaborar para construir algo verdadeiramente incrível juntos!
          </p>
        </motion.div>
      </div>

      <div className="flex gap-x-8 text-white">
        {dataAbout.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-blue-600 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </section>
  );
}
