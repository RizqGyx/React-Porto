import React, { useEffect, useRef } from "react";
import GalleryCard from "./GalleryCard";
import { projects } from "../../data/projects";

const SPEED = 0.12;
const STEP = (Math.PI * 2) / projects.length;

export default function RotatingGallery() {
  const wrapRef = useRef(null);
  const itemEls = useRef([]);
  const paused = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let W = 0;
    let H = 0;
    const measure = () => {
      const r = wrap.getBoundingClientRect();
      W = r.width;
      H = r.height;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);

    let raf = 0;
    let running = true;
    let base = 0;
    let last = performance.now();

    const step = (now) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused.current) base += SPEED * dt;

      const rx = W * 0.33;
      const ry = H * 0.29;

      for (let i = 0; i < projects.length; i++) {
        const el = itemEls.current[i];
        if (!el) continue;
        const a = base + i * STEP;
        const x = Math.cos(a) * rx;
        const y = Math.sin(a) * ry;
        const depth = (Math.sin(a) + 1) / 2;
        const scale = 0.62 + depth * 0.5;
        el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        el.style.opacity = 0.45 + depth * 0.55;
        el.style.zIndex = Math.round(depth * 100);
      }
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(step);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.02 }
    );
    io.observe(wrap);
    raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative my-6 h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="/LogoT.png" alt="" className="h-8 w-8 opacity-40" />
      </div>

      {projects.map((p, i) => (
        <div
          key={p.slug}
          ref={(el) => (itemEls.current[i] = el)}
          onPointerEnter={() => (paused.current = true)}
          onPointerLeave={() => (paused.current = false)}
          className="absolute left-1/2 top-1/2 w-52 will-change-transform md:w-60"
        >
          <GalleryCard project={p} />
        </div>
      ))}
    </div>
  );
}
