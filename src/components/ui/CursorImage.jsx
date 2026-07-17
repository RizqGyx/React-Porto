import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useIsDesktopPointer } from "../../motion/useMediaQuery";

export default function CursorImage({ src }) {
  const isDesktop = useIsDesktopPointer();
  const reduce = useReducedMotion();
  const enabled = isDesktop && !reduce;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.8 });
  const last = useRef({ x: 0, y: 0 });
  const prevSrc = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      last.current = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  useEffect(() => {
    if (src && !prevSrc.current) {
      sx.jump(last.current.x);
      sy.jump(last.current.y);
    }
    prevSrc.current = src;
  }, [src, sx, sy]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
        <AnimatePresence>
          {src && (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-52 w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
