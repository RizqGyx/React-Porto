import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      data-cursor
      data-cursor-label="Open"
      className="group/card block overflow-hidden rounded-2xl border border-line/10 bg-surface transition-colors hover:border-accent/40"
    >
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line/10 bg-paper p-3">
        <img
          src={project.images.cover}
          alt={project.title}
          loading="lazy"
          className="max-h-full max-w-full rounded-md object-contain shadow-sm transition-transform duration-700 ease-smooth group-hover/card:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <h3 className="truncate font-display text-sm font-bold text-ink">{project.title}</h3>
        <span className="shrink-0 text-[10px] uppercase tracking-wide text-muted">
          {project.tech.slice(0, 2).join(" · ")}
        </span>
      </div>
    </Link>
  );
}
