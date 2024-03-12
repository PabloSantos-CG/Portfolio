import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex items-center  gap-x-5">
      <a href="#" className="text-black  rounded transition-all duration-300">
        <FaWhatsapp
          className="text-white hover:text-[#0057BE] p-1 box-content"
          size={26}
        />
      </a>
      <a href="#" className="text-black  rounded transition-all duration-300">
        <FaLinkedinIn
          className="text-white hover:text-[#0057BE] p-1 box-content"
          size={26}
        />
      </a>
      <a href="#" className="text-black  rounded transition-all duration-300">
        <FaInstagram
          className="text-white hover:text-[#0057BE] p-1 box-content"
          size={26}
        />
      </a>
      <a href="#" className="text-black  rounded transition-all duration-300">
        <FaGithub
          className="text-white hover:text-[#0057BE] p-1 box-content"
          size={26}
        />
      </a>
    </div>
  );
}
