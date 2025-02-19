import React from "react";
import { motion } from "framer-motion";

const AboutText = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      className={className}
    >
      <h2 className="text-white font-bold text-sm xl:text-lg px-5">
        I am currently pursuing a Fullstack Web Development course program at
        Binar Academy while also completing my final semester of undergraduate
        studies in Computer Science at UPN Veteran Jakarta. I have a strong
        interest in learning more about Software Engineering and expanding my
        skills in the field. During my free time, I dedicate myself to learning
        various programming languages and frameworks.
      </h2>
    </motion.div>
  );
};

export default AboutText;
