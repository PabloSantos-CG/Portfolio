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
        <FaHtml5 title="Html" size={22} />,
        <FaCss3 title="Css" size={22} />,
        <FaJs title="JavaScript" size={22} />,
        <SiTypescript title="TypeScript" size={22} />,
        <SiSass title="Sass" size={22} />,
        <FaBootstrap title="Bootstrap" size={22} />,
        <SiTailwindcss title="TailwindCss" size={22} />,
        <FaReact title="React.Js" size={22} />,
        <SiNextdotjs title="Next.Js" size={22} />,
      ],
    },
    {
      title: "Back-End",
      icons: [
        <FaNodeJs title="Node.Js" size={22} />,
        <BiLogoPostgresql title="PostgreSQL" size={22} />,
        <SiMongodb title="MongoDB" size={22} />,
        <SiExpress title="Express" size={22} />,
        <SiSequelize title="Sequelize" size={22} />,
      ],
    },
    {
      title: "Outros",
      icons: [
        <FaGitAlt title="Git" size={22} />,
        <SiJest title="Jest" size={22} />,
        <FaFigma title="Figma" size={22} />,
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
