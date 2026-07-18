import React from "react";
import { Reveal } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";
import { profile } from "../../data/profile";

export default function HowIThink() {
  return (
    <section className="shell py-20">
      <Chapter index="04" label="How I think" className="mb-14" />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line/10 bg-line/10 md:grid-cols-2">
        {profile.howIThink.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className="bg-paper p-8 md:p-12">
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">{item.title}</h3>
            <p className="mt-3 text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
