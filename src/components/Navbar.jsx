import React, { useState, useRef } from "react";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(true);

  let dialogRef = useRef();

  let clickOutsideModal = (e) => {
    if (e.target.id !== "dialog") {
      dialogRef.current.close();
      setIsOpen(!isOpen);
    }
  };

  const handleHamburger = () => {
    setIsOpen(!isOpen);
    dialogRef.current.showModal();
  };

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "#f1f5f9";
  } else {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = "#1a1b1e";
  }

  return (
    <nav className="flex justify-between items-center bg-[#f1f5f9] dark:bg-[#1a1b1e] fixed top-0 left-0 w-full z-10 py-3 px-8 md:px-16 border-b-[1px] dark:border-[#ffffff0d]">
      <a href="/">
        <motion.div
          whileHover={{ rotate: 360, x: 25 }}
          transition={{ duration: 1 }}
        >
          <img
            src={
              theme == "light" && localStorage.getItem("theme") === "light"
                ? "/LogoW.png"
                : "/LogoD.png"
            }
            className="h-[80px]"
            alt="Logo"
          />
        </motion.div>
      </a>

      <div className="space-x-16 hidden md:block">
        <a
          href="#hero"
          className="text-black dark:text-white xl:text-xl font-semibold hover:bg-primary rounded-full p-2"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black dark:text-white xl:text-xl font-semibold hover:bg-primary rounded-full p-2"
        >
          About
        </a>
        <a
          href="#project"
          className="text-black dark:text-white xl:text-xl font-semibold hover:bg-primary rounded-full p-2"
        >
          Project
        </a>
        <a
          href="#contact"
          className="text-black dark:text-white xl:text-xl font-semibold hover:bg-primary rounded-full p-2"
        >
          Contact
        </a>
      </div>

      <dialog ref={dialogRef} onClick={clickOutsideModal}>
        <div
          id="dialog"
          className={`min-w[70vw] flex flex-col items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/60 dark:bg-white/80 py-32 w-11/12 backdrop-blur-sm md:hidden`}
        >
          <a
            href="#hero"
            className="text-white/70 dark:text-slate-700 text-2xl font-bold my-3 hover:underline"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white/70 dark:text-slate-700 text-2xl font-bold my-3 hover:underline"
          >
            About
          </a>
          <a
            href="#project"
            className="text-white/70 dark:text-slate-700 text-2xl font-bold my-3 hover:underline"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-white/70 dark:text-slate-700 text-2xl font-bold my-3 hover:underline"
          >
            Contact
          </a>
        </div>
      </dialog>

      <div className="flex gap-6">
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="text-xl p-1"
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
              setThemeInStorage("dark");
              document.body.classList.add("dark");
              document.body.style.backgroundColor = "#1a1b1e";
            } else {
              setTheme("light");
              setThemeInStorage("light");
              document.body.classList.remove("dark");
              document.body.style.backgroundColor = "#f1f5f9";
            }
          }}
        >
          {theme == "light" && localStorage.getItem("theme") === "light" ? (
            <BsFillBrightnessHighFill className="text-slate-800" />
          ) : (
            <BsFillMoonStarsFill className="text-white" />
          )}
        </motion.button>

        <button
          className="flex flex-col justify-center items-center md:hidden border p-2 dark:border-zinc-600 rounded"
          onClick={handleHamburger}
        >
          <span
            className={`bg-black dark:bg-white block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm py-0.5 ${
              !isOpen ? "rotate-45 translate-y-2" : "-tranlate-y-1"
            }`}
          ></span>
          <span
            className={`bg-black dark:bg-white block transition-all ease-in-out duration-300 h-0.5 w-6 rounded-sm py-0.5 my-1 ${
              !isOpen ? "opacity-0 translate-x-8" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black dark:bg-white block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm py-0.5 ${
              !isOpen ? "-rotate-45 -translate-y-2" : "tranlate-y-1"
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
