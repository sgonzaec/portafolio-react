import { useEffect, useState } from "react";
import { githubClient } from "../Clients";

const ProyectsServices = () => {
  const [loading, isLoading] = useState(false);
  const [proyectsData, setProyectsData] = useState();

  const getData = async () => {
    const profileResponse = await githubClient.getRepos(isLoading);
    console.log({profileResponse})
    setProyectsData(profileResponse);
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