import React from "react";
import Skill from "./Skill";
import Title from "./Title";
import clsx from "clsx";
import useVisibility from "../hooks/useVisibility";
import { skills } from '../data';

const Skills = () => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  const isInViewport = useVisibility(ref);

  React.useEffect(() => {
    if (isInViewport) setShow(true);
  }, [isInViewport]);

  return (
    <section id="skills" ref={ref} className="px-12 md:px-40 xl:px-60 overflow-x-hidden">
      <div
        className={clsx("transition-all ease-in-out duration-1000", {
          "translate-x-full opacity-0": !show,
        })}
      >
        <Title index={1} title="My Skills" />
      </div>
      <div
        className={clsx(
          "transition-all ease-in-out duration-1000 flex flex-wrap place-content-center mt-10 gap-6",
          {
            "-translate-x-full opacity-0": !show,
          }
        )}
      >
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
