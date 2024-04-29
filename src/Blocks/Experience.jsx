import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import generalData from "../shared_data.json";
import LanguageLogoByName from "../Helpers/logos";
import { MdMoreHoriz } from "react-icons/md";

const Experience = () => {
  return (
    <section
      className="text-center flex justify-center flex-col bg-slate-400 text-white py-8"
      id="proyects"
    >
      <h2 className="text-2xl py-8">Experience</h2>
      <VerticalTimeline>
        {generalData.experience.map((work, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              date={work.years}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(0, 0, 0)",
              }}
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={LanguageLogoByName(work.icon)}
            >
              <h3 className="">{work.title}</h3>
              <h5 className="">{work.company}</h5>
              <p>
                {work.position} - {work.country}
              </p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: "7px solid  rgb(0, 0, 0)",
          }}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdMoreHoriz size={80} />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
