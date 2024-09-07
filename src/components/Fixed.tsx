import clsx from "clsx";
import React from "react";

export interface FixedProps {
  position: "left" | "right";
  children: React.ReactNode;
}

const Fixed = (props: FixedProps) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      className={clsx(
        "hidden lg:flex transition-all ease-out duration-1000 delay-1000 fixed bottom-0 lg:px-10 xl:px-20 flex-col items-center gap-10",
        {
          "left-0": props.position === "left",
          "right-0": props.position === "right",
          "translate-y-full": !show,
        }
      )}
    >
      {props.children}
      <div className="h-36 w-0 ring-1 ring-darkSlate"></div>
    </div>
  );
};

export default Fixed;
