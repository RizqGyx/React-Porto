import React from "react";
import { Reveal } from "../../motion/Reveal";

export default function Chapter({ index, label, className = "" }) {
  return (
    <Reveal className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-sm text-accent">{index}</span>
      <span className="h-px flex-1 max-w-[80px] bg-line/20" />
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
        {label}
      </span>
    </Reveal>
  );
}
