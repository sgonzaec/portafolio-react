import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import SkeletonProyects from "../Components/Skeleton/SkeletonProyects";
import ProyectsServices from "../Services/proyects.service";

const Proyects = () => {
  const { proyectsData, loading } = ProyectsServices();

  if (loading) {
    return (
      <section
        className="flex justify-center items-center bg-transparent text-white py-8 relative"
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
    return <h1 className="text-center text-red-500">Ups! We have some problems, come here again.</h1>;
  }

  return (
    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
    >
      <section
        className="flex justify-center items-center bg-transparent text-white py-8 relative"
        id="proyects"
      >
        <div className="max-w-screen-xl">
          <ul className="grid gap-5 grid-cols-2 mx-5">
            {proyectsData.map((proyect) => (
              <li
                key={proyect.id}
                id={proyect.id}
                className="relative group overflow-hidden rounded-lg"
              >
                <a
                  href={proyect.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative"
                >
                  <img
                    src={`https://api.screenshotmachine.com?key=${
                      import.meta.env.VITE_SCREENSHOTMACHINE
                    }&url=${proyect.homepage.split("//")[1]}&dimension=450x200&delay=10000`}
                    alt={`${proyect.name}_Screenshot`}
                    className="w-[450px] h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Nombre del Proyecto - Aparece al hacer hover */}
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">{proyect.name}</span>
                  </div>

                  {/* Icono Open in New - Arriba a la derecha */}
                  <span className="material-symbols-outlined absolute top-2 right-2 text-white opacity-75 group-hover:opacity-100 group-hover:text-amber-400 transition-all duration-300 cursor-pointer">
                    open_in_new
                  </span>
                </a>

                {/* Icono Code - Abajo a la izquierda */}
                {proyect.html_url && (
                  <a
                    href={proyect.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-2 left-2 text-white opacity-75 group-hover:opacity-100 group-hover:text-amber-400 transition-all duration-300 cursor-pointer"
                  >
                    <span className="material-symbols-outlined cursor-pointer">code</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Proyects;