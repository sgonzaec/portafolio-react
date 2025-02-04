import React from "react";
import { GiSpain, GiColombia } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
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
import { FaWebflow, FaSwift } from "react-icons/fa6";
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
  SiStorybook,
  SiGooglecloud
} from "react-icons/si";

const iconSize = 80;

const LanguageLogo = {
  Angular: <FaAngular size={iconSize} />,
  Apollo: <SiApollographql size={iconSize} />,
  Aws: <FaAws size={iconSize} />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} />,
  CSS: <FaCss3Alt size={iconSize} />,
  Docker: <FaDocker size={iconSize} />,
  Figma: <FaFigma size={iconSize} />,
  FlagColombia: <GiColombia />,
  FlagSpain: <GiSpain />,
  Git: <FaGitAlt size={iconSize} />,
  Graphql: <GrGraphQl size={iconSize} />,
  Googlecloud: <SiGooglecloud size={iconSize} />,
  HTML: <FaHtml5 size={iconSize} />,
  Java: <FaJava size={iconSize} />,
  JavaScript: <FaJs size={iconSize} />,
  Jira: <SiJira size={iconSize} />,
  Markdown: <FaMarkdown size={iconSize} />,
  MySql: <GrMysql size={iconSize} />,
  Nextjs: <SiNextdotjs size={iconSize} />,
  Nodejs: <FaNodeJs size={iconSize} />,
  Postgresql: <SiPostgresql size={iconSize} />,
  Postman: <SiPostman size={iconSize} />,
  Python: <FaPython size={iconSize} />,
  LeaderBoard: <MdLeaderboard size={iconSize} />,
  React: <FaReact size={iconSize} />,
  Sass: <SiSass size={iconSize} />,
  Storybook: <SiStorybook size={iconSize} />,
  SpringBoot: <SiSpring size={iconSize} />,
  Swift: <FaSwift size={iconSize} />,
  Svelte: <SiSvelte size={iconSize} />,
  Swagger: <SiSwagger size={iconSize} />,
  Tailwind: <SiTailwindcss size={iconSize} />,
  TypeScript: <SiTypescript size={iconSize} />,
  Vercel: <SiVercel size={iconSize} />,
  Vtex: <SiVtex size={iconSize} />,
  Vue: <FaVuejs size={iconSize} />,
  Webflow: <FaWebflow size={iconSize} />,
  Whatsapp: <FaWhatsapp />,
};

const LanguageLogoByName = (name) => {
  const logo = LanguageLogo[name];
  return logo || <div>No logo found for {name}</div>;
};

export default LanguageLogoByName;
