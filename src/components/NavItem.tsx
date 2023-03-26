import React from "react";

export interface NavItemProps {
  name: string;
  link: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <a href={props.link} className="hover:text-green cursor-pointer">
      {props.name}
    </a>
  );
};

export default NavItem;
