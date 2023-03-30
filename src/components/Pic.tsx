import clsx from "clsx";
import React from "react";
import jassi from "../jassi.jpeg";

const Pic = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="relative justify-self-center ">
      <div
        className="absolute top-0 left-0 h-48 w-48 xl:h-72 xl:w-72 rounded-full bg-primary/[0.2] hover:opacity-0 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div
        className={clsx(
          "transition-all duration-300 absolute h-48 w-48 xl:h-72 xl:w-72 rounded-full border border-2 border-primary z-0",
          {
            "bg-primary/[0.3] top-5 left-5": isHovered,
            "top-3 left-3": !isHovered,
          }
        )}
      />
      <img
        src={jassi}
        alt="jassi.png"
        className="none h-48 w-48 xl:h-72 xl:w-72 rounded-full z-10 grayscale"
      />
    </div>
  );
};

export default Pic;
