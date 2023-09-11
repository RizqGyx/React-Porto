import React from 'react'
import Topnav from './components/Topnav'
import Hero from './components/Hero'
import Powered from './components/Powered'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Topnav />
      <Hero />
      <Powered />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
    )
}

export default App