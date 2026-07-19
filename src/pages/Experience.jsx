import React from "react";
import { useReducedMotion } from "framer-motion";
import PageTransition from "../motion/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import NextChapter from "../components/ui/NextChapter";
import ExperienceStory from "../components/experience/ExperienceStory";
import StackedStory from "../components/experience/StackedStory";
import useMediaQuery from "../motion/useMediaQuery";
import { experience } from "../data/experience";
import { media } from "../data/media";

export default function Experience() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const cinematic = isDesktop && !reduce;

  return (
    <PageTransition>
      <PageHeader
        index="04"
        label="The Path"
        lines={[{ text: "Experience" }]}
        intro={`The road so far — where I've studied, learned, and built.${
          cinematic ? " Scroll to move through each chapter." : ""
        }`}
      />

      {cinematic ? <ExperienceStory items={experience} /> : <StackedStory items={experience} />}

      <NextChapter
        label="Next chapter"
        title="The craft"
        to="/skills"
        image={media.aboutTexture}
        cue="See my skills"
      />
    </PageTransition>
  );
}
