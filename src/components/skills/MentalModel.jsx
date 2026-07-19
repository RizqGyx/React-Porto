import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SkillIcon from "./icons";
import SkillPanel from "./SkillPanel";
import { skillNodes, skillEdges } from "../../data/skillsGraph";

const idx = Object.fromEntries(skillNodes.map((n, i) => [n.id, i]));

const POS = {
  html: { x: 0.12, y: 0.24 },
  css: { x: 0.12, y: 0.6 },
  js: { x: 0.3, y: 0.42 },
  react: { x: 0.5, y: 0.28 },
  framer: { x: 0.67, y: 0.2 },
  tailwind: { x: 0.64, y: 0.5 },
  daisy: { x: 0.82, y: 0.62 },
  vite: { x: 0.46, y: 0.64 },
  vercel: { x: 0.8, y: 0.38 },
  git: { x: 0.3, y: 0.78 },
  flutter: { x: 0.14, y: 0.86 },
};

const adjacency = (() => {
  const adj = {};
  skillNodes.forEach((n) => (adj[n.id] = []));
  skillEdges.forEach(([a, b]) => {
    adj[a].push(b);
    adj[b].push(a);
  });
  return adj;
})();

function depthsFrom(active) {
  if (!active) return null;
  const dist = {};
  skillNodes.forEach((n) => (dist[n.id] = Infinity));
  dist[active] = 0;
  const q = [active];
  while (q.length) {
    const c = q.shift();
    for (const nb of adjacency[c]) {
      if (dist[nb] === Infinity) {
        dist[nb] = dist[c] + 1;
        q.push(nb);
      }
    }
  }
  return dist;
}

function nodeState(dist, id, order) {
  if (!dist) return { opacity: 0.6, scale: 1, y: 0, delay: 0 };
  const d = dist[id];
  if (d === 0) return { opacity: 1, scale: 1.14, y: 0, delay: 0 };
  if (d === 1) return { opacity: 1, scale: 1.04, y: 0, delay: 0.15 + order * 0.08 };
  if (d === 2) return { opacity: 0.72, scale: 1, y: 0, delay: 0.5 + order * 0.06 };
  return { opacity: 0.1, scale: 0.96, y: 0, delay: 0 };
}

export default function MentalModel() {
  const [hover, setHover] = useState(null);
  const [locked, setLocked] = useState(null);
  const active = locked ?? hover;
  const dist = useMemo(() => depthsFrom(active), [active]);

  const orders = useMemo(() => {
    const o = {};
    if (dist) {
      const byDepth = {};
      skillNodes.forEach((n) => {
        const d = dist[n.id];
        (byDepth[d] = byDepth[d] || []).push(n.id);
      });
      Object.values(byDepth).forEach((ids) => ids.forEach((id, i) => (o[id] = i)));
    }
    return o;
  }, [dist]);

  const activeNode = active ? skillNodes[idx[active]] : null;
  const origin = active ? `${POS[active].x * 100}% ${POS[active].y * 100}%` : "50% 50%";

  return (
    <section className="shell py-8">
      <div
        className="relative h-[74vh] min-h-[520px] w-full overflow-hidden rounded-3xl border border-line/10"
        onClick={() => setLocked(null)}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: origin }}
          animate={{ scale: active ? 1.06 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {skillEdges.map(([a, b], i) => {
              const draw = dist && dist[a] <= 2 && dist[b] <= 2;
              const ring = dist ? Math.max(dist[a], dist[b]) : 0;
              const supporting = ring >= 2;
              return (
                <motion.line
                  key={i}
                  x1={POS[a].x * 100}
                  y1={POS[a].y * 100}
                  x2={POS[b].x * 100}
                  y2={POS[b].y * 100}
                  stroke="rgb(var(--c-accent))"
                  strokeWidth={supporting ? 1 : 1.5}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: draw ? 1 : 0, opacity: draw ? (supporting ? 0.45 : 0.9) : 0 }}
                  transition={{
                    pathLength: { duration: 0.7, delay: draw ? (ring - 1) * 0.28 + 0.1 : 0, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, delay: draw ? (ring - 1) * 0.28 + 0.1 : 0 },
                  }}
                />
              );
            })}
          </svg>

          {skillNodes.map((n) => {
            const st = nodeState(dist, n.id, orders[n.id] || 0);
            const isActive = active === n.id;
            return (
              <motion.button
                key={n.id}
                type="button"
                data-cursor
                onClick={(e) => {
                  e.stopPropagation();
                  setLocked((l) => (l === n.id ? null : n.id));
                }}
                onPointerEnter={() => setHover(n.id)}
                onPointerLeave={() => setHover(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${POS[n.id].x * 100}%`, top: `${POS[n.id].y * 100}%` }}
                animate={{ opacity: st.opacity, scale: st.scale, y: st.y }}
                transition={{ duration: 0.6, delay: st.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm transition-colors duration-500 ${
                    isActive ? "border-accent bg-accent text-paper" : "border-line/15 bg-surface/80 text-ink"
                  }`}
                >
                  <SkillIcon id={n.id} className={isActive ? "text-paper" : "text-accent"} />
                  <span className="whitespace-nowrap text-sm font-medium">{n.name}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <SkillPanel node={activeNode} />

        <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted">
          {active ? "Click to lock · click empty space to release" : "Hover a technology to see how I connect it"}
        </div>
      </div>
    </section>
  );
}
