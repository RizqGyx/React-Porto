import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrambleText from "./ScrambleText";

export default function NextChapter({ label = "Next chapter", title, to, image, cue = "Continue" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ["-12%", "12%"]);

  return (
    <Link
      to={to}
      data-cursor
      data-cursor-label="Next"
      ref={ref}
      className="group relative block overflow-hidden border-t border-line/10"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-0 scale-125">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/40" />

      <div className="relative z-10 shell py-28 md:py-40 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted">{label}</span>
        <ScrambleText
          text={title}
          as="h2"
          className="mt-4 font-display text-hero font-bold leading-[0.9] text-ink transition-colors group-hover:text-accent"
        />
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          {cue}
          <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-2">→</span>
        </span>
      </div>
    </Link>
  );
}
