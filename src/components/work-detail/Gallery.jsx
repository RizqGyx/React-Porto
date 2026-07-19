import React from "react";
import { Reveal } from "../../motion/Reveal";
import Chapter from "../ui/Chapter";

export default function Gallery({ index, images, title }) {
  if (!images?.length) return null;
  return (
    <section className="shell py-16">
      <Chapter index={index} label="Gallery" className="mb-10" />
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((src, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="overflow-hidden rounded-2xl border border-line/10">
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
