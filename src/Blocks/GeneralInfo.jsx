import PersonalImage from "../assets/memoji-hand.png";
import Typed from "../Components/Typed/Typed";
import generalData from "../shared_data.json";
import GHLogo from "../assets/icon_github.png";
import INLogo from "../assets/linkedin_icon.png";

const GeneralInfo = () => {
  return (
    <section
      className="text-center text-amber-400 bg-neutral-800 place-content-center md:w-1/3 my-5 flex m-auto w-11/12 md:ml-7 md:mr-3 rounded-2xl "
      id="general"
    >
      <div className="max-w-screen-xl">
        <div className=" flex justify-center">
          <div className="inline-block text-start relative m-4 content-center">
            <span>
              <img
                className="w-full max-w-45"
                src={PersonalImage}
                alt="Avatar-simon"
              />
              <Typed titles={generalData.greetings} />
              <p>Simon - FullStack Developer</p>
              <hr className="border-gray-600 my-1" />
              <p>Medellín, Colombia 🇨🇴 / Valencia, Spain 🇪🇸</p>
              <hr className="border-gray-600 my-1" />
              <div className="flex justify-around my-2">
                <a href="https://github.com/sgonzaec">
                  <img
                    src={GHLogo}
                    alt="githubLogo"
                    className="filter invert max-w-8 cursor-pointer"
                  />
                </a>
                <a href="https://www.linkedin.com/in/simon-gonzalez-e/">
                  <img
                    src={INLogo}
                    alt="linkedInLogo"
                    className="filter invert max-w-8 cursor-pointer"
                  />
                </a>
              </div>
              <hr className="border-gray-600 my-1" />
              <p>
                Enthusiastic developer with a passion for creating beautiful and
                functional web applications.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
