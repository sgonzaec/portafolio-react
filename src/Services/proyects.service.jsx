import { useEffect, useState } from "react";
import { githubClient, screenShotMachine } from "../Clients";

const ProyectsServices = () => {
  const [loading, isLoading] = useState(false);
  const [proyectsData, setProyectsData] = useState();
  const [images, setImages] = useState({});

  const getImage = async (siteUrl) => {
    if(!siteUrl) return
    return await screenShotMachine.getImage(siteUrl)
  }

  const getData = async () => {
    const profileResponse = await githubClient.getRepos(isLoading);
    const ProyectsWithPageView = profileResponse.filter((filter) => filter.homepage !== null)
    setProyectsData(ProyectsWithPageView);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    proyectsData,
    getImage
  };
};

export default ProyectsServices;