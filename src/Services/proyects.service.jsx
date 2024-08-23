import { useEffect, useState } from "react";
import { githubClient } from "../Clients";

const ProyectsServices = () => {
  const [loading, isLoading] = useState(false);
  const [proyectsData, setProyectsData] = useState();

  const getData = async () => {
    const profileResponse = await githubClient.getRepos(isLoading);
    const ProyectsWithPageView = profileResponse.filter((filter) => filter.homepage)
    setProyectsData(ProyectsWithPageView);
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