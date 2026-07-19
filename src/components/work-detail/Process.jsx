import React from "react";
import { Reveal } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";

export default function Process({ index, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="shell py-16">
      <Chapter index={index} label="Process" className="mb-10" />
      <ol className="flex flex-col">
        {steps.map((step, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line/10 py-6 last:border-b">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-muted">{step.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
