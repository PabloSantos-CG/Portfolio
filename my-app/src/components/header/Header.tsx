"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((value) => !value);
    console.log("Valor trocado", isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 768 && isOpen) setIsOpen(false);
    if (window.innerWidth > 768 && !isOpen) setIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black md:bg-[#0000007d]">
      <div className="container flex justify-between items-center m-auto pl-2 pr-2 text-white relative">
        <Logo />
        <button onClick={toggleMenu} className="md:hidden">
          <span>{isOpen ? <IoClose size={36} /> : <IoMenu size={36} />}</span>
        </button>
        <Nav toggleOpen={isOpen} />
      </div>
    </header>
  );
}
