import generalData from "../shared_data.json";
import reactIcon from "../assets/react.svg";

const About = () => {
  return (
    <section className="text-center bg-white py-8" id="about">
      <h2 className="text-2xl py-8">About Me</h2>
      <div className="grid justify-center mx-auto mb-5 grid-cols-3">
        <div className="col-span-1 mb-5 flex justify-center">
          <div
            className="bg-white inline-block text-center relative shadow-lg"
            style={{ margin: "55px 75px 30px", padding: "15px 15px 30px" }}
          >
            <span style={{ cursor: "auto" }}>
              <img
                height="250px"
                src={generalData.basic_info.image}
                alt="Avatar placeholder"
              />
              <div className="flex justify-around items-center mt-3">
                <img
                  src={reactIcon}
                  alt="react icon"
                />
                <img
                  src={
                    "https://avatars.githubusercontent.com/u/1288938?s=280&v=4"
                  }
                  alt="react icon"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={
                    "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  }
                  alt="react icon"
                  style={{ width: '40px', height: '40px' }}
                />
              </div>
            </span>
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <div className="w-5/6 self-center border-solid border-2 border-gray-400">
            <div className="relative flex flex-col min-w-0 rounded bg-white">
              <div className="bg-slate-100">
                <span
                  className="iconify"
                  data-icon="emojione:red-circle"
                  data-inline="false"
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify"
                  data-icon="twemoji:yellow-circle"
                  data-inline="false"
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify"
                  data-icon="twemoji:green-circle"
                  data-inline="false"
                ></span>
              </div>
              <div
                className="text-sm font-mono text-justify ml-3 mr-3"
                style={{
                  height: "auto",
                  lineHeight: "180%",
                }}
              >
                <br />
                <span className="wave">Hello :) </span>
                <br />
                <br />
                Hello! I'm a software developer passionate about the frontend
                world, particularly in React and everything related to
                JavaScript. I love learning and experimenting with new
                technologies to improve my skills and knowledge. I'm motivated
                by the challenge of creating intuitive and attractive user
                interfaces that provide an excellent user experience.
                <br />
                I've worked on projects of different sizes and complexities,
                from small applications to large enterprise systems. I pride
                myself on being a good communicator and team collaborator, and
                I'm always willing to learn from my coworkers and contribute in
                any way I can.
                <br /> In my free time, I enjoy continuing to learn and
                experiment with new technologies, as well as being an avid
                reader of blogs and books about software development. I also
                enjoy sports and music in my spare time. I'm always looking for
                new challenges and opportunities to grow as a developer and as a
                person.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
