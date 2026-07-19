import React from "react";

export default function Marquee({
  items,
  renderItem,
  vertical = false,
  duration = 30,
  reverse = false,
  gapClass = "gap-8",
  pauseOnHover = false,
  decorative = true,
  className = "",
  itemClass = "",
}) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden ${pauseOnHover ? "group" : ""} ${className}`}>
      <div
        className={`flex w-max ${vertical ? "flex-col" : "flex-row"} ${gapClass} ${
          vertical ? "animate-marquee-y" : "animate-marquee"
        } will-change-transform motion-reduce:animate-none ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
        aria-hidden={decorative}
      >
        {loop.map((item, i) => (
          <div key={i} className={itemClass}>
            {renderItem(item, i % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
}
