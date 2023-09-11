import React from "react";

const About = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center bg-[url('/Background.jpg')] pb-10 bg-center mt-32 rounded-3xl lg:h-screen lg:bg-fixed lg:bg-cover lg:mt-10 lg:justify-center" id="about">
      <h2 className='bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r from-pink-500 to-violet-500 mb-5 pt-28 lg:mb-10 lg:pt-32 lg:hidden'>About Me</h2>
      <div className="flex flex-col items-center gap-5 justify-evenly lg:flex-row lg:pt-24">
        <div className="w-8/12 lg:w-3/4">
          <img src="Me.jpg" alt="myself" width={400} className="rounded-t-full xl:rounded-e-full mx-auto"/>
        </div>
        <div className="w-full text-justify grid gap-10 content-between lg:w-3/4">
          <h2 className='hidden font-bold text-center text-4xl text-primary lg:block'>About Me</h2>
          <h2 className="text-white font-bold text-sm xl:text-lg px-5">
            My name is Muhammad Rizki, currently residing in West Sumatra, Indonesia. 
            I'm a 20-year-old student with a strong passion for web development, 
            specifically both front-end and back-end development. 
            I'm highly motivated to learn and enhance my skills in this field, 
            always on the lookout for new and exciting projects to work on. During my free time, 
            I dedicate myself to learning various programming languages and frameworks. Additionally, 
            I pursue my hobby of working out at the gym.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
