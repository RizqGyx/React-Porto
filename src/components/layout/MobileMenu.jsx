import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../data/nav";

export default function MobileMenu({ open }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] flex flex-col justify-center bg-paper px-8 md:hidden"
          initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((l, i) => (
              <motion.li
                key={l.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavLink to={l.to} end={l.to === "/"} className="flex items-baseline gap-4 py-2">
                  <span className="font-mono text-xs text-accent">{l.index}</span>
                  <span className="font-display text-4xl font-bold text-ink">{l.label}</span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
