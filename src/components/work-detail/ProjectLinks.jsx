import React from "react";
import Magnetic from "../../motion/Magnetic";

export default function ProjectLinks({ links }) {
  return (
    <section className="shell py-16 flex flex-wrap gap-4">
      {links.live && (
        <Magnetic>
          <a href={links.live} target="_blank" rel="noopener noreferrer" data-cursor className="btn btn-primary">
            Live demo ↗
          </a>
        </Magnetic>
      )}
      {links.github && (
        <Magnetic>
          <a href={links.github} target="_blank" rel="noopener noreferrer" data-cursor className="btn btn-ghost">
            GitHub ↗
          </a>
        </Magnetic>
      )}
    </section>
  );
}
