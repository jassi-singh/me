"use client";
import React, { useEffect, useState } from "react";
import SunIcon from "@/components/icons/sun";
import MoonIcon from "@/components/icons/moon";

export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || !savedTheme) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleClick = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-neutral-700 p-3 rounded-full absolute top-4 right-4"
    >
      {isDarkMode ? (
        <SunIcon className="h-4 w-4 fill-white" />
      ) : (
        <MoonIcon className="h-4 w-4 fill-white" />
      )}
    </button>
  );
}
