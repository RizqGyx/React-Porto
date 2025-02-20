import React from "react";
import { motion } from "framer-motion";

const PoweredTitle = ({ text }) => {
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: 0.25 }}
      className="bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r text-center mb-10 from-pink-500 to-violet-500 xl:h-full lg:mb-0 xl:pb-2"
    >
      {text}
    </motion.h2>
  );
};

export default PoweredTitle;
