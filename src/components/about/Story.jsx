import React from "react";
import { Reveal } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";
import { profile } from "../../data/profile";

export default function Story() {
  return (
    <section className="shell grid gap-16 py-28 md:grid-cols-2">
      <div>
        <Chapter index="02" label="Background" />
        <Reveal className="mt-8">
          <p className="font-display text-title font-medium leading-tight text-ink">{profile.whoIAm}</p>
        </Reveal>
      </div>
      <div className="md:pt-24">
        <Chapter index="03" label="What I build" />
        <Reveal className="mt-8">
          <p className="text-lead text-muted">{profile.whatIBuild}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {profile.stats.map((s) => (
            <Reveal key={s.label} className="rounded-2xl border border-line/10 p-5">
              <div className="font-display text-4xl font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
