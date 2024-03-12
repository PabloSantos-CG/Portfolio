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

export const dataAbout = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <SiSass />,
          <FaBootstrap />,
          <SiTailwindcss />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "Back-End",
        icons: [
          <FaNodeJs />,
          <BiLogoPostgresql />,
          <SiMongodb />,
          <SiExpress />,
          <SiSequelize />,
        ],
      },
      {
        title: "Outros",
        icons: [<FaGitAlt />, <SiJest />, <FaFigma />],
      },
    ],
  },
  {
    title: "Acadêmico",
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
  },
];
