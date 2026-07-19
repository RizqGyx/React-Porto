import React from "react";
import { Link } from "react-router-dom";

export default function NextProject({ next }) {
  if (!next) return null;
  return (
    <Link
      to={`/work/${next.slug}`}
      data-cursor
      data-cursor-label="Next"
      className="group mt-12 block border-t border-line/10 py-20"
    >
      <div className="shell text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Next project</span>
        <h2 className="mt-3 font-display text-display font-bold text-ink transition-transform duration-500 ease-smooth group-hover:-translate-y-2">
          {next.title}
        </h2>
        <span className="mt-4 inline-block text-accent">↓ Continue</span>
      </div>
    </Link>
  );
}
