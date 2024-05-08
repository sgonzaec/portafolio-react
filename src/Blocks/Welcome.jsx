import Typed from "../Components/Typed/Typed";
import devIcon from "../assets/devIcon.svg";
import generalData from "../shared_data.json";

// eslint-disable-next-line no-unused-vars

const Welcome = () => {
  return (
    <section
      className="h-screen text-center flex justify-center flex-col bg-transparent text-white relative"
      id="home"
    >
      <h1 className="text-3xl uppercase">Welcome to my portfolio</h1>
      <div className="flex justify-center">
        <img src={devIcon} className="w-60" alt="dev logo" />
      </div>
      <Typed titles={generalData.basic_info.titles} />
      <h2 className="text-3xl mb-7">{generalData.basic_info.name}</h2>
      <div className="arrow cursor-pointer self-center mt-5 rotate-180">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Welcome;
