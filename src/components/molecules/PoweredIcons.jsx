import React from "react";
import { SiTailwindcss, SiVite, SiVercel, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import PoweredIcon from "../atoms/PoweredIcon";

const PoweredIcons = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: 0.25 }}
      className="text-3xl flex gap-10 text-slate-700 dark:text-white lg:w-1/2 justify-center"
    >
      <PoweredIcon>
        <SiTailwindcss />
      </PoweredIcon>
      <PoweredIcon>
        <SiVite />
      </PoweredIcon>
      <PoweredIcon>
        <SiVercel />
      </PoweredIcon>
      <PoweredIcon>
        <SiReact />
      </PoweredIcon>
    </motion.div>
  );
};

export default PoweredIcons;
