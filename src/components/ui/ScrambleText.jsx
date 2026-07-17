import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}=+*^?#·:";

export default function ScrambleText({
  text,
  className,
  as: Tag = "span",
  duration = 900,
  hover = true,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  const run = () => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      run();
    }
    return () => cancelAnimationFrame(rafRef.current);

  }, [inView]);

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseEnter={hover ? run : undefined}
      style={{ display: "inline-block" }}
    >
      {display}
    </Tag>
  );
}
