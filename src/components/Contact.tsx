import React from "react";
import Button from "./Button";
import useVisibility from "../hooks/useVisibility";
import clsx from "clsx";

const Contact = () => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  const isInViewport = useVisibility(ref);

  React.useEffect(() => {
    if (isInViewport) setShow(true);
  }, [isInViewport]);
  return (
    <section
      id={"contact"}
      ref={ref}
      className={clsx(
        "min-h-screen px-12 md:px-40 xl:px-60 flex flex-col items-center justify-center transition-all ease-in-out delay-1000 duration-1000",
        {
          "opacity-0": !show,
        }
      )}
    >
      <div className="text-primary text-sm lg:text-md font-mono">
        0.4 What's Next?
      </div>
      <div className="text-lightSlate text-4xl lg:text-6xl font-bold py-4">
        Get In Touch
      </div>
      <div className="sm:w-1/2 text-darkSlate">
        I'm currently working as Flutter Developer at Curer. I'm looking for new
        opportunities. If you have any, please feel free to contact me. I'll get
        back to you as soon as possible.
      </div>
      <div className="pt-24">
        <Button
          name="Say Hello 👋"
          link={"mailto:jaswinder.dandyan2000@gmail.com"}
        />
      </div>
    </section>
  );
};

export default Contact;
