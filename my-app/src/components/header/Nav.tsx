import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

export default function Nav() {
  return (
    <nav>
      <ul className="flex h-full gap-x-9 items-center">
        <li className="flex gap-x-1 text-white hover:text-slate-400 cursor-pointer">
          <HiHome className="mt-1" /> Início
        </li>
        <li className="flex gap-x-1 hover:text-slate-400 cursor-pointer">
          <HiUser className="mt-1" /> Sobre
        </li>
        <li className="flex gap-x-1 hover:text-slate-400 cursor-pointer">
          <HiRectangleGroup className="mt-1" /> Serviços
        </li>
        <li className="flex gap-x-1 hover:text-slate-400 cursor-pointer">
          <HiViewColumns className="mt-1" /> Projetos
        </li>
        <li className="flex gap-x-1 hover:text-slate-400 cursor-pointer">
          <HiEnvelope className="mt-1" /> Contato
        </li>
      </ul>
    </nav>
  );
}
