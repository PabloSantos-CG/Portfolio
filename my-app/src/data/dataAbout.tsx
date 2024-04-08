import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker
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
import { nanoid } from "nanoid";

export const titlesAbout = ["Habilidades", "Acadêmico"];

export const aboutSkills = {
  info: [
    {
      title: "Front-End",
      icons: [
        <FaHtml5 title="Html" size={22} key={nanoid(5)} />,
        <FaCss3 title="Css" size={22} key={nanoid(5)} />,
        <FaJs title="JavaScript" size={22} key={nanoid(5)} />,
        <SiTypescript title="TypeScript" size={22} key={nanoid(5)} />,
        <SiSass title="Sass" size={22} key={nanoid(5)} />,
        <FaBootstrap title="Bootstrap" size={22} key={nanoid(5)} />,
        <SiTailwindcss title="TailwindCss" size={22} key={nanoid(5)} />,
        <FaReact title="React.Js" size={22} key={nanoid(5)} />,
        <SiNextdotjs title="Next.Js" size={22} key={nanoid(5)} />,
      ],
    },
    {
      title: "Back-End",
      icons: [
        <FaNodeJs title="Node.Js" size={22} key={nanoid(5)} />,
        <BiLogoPostgresql title="PostgreSQL" size={22} key={nanoid(5)} />,
        <SiMongodb title="MongoDB" size={22} key={nanoid(5)} />,
        <SiExpress title="Express" size={22} key={nanoid(5)} />,
        <SiSequelize title="Sequelize" size={22} key={nanoid(5)} />,
      ],
    },
    {
      title: "Outros",
      icons: [
        <FaGitAlt title="Git" size={22} key={nanoid(5)} />,
        <SiJest title="Jest" size={22} key={nanoid(5)} />,
        <FaFigma title="Figma" size={22} key={nanoid(5)} />,
        <FaDocker title="Docker" size={22} key={nanoid(5)} />,
      ],
    },
  ],
};

export const aboutAcademic = {
  info: [
    {
      id: nanoid(),
      course: "Análise e Desenvolvimento de Sistemas - ",
      institution: "UniFECAF. ",
      date: "2023 - 2025",
    },
    {
      id: nanoid(),
      course: "Desenvolvimento FullStack Javascript - ",
      institution: "OneBitCode. ",
      date: "2023",
    },
  ],
};
