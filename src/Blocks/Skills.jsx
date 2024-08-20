import { MdMoreHoriz } from "react-icons/md";
import LanguageLogoByName from "../Helpers/logos";
import generalData from "../shared_data.json";
import getColorById from "../Helpers/ColorExperience";

const Skills = () => {
  return (
    <section
      className="text-center bg-transparent text-white py-8 relative max-w-screen-xl m-auto"
      id="skills"
    >
      <span className="absolute right-12 grid grid-cols-4 min-[768px]:gap-1">
        <p>Level:</p>
        <p
          className="before:content-[''] before:w-2 before:h-2 before:bg-sky-500 before:inline-flex before:rounded-full before:mr-2"
          id="1"
        >
          Expert
        </p>
        <p
          className="before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:inline-flex before:rounded-full before:mr-2"
          id="2"
        >
          Basics
        </p>
        <p
          className="before:content-[''] before:w-2 before:h-2 before:bg-white before:inline-flex before:rounded-full before:mr-2"
          id="3"
        >
          Learning
        </p>
      </span>
      <h2 className="text-2xl py-8 font-mono">SKILLS</h2>
      <ul
        className="grid gap-3 mx-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {generalData.skills.icons.map((skill) => {
          const logo = LanguageLogoByName(skill.name);
          return (
            skill.level && (
              <li
                key={skill.name}
                name={skill.name}
                className="flex flex-col bg-slate-800 p-3 rounded justify-self-center justify-between min-h-28 border-solid border-2"
                style={{ borderColor: `${getColorById(skill.level)}` }}
              >
                {logo}
                <p>{skill.name}</p>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
