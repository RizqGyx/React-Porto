import React from "react";
import { Reveal, RevealText } from "../../motion/Reveal";
import Chapter from "./Chapter";

export default function PageHeader({ index, label, lines, intro, size = "text-hero", children }) {
  return (
    <section className="shell pt-36 md:pt-44">
      <Chapter index={index} label={label} />
      <h1 className="mt-8 font-display font-bold leading-[0.92] text-ink">
        {lines.map((line, i) => (
          <span key={i} className={`block ${size}`}>
            <RevealText
              text={line.text}
              className={`${size} ${line.accent ? "text-accent" : ""}`}
              delay={i * 0.1}
              immediate
            />
            {line.dot && <span className="text-accent">.</span>}
          </span>
        ))}
      </h1>
      {intro && (
        <Reveal delay={0.2} immediate className="mt-8 max-w-xl">
          <p className="text-lead text-muted">{intro}</p>
        </Reveal>
      )}
      {children}
    </section>
  );
}
