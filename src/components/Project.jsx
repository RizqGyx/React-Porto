import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const Project = () => {
  const { data, loading, error } = useFetch(
    "https://rizqgyx.github.io/portfolio_json/projects.json"
  );

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: -5,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className="w-10/12 mx-auto pt-28 flex items-center flex-col"
      id="project"
    >
      <h2 className="bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r from-pink-500 to-violet-500 pb-5">
        My Latest Project
      </h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {data &&
          data.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{ scale: 1.1, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              variants={cardVariants}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%]"
            >
              <Card
                title={item.Project_Name}
                desc={item.Description}
                url={item.Image_Url}
                project={item.Link_Github}
              />
            </motion.div>
          ))}
      </div>
      <motion.button
        className="mt-8 p-3 px-8 rounded-full font-bold text-white bg-primary hover:bg-teal-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://github.com/RizqGyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </motion.button>
    </div>
  );
};

export default Project;
