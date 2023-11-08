import { ExperienceInterface } from "./components/Experience";
import { ProjectInterface } from "./components/Project";
import { SkillProps } from "./components/Skill";
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
import cryptoFantasyPic from "./images/crypto-fantasy-dapp.png";

const experiences: ExperienceInterface[] = [
  {
    company: "Fountane",
    url: "https://fountane.com",
    timeline: "2023 - Present",
    position: "Software Developer",
    keyPoints: [
      "Developed a Social Media App using React Js and tailwindcss.",
      "Contributed to both frontend and backend development of the website.",
      "Developed a mobile app in React Native.",
      "Created a Chrome extension for capturing screenshots and bookmarking web pages.",
    ],
  },
  {
    company: "Curer",
    url: "https://curer.app",
    timeline: "2022 - 2023",
    position: "Software Developer",
    keyPoints: [
      "Developed iOS and Android apps using Flutter.",
      "Managed the entire app development lifecycle, from coding to deployment on Google Play Store and Apple App Store.",
      "Oversaw web app development with React for the frontend.",
      "Worked on the backend, which comprised two distinct layers: one in Django and the other in Node.js.",
      "Handled end-to-end development and deployment of both backend and frontend using Docker.",
      "Sole developer, responsible for all aspects of the projects.",
      "Implemented messaging functionality in the apps using Firebase.",
      "Utilized Redis and AWS for various aspects of the projects.",
    ],
  },
  {
    company: "Flunkey",
    url: "https://flunkey.app",
    timeline: "2021 - 2022",
    position: "Software Developer",
    keyPoints: [
      "Developed the mobile app using Flutter and Dart.",
      "Developed the backend using Node.js, TypeScript, and firebase.",
      "Developed the web app using React.js, TypeScript, and Tailwind CSS.",
    ],
  },
];

const projects: ProjectInterface[] = [
  {
    name: "Crypto Fantasy Dapp",
    githubUrl: "https://github.com/jassi-singh/crypto_fantasy_dapp",
    url: "http://crypto-fantasy-dapp.vercel.app/",
    description:
      "A fantasy sports dapp built on the Polygon blockchain. It allows users to create their own fantasy teams and compete with other users in a league.",
    techStack: ["Next.js", "Solidity", "Polygon", "tailwindcss", "chainlink"],
    image: cryptoFantasyPic,
  },
  {
    name: "Crypto Wallet",
    githubUrl: "https://github.com/jassi-singh/crypto-wallet",
    description:
      "A Crypto wallet app to store and manage public keys and transfer tokens.",
    techStack: ["React Native", "tailwindcss", "Solidity", "etherjs"],
    image: 'https://raw.githubusercontent.com/jassi-singh/crypto-wallet/master/screenshots/ss0.png',
  },
];

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
export { experiences, projects, skills };
