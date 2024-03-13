import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiSequelize,
  SiJest,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const titlesAbout = ["Habilidades", "Acadêmico"];

export const aboutSkills = {
  info: [
    {
      title: "Front-End",
      icons: [
        <FaHtml5 size={22} />,
        <FaCss3 size={22} />,
        <FaJs size={22} />,
        <SiTypescript size={22} />,
        <SiSass size={22} />,
        <FaBootstrap size={22} />,
        <SiTailwindcss size={22} />,
        <FaReact size={22} />,
        <SiNextdotjs size={22} />,
      ],
    },
    {
      title: "Back-End",
      icons: [
        <FaNodeJs size={22} />,
        <BiLogoPostgresql size={22} />,
        <SiMongodb size={22} />,
        <SiExpress size={22} />,
        <SiSequelize size={22} />,
      ],
    },
    {
      title: "Outros",
      icons: [
        <FaGitAlt size={22} />,
        <SiJest size={22} />,
        <FaFigma size={22} />,
      ],
    },
  ],
};

export const aboutAcademic = {
  info: [
    {
      course: "Análise e Desenvolvimento de Sistemas - ",
      institution: "UniFECAF. ",
      date: "2023 - 2025",
    },
    {
      course: "Desenvolvimento FullStack Javascript - ",
      institution: "OneBitCode. ",
      date: "2023",
    },
  ],
};
