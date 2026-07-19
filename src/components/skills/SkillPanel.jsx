import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillIcon from "./icons";

export default function SkillPanel({ node }) {
  return (
    <AnimatePresence mode="wait">
      {node && (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-4 top-4 z-20 w-72 rounded-2xl border border-line/10 bg-surface/90 p-5 shadow-2xl backdrop-blur-md md:right-6 md:top-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-paper text-xl text-accent">
              <SkillIcon id={node.id} />
            </span>
            <div>
              <h4 className="font-display text-lg font-bold leading-none text-ink">{node.name}</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{node.group}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-xs">
            <span className="text-muted">Experience</span>
            <span className="font-medium text-ink">{node.years}+ years</span>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">Proficiency</span>
              <span className="font-mono text-ink">{node.level}</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-line/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${node.level}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="mt-5">
            <span className="text-xs text-muted">Used in</span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {node.projects.length > 0 ? (
                node.projects.map((p) => (
                  <span key={p} className="rounded-full border border-line/15 px-2.5 py-1 text-[11px] text-ink">
                    {p}
                  </span>
                ))
              ) : (
                <span className="text-[11px] text-muted">Across the toolchain</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
