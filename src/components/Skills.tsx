import React from "react";
import Skill, { SkillLevel, SkillProps } from "./Skill";
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
    level: SkillLevel.Advanced,
  },
  {
    name: "React",
    icon: <FaReact />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Dart",
    icon: <SiDart />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Node.js",
    icon: <FaNode />,
    level: SkillLevel.Basic,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: SkillLevel.Advanced,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    level: SkillLevel.Advanced,
  },
  {
    name: "Git",
    icon: <DiGit />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "C/C++",
    icon: <TbBrandCpp />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Python",
    icon: <DiPython />,
    level: SkillLevel.Intermediate,
  },
  {
    name: "Solidity",
    icon: <SiSolidity />,
    level: SkillLevel.Basic,
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
    <section
      id="skills"
      ref={ref}
      className="min-h-screen px-20 sm:px-40 xl:px-60 py-24 sm:overflow-x-hidden"
    >
      <div
        className={clsx("transition-all ease-in-out duration-1000", {
          "translate-x-full opacity-0": !show,
        })}
      >
        <Title index={1} title="My Skills" />
      </div>
      <div
        className={clsx(
          "transition-all ease-in-out duration-1000 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-6",
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
