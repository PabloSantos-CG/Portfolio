import { nanoid } from "nanoid";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

export const dataNav = [
  {
    id: nanoid(5),
    identifier: "Home",
    title: "Início",
    icon: <HiHome />,
  },
  {
    id: nanoid(5),
    identifier: "About",
    title: "Sobre",
    icon: <HiUser />,
  },
  {
    id: nanoid(5),
    identifier: "Services",
    title: "Serviços",
    icon: <HiRectangleGroup />,
  },
  {
    id: nanoid(5),
    identifier: "Projects",
    title: "Projetos",
    icon: <HiViewColumns />,
  },
  {
    id: nanoid(5),
    identifier: "Contact",
    title: "Contato",
    icon: <HiEnvelope />,
  },
];
