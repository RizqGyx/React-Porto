import React from "react";
import { motion } from "framer-motion";
import Heading from "../atoms/Heading";
import ProfileImage from "../atoms/ProfileImage";
import AboutText from "../molecules/AboutText";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: false }}
      className="w-10/12 mx-auto flex flex-col items-center bg-[url('/Background.jpg')] pb-10 bg-center mt-32 rounded-3xl lg:h-screen lg:bg-fixed lg:bg-cover lg:mt-10 lg:justify-center"
      id="about"
    >
      <Heading
        text="About Me"
        className="bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r from-pink-500 to-violet-500 mb-5 pt-28 lg:mb-10 lg:pt-32 lg:hidden"
      />
      <div className="flex flex-col items-center gap-5 justify-evenly lg:flex-row lg:pt-24">
        <ProfileImage
          src="Me.jpg"
          alt="myself"
          className="rounded-t-full xl:rounded-e-full mx-auto lg:w-3/4"
        />
        <AboutText
          text="I am currently pursuing a Fullstack Web Development course program at Binar Academy while also completing my final semester of undergraduate studies in Computer Science at UPN Veteran Jakarta. I have a strong interest in learning more about Software Engineering and expanding my skills in the field. During my free time, I dedicate myself to learning various programming languages and frameworks."
          className="w-full text-justify grid gap-10 content-between lg:w-3/4"
        />
      </div>
    </motion.div>
  );
};

export default About;
