export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 85},
      { name: "JavaScript", level: 88},
      { name: "HTML", level: 95},
      { name: "CSS", level: 90},
      { name: "Tailwind CSS", level: 90},
      { name: "Daisy UI", level: 75},
      { name: "Framer Motion", level: 78},
    ],
  },
  {
    title: "Mobile",
    skills: [{ name: "Flutter", level: 70}],
  },
  {
    title: "Tooling & Deploy",
    skills: [
      { name: "Vite", level: 80},
      { name: "Git & GitHub", level: 85},
      { name: "Vercel", level: 85},
    ],
  },
];

export const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => s.name));

export default skillGroups;
