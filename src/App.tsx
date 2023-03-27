import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Fixed from "./components/Fixed";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Icon from "./components/Icon";
import About from "./components/About";

function App() {
  return (
    <div className="bg-darkNavy flex flex-col relative">
      <Fixed position="right">
        <a
          href="mailto:jaswinder.dandyan2000@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green cursor-pointer text-slate text-xs font-mono tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Jaswinder.dandyan2000@gmail.com
        </a>
      </Fixed>
      <Fixed position="left">
        <Icon icon={<FiGithub />} link="https://www.github.com/jassi-singh" />
        <Icon
          icon={<FiLinkedin />}
          link="https://www.linkedin.com/in/jaswinder-singh-32a01118b/"
        />
        <Icon icon={<FiTwitter />} link="https://twitter.com/JassiD2000" />
        <Icon icon={<SiLeetcode />} link="https://leetcode.com/jassi16/" />
      </Fixed>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
