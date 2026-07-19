import { projects } from "./projects";

const defs = [
  { id: "js", name: "JavaScript", group: "Language", level: 88, years: 4, match: ["JavaScript"] },
  { id: "html", name: "HTML", group: "Frontend", level: 95, years: 4, match: ["HTML"] },
  { id: "css", name: "CSS", group: "Frontend", level: 90, years: 4, match: ["CSS"] },
  { id: "react", name: "React.js", group: "Frontend", level: 85, years: 3, match: ["React.js"] },
  { id: "tailwind", name: "Tailwind CSS", group: "Frontend", level: 90, years: 3, match: ["Tailwind"] },
  { id: "daisy", name: "Daisy UI", group: "Frontend", level: 75, years: 2, match: ["Daisy UI"] },
  { id: "framer", name: "Framer Motion", group: "Frontend", level: 78, years: 2, match: ["Framer Motion"] },
  { id: "flutter", name: "Flutter", group: "Mobile", level: 70, years: 2, match: ["Flutter"] },
  { id: "vite", name: "Vite", group: "Tooling", level: 80, years: 3, match: ["Vite"] },
  { id: "git", name: "Git & GitHub", group: "Tooling", level: 85, years: 4, match: [] },
  { id: "vercel", name: "Vercel", group: "Tooling", level: 85, years: 3, match: ["Vercel"] },
];

export const skillNodes = defs.map((d) => ({
  ...d,
  projects: projects.filter((p) => d.match.some((m) => p.tech.includes(m))).map((p) => p.title),
}));

export const skillEdges = [
  ["html", "css"],
  ["html", "js"],
  ["css", "js"],
  ["css", "tailwind"],
  ["js", "react"],
  ["react", "tailwind"],
  ["react", "framer"],
  ["tailwind", "daisy"],
  ["react", "vite"],
  ["js", "vite"],
  ["vite", "vercel"],
  ["git", "vercel"],
  ["react", "git"],
  ["flutter", "git"],
];

export const neighborsOf = (id) => {
  const set = new Set();
  skillEdges.forEach(([a, b]) => {
    if (a === id) set.add(b);
    if (b === id) set.add(a);
  });
  return set;
};
