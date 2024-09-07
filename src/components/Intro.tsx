import clsx from "clsx";
import React from "react";
import Button from "./Button";
import Pic from "./Pic";

const Intro = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section
      className={clsx(
        "transition-all ease-out duration-1000 delay-1000 pt-32 lg:pt-0 content-start lg:content-center tracking-widest px-12 md:px-40 xl:48 h-screen grid lg:grid-cols-3 gap-10",
        {
          "-translate-y-full": !show,
        }
      )}
    >
      <div className="lg:col-span-2">
        <div className="text-primary text-sm lg:text-md font-mono">
          Hi, my name is
        </div>
        <div className="text-lightSlate text-4xl lg:text-7xl font-bold py-1 lg:py-3">
          Jaswinder Singh.
        </div>
        <div className="text-darkSlate text-2xl lg:text-5xl font-bold">
          I am a Full-Stack developer.
        </div>
        <div className=" text-darkSlate pt-3 lg:pt-6 pb-12 lg:w-3/4">
          I'm a software developer specialized in building mobile apps and web
          apps. Currently I'm working at{" "}
          <a
            href="https://www.curer.app"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            Curer
          </a>{" "}
          as a Flutter Developer.
        </div>
        <Button name="Check my Resume" link={"/resume"} />
      </div>
      <Pic />
    </section>
  );
};

export default Intro;
