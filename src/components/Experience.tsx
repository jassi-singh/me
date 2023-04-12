import React from "react";
import Title from "./Title";
import clsx from "clsx";
import { RiPlayLine } from "react-icons/ri";
import useVisibility from "../hooks/useVisibility";

export interface ExperienceInterface {
  company: string;
  url: string;
  timeline: string;
  position: string;
  keyPoints: string[];
}
const experiences: ExperienceInterface[] = [
  {
    company: "Curer",
    url: "https://www.curer.app",
    timeline: "Dec 2022 - Present",
    position: "Flutter Developer",
    keyPoints: [
      "Worked on the frontend of the Curer app using React and Next.js",
      "Worked on the frontend of the Curer app using React and Next.js",
      "Worked on the frontend of the Curer app using React and Next.js",
    ],
  },
  {
    company: "Curer",
    url: "https://www.curer.app",
    timeline: "Dec 2022 - Present",
    position: "Flutter Developer",
    keyPoints: [
      "Worked on the frontend of the Curer app using React and Next.js",
    ],
  },
  {
    company: "Flunkey",
    url: "https://www.curer.app",
    timeline: "Dec 2022 - Present",
    position: "Flutter Developer",
    keyPoints: [
      "Worked on the frontend of the Curer app using React and Next.js",
    ],
  },
];

const Experience = () => {
  const [selected, setSelected] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  const isInViewport = useVisibility(ref);

  React.useEffect(() => {
    if (isInViewport) setShow(true);
  }, [isInViewport]);
  return (
    <section
      ref={ref}
      id="experience"
      className="h-screen px-24 sm:px-40 xl:px-80 pt-48 overflow-x-hidden"
    >
      <div
        className={clsx("transition-all ease-in-out duration-1000", {
          "-translate-x-full opacity-0": !show,
        })}
      >
        <Title index={2} title="Where  I’ve worked" />
      </div>
      <div
        className={clsx(
          "transition-all ease-in-out duration-1000 flex flex-col md:flex-row items-center md:items-start pt-12",
          {
            "translate-x-full opacity-0": !show,
          }
        )}
      >
        <ul className="flex md:flex-col pb-4">
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={clsx(
                "py-2 px-4 border-b-2 md:border-b-0 md:border-l-2 font-mono text-sm",
                {
                  "text-primary border-primary bg-navy": selected === index,
                  "text-darkSlate border-darkSlate": selected !== index,
                }
              )}
            >
              {experience.company}
            </button>
          ))}
        </ul>
        <div className="flex flex-col pl-10">
          <h1 className="text-2xl text-lightSlate">
            {experiences[selected].position}
            &nbsp;
            <a
              href={experiences[selected].url}
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              @ {experiences[selected].company}
            </a>
          </h1>
          <h3 className="text-sm font-mono text-darkSlate py-2">
            {experiences[selected].timeline}
          </h3>
          <ul className="mt-4">
            {experiences[selected].keyPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4 py-1">
                <span className="text-primary">
                  <RiPlayLine />
                </span>
                <li className="text-darkSlate">{point}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
