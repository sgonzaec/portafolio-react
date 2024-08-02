import React, { useState } from "react";
import Proyects from '../../Blocks/Proyects'
import Skills from '../../Blocks/Skills'
import AboutMe from "../../Blocks/AboutMe";
import Experience from "../../Blocks/Experience";
import Contactme from "../../Blocks/ContactMe";Experience

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="text-center text-amber-400 bg-neutral-800 py-8 place-content-center m-auto w-11/12 md:w-full my-5 mx-3 flex md:ml-3 md:mr-7 rounded-2xl "
      id="tabs"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex mb-5 overflow-x-auto w-full md:w-auto min-h-11">
          <button
            className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
              activeTab === "tab1" ? "bg-amber-400 text-black border-transparent" : "bg-transparent border-amber-400"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            <span class="material-symbols-outlined cursor-pointer">sentiment_very_satisfied</span><p className=" cursor-pointer leading-none">Abount Me</p>
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
              activeTab === "tab2" ? "bg-amber-400 text-black border-transparent" : "bg-transparent border-amber-400"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            <span class="material-symbols-outlined cursor-pointer">fitness_center</span><p className=" cursor-pointer leading-none">Skills</p>
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
              activeTab === "tab3" ? "bg-amber-400 text-black border-transparent" : "bg-transparent border-amber-400"
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            <span class="material-symbols-outlined cursor-pointer">workspace_premium</span><p className=" cursor-pointer leading-none">Proyects</p>
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
              activeTab === "tab4" ? "bg-amber-400 text-black border-transparent" : "bg-transparent border-amber-400"
            }`}
            onClick={() => handleTabClick("tab4")}
          >
            <span class="material-symbols-outlined cursor-pointer">stream</span><p className=" cursor-pointer leading-none">Experience</p>
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
              activeTab === "tab5" ? "bg-amber-400 text-black border-transparent" : "bg-transparent border-amber-400"
            }`}
            onClick={() => handleTabClick("tab5")}
          >
            <span class="material-symbols-outlined cursor-pointer">alternate_email</span><p className=" cursor-pointer leading-none">Contact Me</p>
          </button>
        </div>
        <div className="w-full text-center overflow-auto">
          {activeTab === "tab1" && <AboutMe />}
          {activeTab === "tab2" && <Skills />}
          {activeTab === "tab3" && <Proyects /> }
          {activeTab === "tab4" && <Experience /> }
          {activeTab === "tab5" && <Contactme /> }
        </div>
      </div>
    </section>
  );
};

export default Tabs;
