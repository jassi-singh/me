import clsx from "clsx";
import React from "react";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";
import Button from "./Button";
import NavItem, { NavItemProps } from "./NavItem";

const navItems: NavItemProps[] = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (scrollDirection === ScrollDirection.up) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollDirection]);

  //TODO: Make this responsive

  return (
    <div
      className={clsx(
        "w-full transition ease-in-out duration-500 flex flex-row justify-between py-4 px-12 top-0 fixed z-10 backdrop-blur-sm  bg-darkNavy/[0.9] font-mono",
        {
          "-translate-y-full": !show,
          "translate-y-0": show,
        }
      )}
    >
      <span className="text-primary text-xl tracking-widest">JS</span>
      <ul className="flex flex-row gap-6 items-center">
        {navItems.map((item, idx) => (
          <NavItem key={idx} {...item} />
        ))}
        <Button name="Resume" link={"/resume"} />
      </ul>
    </div>
  );
};

export default Navbar;
