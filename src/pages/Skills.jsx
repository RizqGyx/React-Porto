import React from "react";
import { useReducedMotion } from "framer-motion";
import PageTransition from "../motion/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import NextChapter from "../components/ui/NextChapter";
import MentalModel from "../components/skills/MentalModel";
import StaticSkills from "../components/skills/StaticSkills";
import useMediaQuery from "../motion/useMediaQuery";
import { media } from "../data/media";

export default function Skills() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const interactive = isDesktop && !reduce;

  return (
    <PageTransition>
      <PageHeader
        index="05"
        label="The Craft"
        lines={[{ text: "How I" }, { text: "connect it", dot: true }]}
        intro="A quiet map of my mental model. Hover a technology and watch the reasoning unfold — the tools it pulls in, and the projects it built."
      />

      {interactive ? <MentalModel /> : <StaticSkills />}

      <NextChapter label="Next chapter" title="Let's talk" to="/contact" image={media.contactTexture} cue="Get in touch" />
    </PageTransition>
  );
}
