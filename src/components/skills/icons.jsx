import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiFlutter,
  SiVite,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const MAP = {
  js: SiJavascript,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  tailwind: SiTailwindcss,
  daisy: SiTailwindcss,
  framer: SiFramer,
  flutter: SiFlutter,
  vite: SiVite,
  git: SiGithub,
  vercel: SiVercel,
};

export default function SkillIcon({ id, className }) {
  const Icon = MAP[id];
  return Icon ? <Icon className={className} /> : null;
}
