import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Reveal, RevealText } from "../../motion/Reveal";
import Magnetic from "../../motion/Magnetic";
import { profile } from "../../data/profile";
import { media } from "../../data/media";

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const roleSequence = profile.roles.flatMap((r) => [r, 1800]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <motion.div
        aria-hidden
        style={{ y: imgY, scale: imgScale }}
        className="absolute right-0 top-0 hidden h-full w-1/2 lg:block"
      >
        <img src={media.heroAbstract} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper/60 to-transparent" />
      </motion.div>

      <motion.div style={{ y }} className="shell relative z-10">
        <Reveal immediate>
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            {profile.location} — Portfolio ’25
          </span>
        </Reveal>

        <h1 className="mt-6 font-display font-bold leading-[0.88] text-ink">
          <RevealText text="Creative" className="block text-hero" delay={0.1} immediate />
          <span className="block">
            <RevealText text="Berzki" className="text-hero text-accent" delay={0.2} immediate />
            <span className="text-accent">.</span>
          </span>
        </h1>

        <div className="mt-10 flex max-w-2xl flex-col gap-8">
          <Reveal delay={0.4} immediate>
            <p className="text-lead text-muted">{profile.tagline}</p>
            <p className="mt-4 text-lg text-ink">
              I&apos;m a{" "}
              <TypeAnimation
                sequence={roleSequence}
                speed={30}
                wrapper="span"
                repeat={Infinity}
                className="font-semibold text-accent"
              />
            </p>
          </Reveal>

          <Reveal delay={0.5} immediate className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link to="/work" data-cursor data-cursor-label="Explore" className="btn btn-primary">
                View the work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/contact" data-cursor className="btn btn-ghost">
                Get in touch
              </Link>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.3} immediate className="lg:hidden">
            <div className="overflow-hidden rounded-2xl border border-line/10">
              <img src={media.heroAbstract} alt="" className="h-56 w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </motion.div>

      {!reduce && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Scroll
        </motion.div>
      )}
    </section>
  );
}
