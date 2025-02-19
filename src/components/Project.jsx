import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Project = () => {
  const p1 =
    "https://github.com/RizqGyx/Detikcom_FrontendDesignAssignment_MuhammadRizki";
  const p2 = "https://sanstore.vercel.app/";
  const p3 = "https://berzkireact.vercel.app/";

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
        Let's Work Together
      </h2>
      <div className="flex flex-col lg:flex-row gap-5">
        {[
          {
            title: "DETIK INTERN TEST",
            desc: "Creating a responsive modern and engaging landing page for a Detikcom intern task Using only HTML, CSS, and JS",
            url: "P1.png",
            project: p1,
          },
          {
            title: "WEB STORE KING SANJAI",
            desc: "Creating a web-based online store application that can assist store customers in finding information about King Sanjai's store. Using only HTML, CSS, and JS",
            url: "P2.png",
            project: p2,
          },
          {
            title: "PORTO REACT",
            desc: "This portfolio project is an interactive website built using cutting-edge technologies, including React.js, Tailwind CSS, and React Motion.",
            url: "P3.png",
            project: p3,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            whileHover={{ scale: 1.1, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <Card
              title={item.title}
              desc={item.desc}
              url={item.url}
              project={item.project}
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
