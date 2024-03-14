import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Poppins, Montserrat } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Banner() {
  return (
    <div className="flex flex-col justify-center h-full">
      <h1
        className={`${poppins.className}
        bg-gradient-to-r from-white from-10% to-slate-600 to-80%
        text-transparent bg-clip-text font-bold text-4xl`}
      >
        DESENVOLVENDO SOLUÇÕES
      </h1>
      <h2 className={`${poppins.className} text-[#898989] text-2xl my-2`}>
        ESTOU AQUI PARA TRANSFORMAR SUAS IDEIAS <br />
        EM REALIDADE!
      </h2>
      <p className={`${montserrat.className} text-gray-300 text-base`}>
        Navegando pelo vasto universo do desenvolvimento web com entusiasmo
        <br />
        em criar soluções digitais envolventes e eficientes, estou comprometido
        <br />
        em tornar seus projetos uma realidade.
        <br />
        <strong>Juntos, vamos construir algo incrível!</strong>
      </p>

      {/* Icons */}
      <div className="flex items-center gap-x-3 mt-8">
        <a
          href="#"
          className="bg-white py-1 px-4 rounded font-semibold text-lg 
          border hover:border-white hover:bg-transparent hover:text-white duration-300"
        >
          Conversar sobre seu projeto
        </a>
        <a
          href="#"
          className="bg-white border hover:border-white hover:bg-black rounded transition-all duration-300"
        >
          <FaLinkedinIn
            className="text-black hover:text-white p-1 box-content"
            size={30}
          />
        </a>
        <a
          href="#"
          className="bg-white border hover:border-white hover:bg-black rounded duration-300"
        >
          <FaGithub
            className="text-black hover:text-white p-1 box-content"
            size={30}
          />
        </a>
      </div>
      <a href="#About">
        <IoIosArrowDown
          className="text-white hover:text-slate-400 absolute left-1/2 top-[90%] animate-bounce"
          size={30}
        />
      </a>
    </div>
  );
}
