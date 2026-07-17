import React from "react";
import { Link } from "react-router-dom";
import { activeSocials } from "../../data/socials";
import { profile } from "../../data/profile";
import Magnetic from "../../motion/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/10 bg-paper">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link to="/" data-cursor className="font-display text-lg font-bold text-ink">
          {profile.displayName}
          <span className="text-accent">.</span>
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          <Magnetic>
            <Link to="/contact" data-cursor className="text-sm font-medium text-ink hover:text-accent">
              Contact
            </Link>
          </Magnetic>
          {activeSocials.map((s) => (
            <Magnetic key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                {s.name}
              </a>
            </Magnetic>
          ))}
        </div>

        <p className="text-xs text-muted">
          © {year} {profile.displayName}. Built with React &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
