import LanguageLogoByName from "../Helpers/logos";
import ProyectsServices from "../Services/proyects.service";

const Proyects = () => {
  const { proyectsData } = ProyectsServices();

  return (
    proyectsData && (
      <section
        className="text-center justify-center grid place-content-center flex-col bg-transparent text-white py-8 relative"
        id="proyects"
      >
        <div className="max-w-screen-xl">
          <ul className="grid gap-5 grid-cols-3 mx-5">
            {proyectsData
              .filter((filter) => filter.homepage !== null)
              .map((proyect) => {
                const logo = LanguageLogoByName(proyect.language);
                return (
                  <li
                    key={proyect.id}
                    id={proyect.id}
                    className="flex flex-col items-center"
                  >
                    {logo}
                    <a
                      href={proyect.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-400"
                    >
                      <div className="flex content-center cursor-pointer">{proyect.name}{"  "}<span class="material-symbols-outlined cursor-pointer">public</span></div>
                    </a>
                    <a
                      href={proyect.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-400"
                    >
                      <div className="flex content-center cursor-pointer">Code{" "}<span class="material-symbols-outlined cursor-pointer">code</span></div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    )
  );
};

export default Proyects;
