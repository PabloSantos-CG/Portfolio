import React from "react";
import Avatar from "./Avatar";
import Icons from "../Icons";

export default function AboutContent() {
  return (
    <>
      <div className="flex flex-col flex-[1.5] gap-y-5 ">
        <h2 className="font-bold sm:text-4xl text-3xl mb-3">Sobre Mim</h2>
        <h3 className="font-bold sm:text-3xl text-2xl">
          Olá, me chamo <span className="text-[#0057BE]">Pablo</span>.
        </h3>
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
          Vamos colaborar e levar sua presença online para o próximo nível.
        </p>
        <Icons />
      </div>

      <Avatar />
    </>
  );
}
