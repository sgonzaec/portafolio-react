import React from "react";
import { GiSpain, GiColombia } from "react-icons/gi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  FaJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaVuejs,
  FaReact,
  FaAngular,
  FaMarkdown,
  FaAws,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaWhatsapp,
} from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import {
  SiApollographql,
  SiJira,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSass,
  SiSvelte,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiSpring,
  SiVtex,
} from "react-icons/si";

const iconSize = 80;

const LanguageLogo = {
  JavaScript: <FaJs size={iconSize} />,
  TypeScript: <SiTypescript size={iconSize} />,
  Python: <FaPython size={iconSize} />,
  Java: <FaJava size={iconSize} />,
  SpringBoot: <SiSpring size={iconSize} />,
  CSS: <FaCss3Alt size={iconSize} />,
  HTML: <FaHtml5 size={iconSize} />,
  Svelte: <SiSvelte size={iconSize} />,
  Vue: <FaVuejs size={iconSize} />,
  Sass: <SiSass size={iconSize} />,
  Angular: <FaAngular size={iconSize} />,
  React: <FaReact size={iconSize} />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} />,
  MySql: <GrMysql size={iconSize} />,
  Markdown: <FaMarkdown size={iconSize} />,
  Postgresql: <SiPostgresql size={iconSize} />,
  Vtex: <SiVtex size={iconSize} />,
  Aws: <FaAws size={iconSize} />,
  Tailwind: <SiTailwindcss size={iconSize} />,
  Nodejs: <FaNodeJs size={iconSize} />,
  Webflow: <FaWebflow size={iconSize} />,
  Swagger: <SiSwagger size={iconSize} />,
  Graphql: <GrGraphQl size={iconSize} />,
  Vercel: <SiVercel size={iconSize} />,
  Nextjs: <SiNextdotjs size={iconSize} />,
  Apollo: <SiApollographql size={iconSize} />,
  Git: <FaGitAlt size={iconSize} />,
  Figma: <FaFigma size={iconSize} />,
  Docker: <FaDocker size={iconSize} />,
  Postman: <SiPostman size={iconSize} />,
  Whatsapp: <FaWhatsapp />,
  Jira: <SiJira size={iconSize} />,
  FlagSpain: <GiSpain />,
  FlagColombia: <GiColombia />
};

const LanguageLogoByName = (name) => {
  const logo = LanguageLogo[name];
  return logo || <div>No logo found for {name}</div>;
};

export default LanguageLogoByName;
