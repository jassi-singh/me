import React from "react";

export interface NavItemProps {
  name: string;
  link: string;
  index: number;
  onClick?: () => void;
}

const NavItem = (props: NavItemProps) => {
  return (
    <a
      href={props.link}
      onClick={props.onClick}
      className="hover:text-primary cursor-pointer text-xs tracking-widest text-white py-2 w-full text-center lg:py-0 lg:w-auto"
    >
      <span className="text-primary">0{props.index}.</span> {props.name}
    </a>
  );
};

export default NavItem;
