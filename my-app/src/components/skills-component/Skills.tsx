"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { aboutSkills, aboutAcademic, titlesAbout } from "@/data/dataAbout";

export default function Skills() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex items-center">
      <div className="flex items-baseline gap-x-12 text-white">
        <div className="flex justify-between items-center flex-1">
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
              natural me impulsiona a melhorar continuamente, e sou apaixonado
              por criar soluções com propósito.
            </p>

            <p className="font-semibold text-gray-300">
              Vamos colaborar para construir algo verdadeiramente incrível
              juntos!
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="flex-1"
        >
          <div className="flex gap-x-8 mb-10">
            {titlesAbout.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-blue-600 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                title={`${
                  itemIndex === 0
                    ? "Passe o mouse por cima dos ícones para saber o nome"
                    : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-4">
            {index === 0
              ? aboutSkills.info.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-x-7">
                    <p className="text-blue-600">{item.title}</p>
                    <div className="flex items-center gap-x-2">
                      {item.icons.map((icon, iconIndex) => (
                        <span
                          key={iconIndex}
                          className="hover:text-blue-600 duration-300"
                        >
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              : aboutAcademic.info.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-x-7">
                    <p>
                      <span className="text-blue-600">{item.course}</span>
                      {item.institution}
                      {item.date}
                    </p>
                  </div>
                ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
