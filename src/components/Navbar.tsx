import clsx from "clsx";
import React from "react";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";
import NavItem, { NavItemProps } from "./NavItem";

const navItems: NavItemProps[] = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    console.log(scrollDirection);
    if (scrollDirection === ScrollDirection.up) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollDirection]);

  return (
    <div
      className={clsx(
        "transition ease-in-out delay-500 duration-300 flex flex-row justify-between py-4 px-12 sticky top-0 z-10 backdrop-blur-sm  bg-darkNavy/[0.9]",
        {
          "-translate-y-full": !show,
          "translate-y-0": show,
        }
      )}
    >
      <span className="text-green text-xl tracking-widest">JS</span>
      <ul className="flex flex-row gap-6 font-light text-xs tracking-widest text-white items-center">
        {navItems.map((item) => NavItem(item))}
        <a
          href="/resume"
          className="cursor-pointer text-green ring-1 ring-green p-3 rounded-md hover:bg-green/[0.2]"
        >
          Resume
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
