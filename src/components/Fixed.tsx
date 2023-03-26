import clsx from "clsx";
import React from "react";

export interface FixedProps {
  position: "left" | "right";
  children: React.ReactNode;
}

const Fixed = (props: FixedProps) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1700);
  });
  return (
    <div
      className={clsx(
        "transition duration-300 fixed bottom-0 px-20 flex flex-col items-center gap-10 opacity-0",
        {
          "left-0": props.position === "left",
          "right-0": props.position === "right",
          "opacity-100": show,
        }
      )}
    >
      {props.children}
      <div className="h-36 w-0 ring-1 ring-darkSlate"></div>
    </div>
  );
};

export default Fixed;
