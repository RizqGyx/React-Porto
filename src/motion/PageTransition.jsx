import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const COLS = 5;
const EASE = [0.76, 0, 0.24, 1];

export default function PageTransition({ children, className }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.main
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    );
  }

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[9990] flex">
        {Array.from({ length: COLS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-ink"
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            exit={{ y: "0%" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
          />
        ))}
      </div>

      <motion.main
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.main>
    </>
  );
}
