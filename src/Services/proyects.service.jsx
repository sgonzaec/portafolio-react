import { useEffect, useState } from "react";
import { githubClient } from "../Clients";

const ProyectsServices = () => {
  const [loading, isLoading] = useState(false);
  const [proyectsData, setProyectsData] = useState();

  useEffect(() => {
    const getData = async () => {
      const profileResponse = await githubClient.getRepos(isLoading);
      setProyectsData(profileResponse);
    };
    getData();
  }, []);

  return {
    loading,
    proyectsData,
  };
};

export default ProyectsServices;