import React, { useState } from "react";
import Proyects from "../../Blocks/Proyects";
import Skills from "../../Blocks/Skills";
import AboutMe from "../../Blocks/AboutMe";
import Experience from "../../Blocks/Experience";
import Contactme from "../../Blocks/ContactMe";
import tab_list_data from "./TabsStructure/tab_list_data.json";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section
      className="text-center text-amber-400 bg-neutral-800 py-8 place-content-center m-auto w-11/12 md:w-full my-5 flex md:ml-3 md:mr-7 rounded-2xl "
      id="tabs"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex mb-5 w-full md:w-auto min-h-11 justify-center flex-wrap gap-2">
          {tab_list_data.map((item) => {
            return (
              <button
                key={`${item.name.replace(" ", "").trim()}_${item.tabId}`}
                className={`px-4 py-2 rounded-full mx-1 transition-colors border-solid border-2 flex items-center max-h-10 ${
                  activeTab === item.tabId
                    ? "bg-amber-400 text-black border-transparent"
                    : "bg-transparent border-amber-400"
                }`}
                onClick={() => setActiveTab(item.tabId)}
              >
                <span className="material-symbols-outlined cursor-pointer">
                  {item.icon}
                </span>
                <p className=" cursor-pointer leading-none">{item.name}</p>
              </button>
            );
          })}
        </div>
        <div className="w-full text-center overflow-auto">
          {activeTab === 1 && <AboutMe />}
          {activeTab === 2 && <Skills />}
          {activeTab === 3 && <Proyects />}
          {activeTab === 4 && <Experience />}
          {activeTab === 5 && <Contactme />}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
