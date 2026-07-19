import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "../../motion/Magnetic";
import Tilt from "../ui/Tilt";

export default function StackedCard({ project, index, total }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);
  const scale = reduce ? 1 : 1 - (total - 1 - index) * 0.03;

  return (
    <div ref={ref} className="sticky" style={{ top: `${96 + index * 18}px`, zIndex: index + 1 }}>
      <Tilt className="w-full" className3d="will-change-transform">
        <div
          className="relative min-h-[86vh] overflow-hidden rounded-3xl border border-line/10 shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          <motion.img
            src={project.images.cover}
            alt={project.title}
            loading="lazy"
            style={{ y: imgY }}
            className="absolute inset-0 h-[112%] w-full -translate-y-[6%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="relative z-10 flex min-h-[86vh] max-w-2xl flex-col justify-between gap-8 p-8 text-white md:p-14">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                0{index + 1} — {project.category} · {project.year}
              </span>
              <h3 className="mt-3 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">
                {project.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/25 px-3 py-1 text-[11px] uppercase tracking-wide text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-xl text-lead text-white">{project.tagline}</p>
              <p className="mt-4 max-w-xl text-white/70">{project.summary}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link to={`/work/${project.slug}`} data-cursor data-cursor-label="Open" className="btn btn-primary">
                  View case →
                </Link>
              </Magnetic>
              {project.links.live && (
                <Magnetic>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    className="btn rounded-full border border-white/30 text-white transition-colors hover:border-white"
                  >
                    Visit site ↗
                  </a>
                </Magnetic>
              )}
            </div>
          </div>

          <Link
            to={`/work/${project.slug}`}
            data-cursor
            data-cursor-label="Open"
            aria-label={`Open ${project.title}`}
            className="absolute inset-0 z-0"
          />
        </div>
      </Tilt>
    </div>
  );
}
