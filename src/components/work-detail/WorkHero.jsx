import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal, RevealText } from "../../motion/Reveal";

function Meta({ project }) {
  const items = [
    ["Role", project.role],
    ["Year", project.year],
    ["Category", project.category],
    ["Stack", project.tech.slice(0, 3).join(", ")],
  ].filter(([, v]) => v);

  return (
    <div className="grid grid-cols-2 gap-6 border-y border-line/10 py-8 md:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={k}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{k}</div>
          <div className="mt-1 font-medium text-ink">{v}</div>
        </div>
      ))}
    </div>
  );
}

export default function WorkHero({ project }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const coverScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <>
      <header className="shell pt-36 md:pt-44">
        <Link to="/work" data-cursor className="text-sm text-muted hover:text-accent">
          ← All work
        </Link>
        <h1 className="mt-6 font-display font-bold leading-[0.9] text-ink">
          <RevealText text={project.title} className="block text-hero" immediate />
        </h1>
        {project.tagline && (
          <Reveal delay={0.2} immediate className="mt-6 max-w-2xl">
            <p className="text-lead text-muted">{project.tagline}</p>
          </Reveal>
        )}
        <div className="mt-10">
          <Meta project={project} />
        </div>
      </header>

      <div ref={ref} className="shell mt-10">
        <div className="overflow-hidden rounded-3xl border border-line/10">
          <motion.img
            src={project.images.cover}
            alt={`${project.title} cover`}
            loading="lazy"
            style={reduce ? undefined : { scale: coverScale }}
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
