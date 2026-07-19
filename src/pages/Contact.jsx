import React from "react";
import PageTransition from "../motion/PageTransition";
import { Reveal, RevealText } from "../motion/Reveal";
import Chapter from "../components/ui/Chapter";
import ScrambleText from "../components/ui/ScrambleText";
import Marquee from "../components/ui/Marquee";
import ContactForm from "../components/contact/ContactForm";
import ContactAside from "../components/contact/ContactAside";

export default function Contact() {
  return (
    <PageTransition>
      <section className="shell flex min-h-screen flex-col pb-24 pt-36 md:pt-44">
        <Chapter index="06" label="Connect" />

        <h1 className="mt-10 font-display font-bold leading-[0.88] text-ink">
          <RevealText text="Let's make" className="block text-hero" immediate />
          <span className="block text-hero">
            <RevealText text="something" className="text-hero" delay={0.08} immediate />{" "}
            <RevealText text="great" className="text-hero text-accent" delay={0.16} immediate />
            <span className="text-accent">.</span>
          </span>
        </h1>

        <Reveal delay={0.25} immediate className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/15 px-4 py-2 text-sm font-medium text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </span>
          <p className="max-w-md text-muted">
            Got a project or an idea? Send a note — it opens straight in your own email app, so you stay in control.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactAside />
          </Reveal>
        </div>

        <Marquee
          className="mt-auto pt-20"
          items={Array.from({ length: 8 })}
          renderItem={() => (
            <ScrambleText
              text="LET'S TALK ✦ OPEN TO WORK ✦"
              className="font-display text-3xl font-bold uppercase text-ink/15 md:text-5xl"
            />
          )}
        />
      </section>
    </PageTransition>
  );
}
