import { useEffect, useState } from "react";
import { githubClient } from "../Clients";
import Data from "../shared_data.json";

const ProyectsServices = () => {
  const [loading, isLoading] = useState(false);
  const [proyectsData, setProyectsData] = useState();

  const getData = async () => {
    const profileResponse = await githubClient.getRepos(isLoading);
    const ProyectsWithPageView = profileResponse.filter((filter) => filter.homepage)
    const extraProyects = Data.extra_proyects.map((proyect) => proyect);
    const allProjects = [...extraProyects, ...ProyectsWithPageView];

    setProyectsData(allProjects);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    proyectsData,
  };
};

export default ProyectsServices;