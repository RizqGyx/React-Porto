import React, { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  once = true,
  immediate = false,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.2 });
  const show = reduce || immediate || inView;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  once = true,
  immediate = false,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.3 });
  const show = immediate || inView;

  if (reduce) return <span className={className}>{text}</span>;

  const words = String(text).split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: "0.25em", paddingBottom: "0.14em" }}
        >
          <motion.span
            className={`inline-block ${wordClassName || ""}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={show ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default Reveal;
