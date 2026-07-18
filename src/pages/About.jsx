import React from "react";
import PageTransition from "../motion/PageTransition";
import NextChapter from "../components/ui/NextChapter";
import AboutIntro from "../components/about/AboutIntro";
import Portrait from "../components/about/Portrait";
import Story from "../components/about/Story";
import HowIThink from "../components/about/HowIThink";
import { media } from "../data/media";

export default function About() {
  return (
    <PageTransition>
      <AboutIntro />
      <Portrait />
      <Story />
      <HowIThink />
      <NextChapter label="Next chapter" title="The Work" to="/work" image={media.workBackdrop} cue="Explore projects" />
    </PageTransition>
  );
}
