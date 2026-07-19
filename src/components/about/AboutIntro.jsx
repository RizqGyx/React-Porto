import React from "react";
import { Reveal, RevealText } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";
import { profile } from "../../data/profile";

export default function AboutIntro() {
  return (
    <section className="shell pt-36 md:pt-44">
      <Chapter index="01" label="Who I am" />
      <h1 className="mt-8 font-display font-bold leading-[0.92] text-ink">
        <RevealText text="I design & build" className="block text-display" immediate />
        <RevealText text="things for the" className="block text-display" delay={0.1} immediate />
        <span className="block text-display">
          <RevealText text="web." className="text-display" delay={0.2} immediate />
          <span className="text-accent">▲</span>
        </span>
      </h1>
      <Reveal delay={0.3} immediate className="mt-10 max-w-2xl">
        <p className="text-lead text-muted">{profile.manifesto}</p>
      </Reveal>
    </section>
  );
}
