import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import Avatar from "./Avatar";

export default function About() {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex flex-col flex-[1.5] gap-y-5">
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
      </div>

      <div className="flex flex-col items-center flex-[.5] gap-y-5 mt-8">
        <a
          href="#"
          className="text-black bg-transparent border border-white hover:bg-white rounded transition-all duration-300"
        >
          <FaWhatsapp
            className="text-white hover:text-black p-1 box-content"
            size={30}
          />
        </a>
        <a
          href="#"
          className="text-black bg-transparent border border-white hover:bg-white rounded transition-all duration-300"
        >
          <FaLinkedinIn
            className="text-white hover:text-black p-1 box-content"
            size={30}
          />
        </a>
        <a
          href="#"
          className="text-black bg-transparent border border-white hover:bg-white rounded transition-all duration-300"
        >
          <FaGithub
            className="text-white hover:text-black p-1 box-content"
            size={30}
          />
        </a>
      </div>

      <Avatar />
    </div>
  );
}
