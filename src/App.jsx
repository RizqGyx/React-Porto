import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider";
import CustomCursor from "./motion/CustomCursor";
import Loader from "./components/system/Loader";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Ambient from "./components/ui/Ambient";
import Noise from "./components/ui/Noise";
import AnimatedRoutes from "./routes/AnimatedRoutes";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Ambient />
        <Noise />
        <Loader />
        <CustomCursor />
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
