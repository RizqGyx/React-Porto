import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../motion/PageTransition";
import { RevealText } from "../motion/Reveal";
import Magnetic from "../motion/Magnetic";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="shell flex min-h-[100svh] flex-col items-center justify-center text-center">
        <RevealText
          text="404"
          className="font-display text-hero font-bold leading-none text-ink"
          immediate
        />
        <p className="mt-6 max-w-md text-lead text-muted mb-12">
          You&apos;ve wandered off the map. This page doesn&apos;t exist in this
          world — yet.
        </p>
        <Magnetic>
          <Link
            to="/"
            data-cursor
            data-cursor-label="Home"
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-paper"
          >
            Take me home
          </Link>
        </Magnetic>
      </section>
    </PageTransition>
  );
}
