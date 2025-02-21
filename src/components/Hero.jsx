import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-36" id="hero">
      <div className="container">
        <div className="flex flex-wrap justify-around">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="lg:hidden w-full self-end px-4 lg:w-1/2"
          >
            <div className="relative flex justify-center translate-y-4">
              <img
                src="/LogoT.png"
                width={100}
                height={100}
                alt="Me"
                className="-translate-y-4"
              />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
                className="absolute bottom-0 -z-10"
              >
                <svg
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#08BDBA"
                    d="M42.6,-73.3C56.5,-65.8,69.9,-56.9,78.9,-44.5C87.9,-32.1,92.4,-16,91.3,-0.6C90.2,14.7,83.4,29.5,74.9,42.8C66.5,56.2,56.3,68.1,43.6,76.7C30.8,85.3,15.4,90.6,1.2,88.5C-12.9,86.3,-25.9,76.8,-40.3,69.1C-54.6,61.4,-70.4,55.6,-80.3,44.4C-90.1,33.2,-94,16.6,-91.3,1.6C-88.5,-13.4,-79.2,-26.9,-70.5,-40.1C-61.8,-53.3,-53.8,-66.3,-42.1,-75.1C-30.5,-84,-15.3,-88.7,-0.5,-87.9C14.4,-87.1,28.7,-80.9,42.6,-73.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="w-full self-center mt-10 px-4 lg:w-1/2"
          >
            <div className="w-1/2 bg-gray-800 h-[6px] dark:bg-gray-100 mb-4"></div>
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hey There, I'm
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Muhammad Rizki
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                speed={25}
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                wrapper="span"
                repeat={Infinity}
              />
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              An undergraduate informatics student at UPN Veteran Jakarta,
              Possess a strong passion for acquiring knowledge in
              <span className="text-slate-500 font-bold dark:text-slate-300">
                {" "}
                Fullstack Development,
              </span>{" "}
              including website, native application, and multi-platform
              application.
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 mr-10 rounded hover:bg-teal-700 transition duration-200 ease-in-out"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="hidden lg:block w-full self-end px-4 lg:w-1/2"
          >
            <div className="relative mt-24 flex justify-center translate-y-4">
              <img src="/LogoT.png" alt="Me" className="-translate-y-8" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
                className="absolute bottom-0 -z-10"
              >
                <svg
                  width={420}
                  height={420}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#08BDBA"
                    d="M42.6,-73.3C56.5,-65.8,69.9,-56.9,78.9,-44.5C87.9,-32.1,92.4,-16,91.3,-0.6C90.2,14.7,83.4,29.5,74.9,42.8C66.5,56.2,56.3,68.1,43.6,76.7C30.8,85.3,15.4,90.6,1.2,88.5C-12.9,86.3,-25.9,76.8,-40.3,69.1C-54.6,61.4,-70.4,55.6,-80.3,44.4C-90.1,33.2,-94,16.6,-91.3,1.6C-88.5,-13.4,-79.2,-26.9,-70.5,-40.1C-61.8,-53.3,-53.8,-66.3,-42.1,-75.1C-30.5,-84,-15.3,-88.7,-0.5,-87.9C14.4,-87.1,28.7,-80.9,42.6,-73.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
