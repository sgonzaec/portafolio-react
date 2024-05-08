import LanguageLogoByName from "../Helpers/logos";
import ProyectsServices from "../Services/proyects.service";

const Proyects = () => {
  const { proyectsData } = ProyectsServices();

  return (
    <section
      className="text-center flex justify-center grid place-content-center flex-col bg-transparent text-white py-8 relative"
      id="proyects"
    >
      <div className="max-w-screen-xl">
        <h2 className="text-2xl py-8">Proyects</h2>
        <ul className="grid gap-5 grid-cols-2  mx-5">
          {proyectsData &&
            proyectsData
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
                      className="hover:underline"
                    >
                      {proyect.name} &#8599;
                    </a>
                    <a
                      href={proyect.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      <span className="hover:text-red-600">&#60;</span> Code{" "}
                      <span className="hover:text-red-600">&#62;</span> &#8599;
                    </a>
                    <p>Description: {proyect.description}</p>
                  </li>
                );
              })}
        </ul>
      </div>
    </section>
  );
};

export default Proyects;
