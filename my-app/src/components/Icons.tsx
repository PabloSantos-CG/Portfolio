import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex items-center gap-x-5">
      <a
        href="https://api.whatsapp.com/send?phone=5571997061783&text=Ol%C3%A1,%20Pablo.%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
        target="_blank"
        className="text-black rounded transition-all duration-300"
        aria-label="Entre em contato comigo pelo whatsapp"
      >
        <FaWhatsapp
          className="text-white hover:text-blue-600 p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
          size={26}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pablosantos-cg/"
        target="_blank"
        className="text-black  rounded transition-all duration-300"
        aria-label="Confira meu linkedin"
      >
        <FaLinkedinIn
          className="text-white hover:text-[#0057BE] p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
          size={26}
        />
      </a>
      <a
        href="#"
        className="text-black  rounded transition-all duration-300"
        aria-label="Entre em contato comigo pelo instagram"
      >
        <FaInstagram
          className="text-white hover:text-[#0057BE] p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
          size={26}
        />
      </a>
      <a
        href="https://github.com/PabloSantos-CG"
        target="_blank"
        className="text-black  rounded transition-all duration-300"
        aria-label="Confira meu github"
      >
        <FaGithub
          className="text-white hover:text-[#0057BE] p-1 box-content max-sm:w-[16.7px] max-sm:h-[16.4px]"
          size={26}
        />
      </a>
    </div>
  );
}
