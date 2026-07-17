import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const GREETINGS = [
  "Hello",
  "Halo",
  "こんにちは",
  "안녕하세요",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Hallo",
  "مرحبا",
  "你好",
  "Namaste",
];

export default function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce);
  const [count, setCount] = useState(0);
  const [g, setG] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let raf;
    const start = performance.now();
    const DURATION = 1800;
    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 340);
    };
    raf = requestAnimationFrame(tick);
    const gi = setInterval(() => setG((v) => v + 1), 170);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(gi);
    };
  }, [reduce]);

  const greeting = GREETINGS[g % GREETINGS.length];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-8 bg-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="relative h-52 w-52 md:h-64 md:w-64"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/LogoT.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-20 grayscale"
            />
            <img
              src="/LogoT.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_0_18px_rgba(45,212,191,0.25)]"
              style={{ clipPath: `inset(${100 - count}% 0 0 0)` }}
            />
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-10 overflow-hidden">
              <motion.span
                key={greeting}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-3xl font-semibold text-ink"
              >
                {greeting}
              </motion.span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-28 overflow-hidden bg-line/10">
                <div className="h-full bg-accent" style={{ width: `${count}%` }} />
              </div>
              <span className="font-mono text-[10px] tabular-nums text-muted">{count}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
