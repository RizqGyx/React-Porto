import React from "react";
import { useReducedMotion } from "framer-motion";
import PageTransition from "../motion/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import NextChapter from "../components/ui/NextChapter";
import RotatingGallery from "../components/work/RotatingGallery";
import GalleryCard from "../components/work/GalleryCard";
import useMediaQuery from "../motion/useMediaQuery";
import { projects } from "../data/projects";
import { media } from "../data/media";

export default function Work() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const orbit = isDesktop && !reduce;

  return (
    <PageTransition>
      <PageHeader
        index="03"
        label="The Work"
        lines={[{ text: "Selected" }, { text: "projects", dot: true }]}
        intro="A slow carousel of things I've designed and built. Hover to pause the orbit, click any piece to dive in."
      />

      {orbit ? (
        <RotatingGallery />
      ) : (
        <section className="shell grid grid-cols-1 gap-5 py-10 sm:grid-cols-2">
          {projects.map((p) => (
            <GalleryCard key={p.slug} project={p} />
          ))}
        </section>
      )}

      <NextChapter label="Next chapter" title="Experience" to="/experience" image={media.workBackdrop} cue="See the path" />
    </PageTransition>
  );
}
