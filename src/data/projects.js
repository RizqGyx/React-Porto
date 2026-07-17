const GALLERY_DUMMY = ["/P1.png", "/P2.png", "/P3.png"];

export const projects = [
  {
    slug: "mixue-website",
    title: "Mixue Website",
    summary:
      "Developed a web-based online store application using HTML, CSS, and JavaScript, aimed at facilitating customers in accessing comprehensive information about Mixue. The application provided an intuitive interface for users to explore and gather details about Mixue's products and services.",
    category: "Web",
    year: 2023,
    role: "Frontend Developer",
    tagline: "A sweet, fast storefront for a beloved dessert brand.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: {
      github: "https://github.com/RizqGyx/Mixue-Clone",
      live: "https://mixue-clone.vercel.app",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/Mixue.png?updatedAt=1740098621747",
    },
    problem:
      "Customers had no single, mobile-friendly place to browse the full Mixue menu and brand story — information was scattered across social posts and third-party apps.",
    solution:
      "A lightweight, hand-built storefront in vanilla HTML/CSS/JS that loads instantly and presents the products, pricing, and brand identity in one intuitive, scroll-friendly layout.",
    architecture:
      "Static, framework-free site. Semantic HTML sections, a shared CSS design system with custom properties, and small vanilla-JS modules for the interactive menu and navigation. Deployed on Vercel's edge.",
    challenges: [
      "Recreating the playful brand feel with zero UI libraries.",
      "Keeping the layout crisp from small phones up to desktop.",
      "Structuring product data so new items are trivial to add.",
    ],
    process: [
      { title: "Research", text: "Studied the brand's tone, colors, and menu structure."},
      { title: "Wireframe", text: "Sketched a mobile-first flow from hero to menu to footer."},
      { title: "Build", text: "Wrote semantic markup and a reusable CSS system by hand."},
      { title: "Ship", text: "Optimised assets and deployed to Vercel."},
    ],
    lessons: [
      "You can get remarkably far with well-structured vanilla CSS.",
      "A tight design system pays off even on a small project.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio",
    summary:
      "This portfolio project is an interactive website built using cutting-edge technologies, including React.js, Tailwind CSS, and React Motion. With an elegant design touch, the project allows users to easily explore an individual's portfolio.",
    category: "Web",
    year: 2024,
    role: "Designer & Developer",
    tagline: "An interactive portfolio that feels like an experience.",
    tech: ["React.js", "Tailwind", "Framer Motion", "Vercel"],
    links: {
      github: "https://github.com/RizqGyx/React-Porto",
      live: "https://berzkireact.vercel.app",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/Portfolio.png?updatedAt=1740098408414",
    },
    problem:
      "A static résumé couldn't communicate craft or personality — it read like a document, not like the work itself.",
    solution:
      "A componentised React site with motion-driven reveals and a clear narrative, turning the portfolio into something visitors explore rather than skim.",
    architecture:
      "React + Vite with an atomic component structure, Tailwind design tokens, and Framer Motion for entrance and scroll animations. Content is data-driven for easy updates.",
    challenges: [
      "Balancing rich motion with performance.",
      "Keeping the component library consistent as it grew.",
    ],
    process: [
      { title: "Define", text: "Mapped the story a visitor should walk through."},
      { title: "System", text: "Built reusable atoms, molecules, and organisms."},
      { title: "Motion", text: "Layered in Framer Motion reveals and transitions."},
    ],
    lessons: [
      "Motion is communication — used sparingly it elevates everything.",
      "A component system makes iteration fearless.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "western-corner",
    title: "Western Corner",
    summary:
      "Creating a web-based online store application aimed at assisting store customers in accessing information about a Western Store. The application will be built using React.js (React-dom) and Tailwind CSS (leveraging Daisy UI as the Framework), with data stored from a JSON file.",
    category: "Web",
    year: 2023,
    role: "Frontend Developer",
    tagline: "A React storefront powered by local JSON data.",
    tech: ["React.js", "Tailwind", "Daisy UI", "Vercel"],
    links: {
      github: "https://github.com/RizqGyx/Restaurant-react",
      live: "https://westcorner-restaurant.vercel.app",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/WesternCorner.png?updatedAt=1740098802575",
    },
    problem:
      "The store needed a fast catalogue experience without standing up a backend or database.",
    solution:
      "A React SPA that reads its catalogue from a structured JSON file and renders it through reusable, Daisy-UI-styled components.",
    architecture:
      "React (react-dom) + Tailwind/Daisy UI. Menu data lives in a JSON file consumed by list and card components; state handled with hooks. Deployed on Vercel.",
    challenges: [
      "Designing a data shape flexible enough for future menu changes.",
      "Composing Daisy UI without it looking templated.",
    ],
    process: [
      { title: "Model", text: "Designed the JSON schema for products."},
      { title: "Compose", text: "Built card and list components around it."},
      { title: "Polish", text: "Tuned spacing, states, and responsiveness."},
    ],
    lessons: [
      "Local JSON is a great stand-in for a real API while prototyping.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "detikcom-test",
    title: "Detikcom Test",
    summary:
      "Developed a responsive, modern, and engaging landing page as part of an internship test at Detikcom, utilizing HTML, CSS, and JavaScript exclusively. The result was a visually appealing and user-friendly landing page designed to captivate and engage visitors effectively.",
    category: "Web",
    year: 2023,
    role: "Frontend (Assessment)",
    tagline: "A pixel-faithful landing page under assessment constraints.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: {
      github:
        "https://github.com/RizqGyx/Detikcom_FrontendDesignAssignment_MuhammadRizki",
      live: "",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/Detikcom.png?updatedAt=1740098272964",
    },
    problem:
      "An internship assessment: rebuild a modern, engaging landing page using only HTML, CSS, and JavaScript — no frameworks allowed.",
    solution:
      "A responsive, hand-coded landing page that matches the brief closely while staying accessible and fast.",
    architecture:
      "Pure HTML/CSS/JS. Mobile-first layout, CSS grid/flex composition, and small JS for interactivity.",
    challenges: [
      "Meeting a design spec precisely without utility frameworks.",
      "Delivering within a fixed assessment timebox.",
    ],
    process: [
      { title: "Analyse", text: "Broke the reference design into sections."},
      { title: "Implement", text: "Built each section responsively by hand."},
      { title: "Review", text: "Checked against the spec on multiple screens."},
    ],
    lessons: [
      "Constraints sharpen fundamentals.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "simple-bookshelf",
    title: "Simple Bookshelf",
    summary:
      "A web application developed using HTML, Tailwind CSS (Daisy UI as Framework), and JavaScript. It offers users the capability to maintain a book list, along with the functionality to mark books as 'read' or 'unread.' Additionally, users can dynamically add new book data to the bookshelf, enabling them to organize their reading progress.",
    category: "Web",
    year: 2023,
    role: "Developer",
    tagline: "Track your reading, right in the browser.",
    tech: ["HTML", "Tailwind", "Daisy UI", "JavaScript", "Vercel"],
    links: {
      github: "https://github.com/RizqGyx/Bookshelf",
      live: "https://bookshelf-vanilla.vercel.app",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/Bookshelf.png?updatedAt=1740098921288",
    },
    problem:
      "Readers wanted a dead-simple way to track which books they've finished — without an account or install.",
    solution:
      "A browser app that lets users add books and toggle them between 'read' and 'unread', persisting state locally.",
    architecture:
      "HTML + Tailwind/Daisy UI with vanilla-JS state management and localStorage persistence.",
    challenges: [
      "Keeping state and the DOM in sync without a framework.",
      "Designing an add/move/delete flow that feels effortless.",
    ],
    process: [
      { title: "Sketch", text: "Defined the read/unread interaction model."},
      { title: "Build", text: "Implemented CRUD with localStorage."},
      { title: "Refine", text: "Polished empty states and feedback."},
    ],
    lessons: [
      "localStorage turns a static page into a real little app.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "simple-react-note",
    title: "Simple React Note",
    summary:
      "A React-based web application utilizing Tailwind CSS (Daisy UI Framework) for styling. It incorporates a dummy data storage system from a JSON file, presenting this data as the default view upon initialization. Users have the ability to add new notes dynamically. Additionally, they can mark these notes as 'done' or 'undone'.",
    category: "Web",
    year: 2024,
    role: "Developer",
    tagline: "A tidy note app built the React way.",
    tech: ["React.js", "Tailwind", "Daisy UI", "Vercel"],
    links: {
      github: "https://github.com/RizqGyx/note-app-react",
      live: "https://noteapp-react-six.vercel.app",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/ReactNote.png?updatedAt=1740098901372",
    },
    problem:
      "A hands-on exercise in React state: manage a list of notes that can be created and toggled between done and undone.",
    solution:
      "A React app seeded from JSON that lets users add notes and flip their status, all driven cleanly through component state.",
    architecture:
      "React + Tailwind/Daisy UI. Initial notes loaded from JSON into state; add and toggle handled via hooks and immutable updates.",
    challenges: [
      "Modelling note status transitions cleanly.",
      "Keeping components small and focused.",
    ],
    process: [
      { title: "Seed", text: "Loaded default notes from JSON."},
      { title: "State", text: "Wired add and done/undone with hooks."},
      { title: "Style", text: "Applied a clean Daisy UI look."},
    ],
    lessons: [
      "Immutable state updates keep React predictable.",
    ],
    gallery: GALLERY_DUMMY,
  },
  {
    slug: "flutter-todo",
    title: "Flutter To-Do",
    summary:
      "This Todo project is a mobile application developed using Flutter, a cross-platform app development framework. The application is designed to assist users in managing their task lists easily. Users can add, edit, and delete tasks, as well as mark tasks as completed. With a simple and efficient user interface, this application helps users stay organized in their daily lives.",
    category: "Mobile",
    year: 2024,
    role: "Mobile Developer",
    tagline: "A cross-platform task manager, built with Flutter.",
    tech: ["Flutter"],
    links: {
      github: "https://github.com/RizqGyx/Flutter-Todo",
      live: "",
    },
    images: {
      cover:
        "https://ik.imagekit.io/tqc2kmfpu/TodoFlutter.jpg?updatedAt=1740099137663",
    },
    problem:
      "People needed a simple, distraction-free task manager that works the same on Android and iOS.",
    solution:
      "A Flutter app with full add/edit/delete/complete task flows and a clean, efficient UI from a single codebase.",
    architecture:
      "Flutter widget tree with stateful task management, reusable list-item widgets, and a minimal, responsive layout.",
    challenges: [
      "Learning Flutter's widget and state model.",
      "Designing an efficient interface for quick task entry.",
    ],
    process: [
      { title: "Learn", text: "Explored Flutter widgets and layout."},
      { title: "Build", text: "Implemented the task CRUD flows."},
      { title: "Refine", text: "Simplified the UI for daily use."},
    ],
    lessons: [
      "One codebase, two platforms — Flutter is a real productivity win.",
    ],
    gallery: GALLERY_DUMMY,
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug) || null;

export const getAdjacentProjects = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null};
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};

export default projects;
