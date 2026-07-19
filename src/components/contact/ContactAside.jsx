import React from "react";
import Magnetic from "../../motion/Magnetic";
import { profile } from "../../data/profile";

export default function ContactAside() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <p className="font-display text-2xl font-medium leading-tight text-ink">
        Open to freelance, collaborations &amp; interesting problems.
      </p>

      <div className="space-y-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Direct</p>
          <Magnetic>
            <a href={`mailto:${profile.email}`} data-cursor className="mt-2 inline-block font-display text-xl font-bold text-ink hover:text-accent">
              Email me →
            </a>
          </Magnetic>
        </div>
        <div className="flex gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Based in</p>
            <p className="mt-2 text-ink">{profile.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Code</p>
            <Magnetic>
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="mt-2 inline-block text-ink hover:text-accent"
              >
                GitHub ↗
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
