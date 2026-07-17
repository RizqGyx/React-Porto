import { media} from "./media";

export const experience = [
  {
    kind: "education",
    role: "Undergraduate, Informatics / Computer Science",
    org: "UPN Veteran Jakarta",
    start: "2021",
    end: "Present",
    status: "Final semester",
    detail:
      "Undergraduate studies in Computer Science, focusing on software engineering and fullstack development.",
    image: media.heroAbstract,
  },
  {
    kind: "education",
    role: "Fullstack Web Development Program",
    org: "Binar Academy",
    start: "2023",
    end: "2024",
    status: null,
    detail:
      "Intensive fullstack web development bootcamp covering modern JavaScript, React, and backend fundamentals.",
    image: media.aboutTexture,
  },
  {
    kind: "work",
    role: "Frontend Developer (Freelance)",
    org: "Independent Projects",
    start: "2023",
    end: "Present",
    status: null,
    detail:
      "Designing and building responsive web apps for small clients and personal briefs using React, Tailwind, and Framer Motion.",
    image: media.workBackdrop,
  },
  {
    kind: "activity",
    role: "Frontend Assessment",
    org: "Detikcom",
    start: "2023",
    end: "2023",
    status: null,
    detail:
      "Completed a frontend design assignment: a responsive, hand-coded landing page built with HTML, CSS, and JavaScript.",
    image: media.contactTexture,
  },
];

export default experience;
