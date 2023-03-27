import clsx from "clsx";
import React from "react";
import Button from "./Button";

const Intro = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    //TODO: Make this responsive
    <section className="tracking-widest h-screen pl-60 py-48">
      <div
        className={clsx(
          "transition duration-300 opacity-0 text-green font-mono",
          {
            "opacity-100": show,
          }
        )}
      >
        Hi, my name is
      </div>
      <div
        className={clsx(
          "transition duration-400 opacity-0 text-lightSlate text-7xl font-bold py-3",
          {
            "opacity-100": show,
          }
        )}
      >
        Jaswinder Singh.
      </div>
      <div
        className={clsx(
          "transition duration-500 opacity-0 text-darkSlate text-7xl font-bold",
          {
            "opacity-100": show,
          }
        )}
      >
        I am a web developer.
      </div>
      <div
        className={clsx(
          "transition duration-700 opacity-0 text-darkSlate w-1/2 pt-6 pb-12",
          {
            "opacity-100": show,
          }
        )}
      >
        I'm a software developer specialized in building mobile apps and web
        apps. Currently I'm working at{" "}
        <a
          href="https://www.curer.app"
          target="_blank"
          rel="noreferrer"
          className="text-green"
        >
          Curer
        </a>{" "}
        as a Software Engineer.
      </div>
      <div
        className={clsx("transition duration-1000 opacity-0", {
          "opacity-100": show,
        })}
      >
        <Button name="Check my Resume" link={"/resume"} />
      </div>
    </section>
  );
};

export default Intro;
