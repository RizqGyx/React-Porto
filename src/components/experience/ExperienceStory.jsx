import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { kindLabel } from "./constants";

const EASE = [0.22, 1, 0.36, 1];

export default function ExperienceStory({ items }) {
  const ref = useRef(null);
  const N = items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N + 0.0001))))
  );

  const item = items[active];

  return (
    <div ref={ref} style={{ height: `${N * 100}vh` }} className="relative my-16 md:my-28">
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((it, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.06 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <img src={it.image} alt="" className="h-full w-full object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />

        <div className="relative z-10 flex h-screen items-center">
          <div className="shell w-full">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/60">
              04 — The Path
            </p>

            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-display text-[38vh] font-bold leading-none text-white/[0.06]"
            >
              0{active + 1}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mt-8 max-w-3xl"
              >
                <span className="inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80">
                  {kindLabel[item.kind]} · {item.start}
                  {item.end ? ` — ${item.end}` : ""}
                </span>
                <h2 className="mt-6 font-display text-display font-bold leading-[0.98] text-white">
                  {item.role}
                </h2>
                <p className="mt-3 text-lead font-medium text-accent">
                  {item.org}
                  {item.status ? ` · ${item.status}` : ""}
                </p>
                <p className="mt-5 max-w-xl text-white/70">{item.detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10">
          <div className="shell flex items-center gap-4">
            <span className="font-mono text-xs text-white/60">
              0{active + 1} <span className="opacity-40">/ 0{N}</span>
            </span>
            <div className="flex flex-1 gap-2">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                    i === active ? "bg-accent" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
