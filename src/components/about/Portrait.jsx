import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Portrait() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="shell mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-line/10">
        <motion.img
          src={profile.portrait}
          alt={profile.name}
          loading="lazy"
          style={reduce ? undefined : { scale }}
          className="h-[60vh] w-full object-cover md:h-[80vh]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-white/80">
            {profile.name} — {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
