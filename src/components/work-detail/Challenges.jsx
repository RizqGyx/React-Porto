import React from "react";
import { Reveal } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";

export default function Challenges({ index, items }) {
  if (!items?.length) return null;
  return (
    <section className="shell py-16">
      <Chapter index={index} label="Challenges" className="mb-10" />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line/10 bg-line/10 md:grid-cols-3">
        {items.map((c, i) => (
          <Reveal key={i} delay={i * 0.05} className="bg-paper p-8">
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <p className="mt-3 text-ink">{c}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
