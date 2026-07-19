import React from "react";
import { Reveal } from "../../motion/Reveal";
import { kindLabel } from "./constants";

export default function StackedStory({ items }) {
  return (
    <section className="shell py-16">
      <div className="border-l border-line/15 pl-6 md:pl-10">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="relative pb-14 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center md:-left-[47px]">
                <span className="h-3 w-3 rounded-full border-2 border-accent bg-paper" />
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {kindLabel[item.kind]}
                </span>
                <span className="font-mono text-xs text-muted">
                  {item.start}
                  {item.end ? ` — ${item.end}` : ""}
                </span>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line/10">
                <img src={item.image} alt="" loading="lazy" className="h-40 w-full object-cover" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">{item.role}</h2>
              <p className="mt-1 text-accent">{item.org}</p>
              {item.status && <p className="mt-1 text-sm text-muted">{item.status}</p>}
              <p className="mt-3 max-w-2xl text-muted">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
