import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Ambient() {
  const reduce = useReducedMotion();
  const float = (dur, delay = 0) =>
    reduce
      ? {}
      : {
          animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] },
          transition: { duration: dur, delay, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-40 top-[-10%] h-[45vw] w-[45vw] rounded-full bg-accent/20 blur-[120px]"
        {...float(22)}
      />
      <motion.div
        className="absolute right-[-15%] top-[30%] h-[40vw] w-[40vw] rounded-full bg-accent/10 blur-[130px]"
        {...float(28, 2)}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[20%] h-[38vw] w-[38vw] rounded-full bg-accent/10 blur-[140px]"
        {...float(26, 1)}
      />
    </div>
  );
}
