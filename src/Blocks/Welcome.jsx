import devIcon from "../assets/devIcon.svg";
import generalData from "../shared_data.json";

// eslint-disable-next-line no-unused-vars

const Welcome = () => {
  return (
    <section
      className="h-screen text-center flex justify-center flex-col bg-slate-400 text-white"
      id="home"
    >
      <h1 className="text-3xl uppercase">Welcome to my portfolio</h1>
      <div className="flex justify-center">
        <img src={devIcon} className="w-60" alt="dev logo" />
      </div>
      <p className="pb-7 text-3xl font-mono uppercase">
        [{generalData.basic_info.titles[0]}]
      </p>
      <h2 className="text-3xl">{generalData.basic_info.name}</h2>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Welcome;
