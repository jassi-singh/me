import React from "react";
import Title from "./Title";
import useVisibility from "../hooks/useVisibility";
import clsx from "clsx";
import Project from "./Project";
import { projects } from "../data";
const Projects = () => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  const isInViewport = useVisibility(ref);

  React.useEffect(() => {
    if (isInViewport) setShow(true);
  }, [isInViewport]);
  return (
    <section
      id={"projects"}
      ref={ref}
      className="px-12 md:px-40 xl:px-60 overflow-x-hidden"
    >
      <div
        className={clsx("transition-all ease-in-out duration-1000", {
          "translate-x-full opacity-0": !show,
        })}
      >
        <Title index={3} title="Some Things I've Built" />
      </div>

      <div
        className={clsx(
          "transition-all ease-in-out duration-1000 flex flex-col mt-10 gap-10",
          {
            "-translate-x-full opacity-0": !show,
          }
        )}
      >
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
