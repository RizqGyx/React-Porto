import React from "react";
import { motion } from "framer-motion";

const Heading = ({ text, className }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      className={className}
    >
      {text}
    </motion.h2>
  );
};

export default Heading;
