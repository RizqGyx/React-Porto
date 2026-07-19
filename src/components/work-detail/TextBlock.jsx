import React from "react";
import Chapter from "../ui/Chapter";

export default function TextBlock({ index, label, title, children }) {
  if (!children) return null;
  return (
    <section className="shell py-16 grid gap-8 md:grid-cols-[1fr_2fr]">
      <div>
        <Chapter index={index} label={label} />
        {title && <h2 className="mt-4 font-display text-title font-bold text-ink">{title}</h2>}
      </div>
      <div className="text-lead text-muted">{children}</div>
    </section>
  );
}
