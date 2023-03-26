import React from "react";

export interface ButtonProps {
  name: string;
  link: string;
}

const Button = (props: ButtonProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs tracking-widest cursor-pointer text-green ring-1 ring-green p-3 rounded-md hover:bg-green/[0.2]"
    >
      {props.name}
    </a>
  );
};

export default Button;
