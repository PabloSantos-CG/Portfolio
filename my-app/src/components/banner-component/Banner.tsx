import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Poppins, Montserrat } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Banner() {
  return (
    <div className="max-w-screen-sm flex flex-col justify-center h-full">
      <h1
        className={`${poppins.className}
        bg-gradient-to-r from-white from-10% to-slate-600 to-80%
        text-transparent bg-clip-text font-bold sm:text-4xl text-3xl`}
      >
        DESENVOLVENDO SOLUÇÕES
      </h1>
      <h2
        className={`${poppins.className} text-[#898989] text-lg sm:text-2xl my-2`}
      >
        ESTOU AQUI PARA TRANSFORMAR SUAS IDEIAS EM REALIDADE!
      </h2>
      <p
        className={`${montserrat.className} text-gray-300 text-xs sm:text-base`}
      >
        Navegando pelo vasto universo do desenvolvimento web com entusiasmo em
        criar soluções digitais envolventes e eficientes, estou comprometido em
        tornar seus projetos uma realidade.
        <strong>Juntos, vamos construir algo incrível!</strong>
      </p>

      <div className="flex items-center gap-x-2 sm:gap-x-3 mt-8">
        <a
          href="#Contact"
          className="bg-white py-1 px-4 rounded font-semibold text-xs sm:text-lg 
          border hover:border-white hover:bg-transparent hover:text-white duration-300"
        >
          Conversar sobre seu projeto
        </a>
        <a
          href="https://www.linkedin.com/in/pablosantos-cg/"
          target="_blank"
          className="bg-white border hover:border-white hover:bg-black rounded transition-all duration-300"
          aria-label="Confira meu linkedin"
        >
          <FaLinkedinIn
            className="text-black hover:text-white p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
            size={30}
          />
        </a>
        <a
          href="https://github.com/PabloSantos-CG"
          target="_blank"
          className="bg-white border hover:border-white hover:bg-black rounded duration-300"
          aria-label="Confira meu github"
        >
          <FaGithub
            className="text-black hover:text-white p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
            size={30}
          />
        </a>
      </div>
      <a href="#About">
        <IoIosArrowDown
          className="text-white hover:text-slate-400 absolute left-1/2 top-[80%] animate-bounce"
          size={30}
        />
      </a>
    </div>
  );
}
