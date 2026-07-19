import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Work = lazy(() => import("../pages/Work"));
const WorkDetail = lazy(() => import("../pages/WorkDetail"));
const Experience = lazy(() => import("../pages/Experience"));
const Skills = lazy(() => import("../pages/Skills"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
