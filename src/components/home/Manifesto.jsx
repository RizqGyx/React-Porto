import React from "react";
import { RevealText } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";
import { profile } from "../../data/profile";

export default function Manifesto() {
  return (
    <section className="shell py-28 md:py-40">
      <Chapter index="00" label="Manifesto" className="mb-10" />
      <p className="max-w-5xl font-display text-title font-medium leading-[1.15] text-ink">
        <RevealText text={profile.manifesto} stagger={0.015} />
      </p>
    </section>
  );
}
