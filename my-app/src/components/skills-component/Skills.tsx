"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aboutSkills, aboutAcademic, titlesAbout } from "@/data/dataAbout";
import { nanoid } from "nanoid";

export default function Skills() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex justify-center items-center"
    >
      <div className="flex flex-col xl:flex-row xl:gap-x-12 xl:gap-y-8 gap-y-4 text-white">
        <div className="flex items-center xl:flex-1">
          <div className="flex flex-col flex-[1.5] gap-y-3 xl:gap-y-5">
            <h1 className="font-bold sm:text-4xl text-3xl mb-3">
              MINHAS <span className="inline-block xl:block">HABILIDADES</span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-base">
              Como desenvolvedor de software, estou sempre em busca de
              conhecimento e comprometido com a excelência. Minha curiosidade
              natural me impulsiona a melhorar continuamente, e sou apaixonado
              por criar soluções com propósito.
            </p>

            <p className="font-semibold text-gray-300 text-xs sm:text-base">
              Vamos colaborar para construir algo verdadeiramente incrível
              juntos!
            </p>
          </div>
        </div>

        <div className="xl:flex-1 h-44">
          <div className="flex gap-x-8 mb-5 xl:mb-10">
            {titlesAbout.map((item, itemIndex) => (
              <button
                key={nanoid(5)}
                className={`${
                  index === itemIndex &&
                  "text-blue-600 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer  xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                title={`${
                  itemIndex === 0
                    ? "Passe o mouse por cima dos ícones para saber o nome"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <ul className="flex flex-col gap-y-4">
            {index === 0
              ? aboutSkills.info.map((item) => (
                  <li
                    key={nanoid(5)}
                    className="flex flex-col xl:flex-row gap-x-7"
                  >
                    <span className="text-blue-600 mb-2">{item.title}</span>
                    <ul className="flex items-center gap-x-2">
                      {item.icons.map((icon) => (
                        <li
                          className="hover:text-blue-600 duration-300"
                          key={icon.key}
                        >
                          {icon}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              : aboutAcademic.info.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-center xl:justify-start gap-x-7"
                  >
                    <p>
                      <span className="text-blue-600">{item.course}</span>
                      {item.institution}
                      {item.date}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
