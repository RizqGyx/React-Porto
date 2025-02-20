import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Powered from "./components/organisms/Powered";
import About from "./components/organisms/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/organisms/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Powered />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
