import clsx from "clsx";
import React from "react";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";
import Button from "./Button";
import NavItem, { NavItemProps } from "./NavItem";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const navItems: NavItemProps[] = [
  { name: "Skills", link: "#skills", index: 1 },
  { name: "Experience", link: "#experience", index: 2 },
  { name: "Projects", link: "#projects", index: 3 },
  { name: "Contact", link: "#contact", index: 4 },
];

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (scrollDirection === ScrollDirection.up) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollDirection]);

  

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav
      className={clsx(
        "w-full transition-all ease-out duration-1000 flex flex-row justify-between items-center py-4 px-12 top-0 fixed z-30 backdrop-blur-sm bg-darkNavy/[0.9] font-mono shadow-lg",
        {
          "-translate-y-full": !show,
          "translate-y-0": show,
        }
      )}
    >
      <span className="text-primary text-xl tracking-widest">JS</span>
      <button
        className="text-white text-2xl p-4 lg:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <ul
        className={clsx(
          "transition-all duration-300 w-2/3 absolute flex flex-col gap-2 items-center top-0 right-0 h-screen bg-navy lg:w-auto lg:h-auto lg:flex-row lg:relative lg:justify-end lg:static lg:bg-transparent lg:gap-6",
          {
            "translate-x-full lg:translate-x-0": !showSidebar,
          }
        )}
      >
        <button
          className="text-white text-2xl p-4 self-end mr-12 mt-4 lg:hidden"
          onClick={toggleSidebar}
        >
          <RxCross2 />
        </button>
        {navItems.map((item, idx) => (
          <NavItem key={idx} {...item} onClick={toggleSidebar} />
        ))}
        <Button name="Resume" link={"/resume"} />
      </ul>
    </nav>
  );
};

export default Navbar;
