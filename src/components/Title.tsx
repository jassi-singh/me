import React from "react";

const Title = (props: { index: number; title: string }) => {
  return (
    <div className="tracking-widest flex items-baseline">
      <span className="text-primary font-mono text-xl">0{props.index}.</span>{" "}
      <span className="text-lightSlate text-3xl font-bold py-3">
        {props.title}
      </span>
      <span className="inline-block border-t border-lightNavy mb-2 ml-16 self-center flex-grow"></span>
    </div>
  );
};

export default Title;
