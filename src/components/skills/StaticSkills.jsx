import React from "react";
import { Reveal } from "../../motion/Reveal";
import SkillIcon from "./icons";
import { skillNodes } from "../../data/skillsGraph";

const groups = [...new Set(skillNodes.map((n) => n.group))];

export default function StaticSkills() {
  return (
    <section className="shell py-12">
      {groups.map((group, gi) => (
        <Reveal key={group} delay={gi * 0.05} className="mb-12 last:mb-0">
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-accent">/ {group}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {skillNodes
              .filter((n) => n.group === group)
              .map((n) => (
                <div key={n.id} className="rounded-2xl border border-line/10 bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-line/10 bg-paper text-accent">
                      <SkillIcon id={n.id} />
                    </span>
                    <span className="font-display text-lg font-bold text-ink">{n.name}</span>
                    <span className="ml-auto font-mono text-xs text-muted">{n.years}+ yrs</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-line/10">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${n.level}%` }} />
                  </div>
                </div>
              ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
