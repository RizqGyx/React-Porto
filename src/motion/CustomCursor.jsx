import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useIsDesktopPointer } from "./useMediaQuery";

export default function CustomCursor() {
  const isDesktop = useIsDesktopPointer();
  const reduce = useReducedMotion();
  const enabled = isDesktop && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const logoX = useSpring(x, { stiffness: 500, damping: 34, mass: 0.4 });
  const logoY = useSpring(y, { stiffness: 500, damping: 34, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 170, damping: 24, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 170, damping: 24, mass: 0.7 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-none-desktop");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest?.(
        "a, button, [role='button'], input, textarea, [data-cursor]"
      );
      if (target) {
        setHovering(true);
        setLabel(target.getAttribute?.("data-cursor-label") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/70"
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {label ? (
          <span className="translate-y-8 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-accent">
            {label}
          </span>
        ) : null}
      </motion.div>

      <motion.img
        src="/LogoT.png"
        alt=""
        style={{ x: logoX, y: logoY }}
        className="absolute -left-3.5 -top-3.5 h-7 w-7 select-none object-contain"
        animate={{ scale: hovering ? 1.5 : 1, rotate: hovering ? 12 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
