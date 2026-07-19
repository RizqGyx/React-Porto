import React from "react";
import PageTransition from "../motion/PageTransition";
import Marquee from "../components/ui/Marquee";
import NextChapter from "../components/ui/NextChapter";
import Hero from "../components/home/Hero";
import Manifesto from "../components/home/Manifesto";
import FeaturedWork from "../components/home/FeaturedWork";
import { media } from "../data/media";

const WORDS = ["Design", "Develop", "Build", "Ship", "Interact", "Craft"];

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Manifesto />
      <Marquee
        className="border-y border-line/10 py-6"
        items={WORDS}
        renderItem={(w) => (
          <span className="font-display text-4xl font-bold uppercase text-ink/25 md:text-6xl">
            {w} <span className="text-accent">✦</span>
          </span>
        )}
      />
      <FeaturedWork />
      <NextChapter label="The full story" title="About me" to="/about" image={media.aboutTexture} cue="Read on" />
    </PageTransition>
  );
}
