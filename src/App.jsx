import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Powered from "./components/Powered";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/organisms/Footer";
import Contact from "./components/Contact";

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
