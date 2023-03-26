import React from "react";

export interface NavItemProps {
  name: string;
  link: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <a href={props.link} className="hover:text-green cursor-pointer text-xs tracking-widest text-white">
      {props.name}
    </a>
  );
};

export default NavItem;
