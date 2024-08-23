import SkeletonProyects from "../Components/Skeleton/SkeletonProyects";
import ProyectsServices from "../Services/proyects.service";

const Proyects = () => {
  const { proyectsData, loading } = ProyectsServices();

  if (loading) {
    return (
      <section
        className="text-center justify-center grid place-content-center flex-col bg-transparent text-white py-8 relative"
        id="proyects"
      >
        <div className="max-w-screen-xl">
          <ul className="grid gap-5 grid-cols-2 mx-5">
            <SkeletonProyects />
          </ul>
        </div>
      </section>
    );
  }

  if (!proyectsData || proyectsData.length === 0) {
    return <h1>Ups! we have some problems, come here again.</h1>;
  }

  return (
    <section
      className="text-center justify-center grid place-content-center flex-col bg-transparent text-white py-8 relative"
      id="proyects"
    >
      <div className="max-w-screen-xl">
        <ul className="grid gap-5 grid-cols-2 mx-5">
          {proyectsData.map((proyect) => {
            return (
              <li
                key={proyect.id}
                id={proyect.id}
                className="flex flex-col items-center"
              >
                <a
                  href={proyect.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400"
                >
                  <img
                    src={`https://api.screenshotmachine.com?key=${
                      import.meta.env.VITE_SCREENSHOTMACHINE
                    }&url=${
                      proyect.homepage.split("//")[1]
                    }&dimension=450x200&delay=10000`}
                    alt={`${proyect.name}_Screenshot`}
                    style={{ width: "450px", height: "200px" }}
                  />
                  <div className="flex content-center justify-center cursor-pointer">
                    {proyect.name}
                    {"  "}
                    <span className="material-symbols-outlined cursor-pointer">
                      open_in_new
                    </span>
                  </div>
                </a>
                <a
                  href={proyect.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400"
                >
                  <div className="flex content-center cursor-pointer">
                    Code{" "}
                    <span className="material-symbols-outlined cursor-pointer">
                      code
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Proyects;
