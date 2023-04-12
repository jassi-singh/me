import React from "react";
import Skill, { SkillProps } from "./Skill";
import Title from "./Title";
import { RiFlutterFill } from "react-icons/ri";
import { FaNode, FaReact } from "react-icons/fa";
import {
  SiAppwrite,
  SiCss3,
  SiDart,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { DiGit, DiMongodb, DiPython } from "react-icons/di";
import clsx from "clsx";
import useVisibility from "../hooks/useVisibility";

const skills: SkillProps[] = [
  {
    name: "Flutter",
    icon: <RiFlutterFill />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Dart",
    icon: <SiDart />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    name: "Node.js",
    icon: <FaNode />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Git",
    icon: <DiGit />,
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite />,
  },
  {
    name: "C/C++",
    icon: <TbBrandCpp />,
  },
  {
    name: "Python",
    icon: <DiPython />,
  },
  {
    name: "Solidity",
    icon: <SiSolidity />,
  },
];

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
