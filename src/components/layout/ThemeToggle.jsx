import React from "react";
import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";
import { useTheme } from "../../providers/ThemeProvider";
import Magnetic from "../../motion/Magnetic";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Magnetic>
      <button
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        data-cursor
        className="grid h-10 w-10 place-items-center rounded-full border border-line/20 text-ink transition-colors hover:border-accent hover:text-accent"
      >
        {theme === "dark" ? <BsBrightnessHighFill /> : <BsFillMoonStarsFill />}
      </button>
    </Magnetic>
  );
}
