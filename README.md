# Berzki — Interactive Portfolio

An immersive, multi-page developer portfolio built as a cinematic experience rather than a résumé. Every page has its own identity — motion-driven storytelling, a custom cursor, page transitions, and interactive sections — while staying fast, responsive, and accessible.

**Live:** [berzkireact.vercel.app](https://berzkireact.vercel.app) · **By:** Muhammad Rizki ([@RizqGyx](https://github.com/RizqGyx))

---

## ✨ Features

- **Cinematic loader** — brand logo fills with color like liquid, with cycling multilingual greetings.
- **Custom cursor** — brand-logo cursor with a magnetic ring that reacts to interactive elements.
- **Animated page transitions** — a "stairs" curtain sweep between routes (`AnimatePresence`).
- **Home** — parallax hero, manifesto, marquee, and sticky **stacked project cards** with 3D tilt.
- **About** — chapter-based storytelling with a parallax portrait and a "how I think" grid.
- **Work** — a continuously **rotating elliptical gallery** of projects (hover to pause), plus full case-study detail pages.
- **Experience** — a pinned, **full-bleed cinematic timeline** that crossfades through each chapter as you scroll.
- **Skills** — an interactive **"mental model"**: a calm constellation where hovering a technology draws its connections, reveals related tools, and surfaces the projects that use it.
- **Contact** — a distraction-free form that opens the visitor's own mail client (no data collection).
- **Light & dark themes** — token-driven, respects OS preference.
- **Accessible & performant** — reduced-motion fallbacks, keyboard-friendly, GPU-friendly transforms, lazy-loaded routes.

## 🛠️ Tech Stack

| Area | Tech |
|---|---|
| Framework | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) (CSS-variable design tokens) |
| Animation | [Framer Motion](https://www.framer.com/motion/) + custom rAF physics |
| Routing | [React Router v6](https://reactrouter.com) (lazy-loaded pages) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Type | Space Grotesk (display) · Roboto (body) |

No 3D/WebGL library — all depth, parallax, and physics effects are done with CSS transforms + Framer Motion for performance.

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone
git clone https://github.com/RizqGyx/React-Porto.git
cd React-Porto

# 2. Install
npm install

# 3. Run the dev server
npm run dev          # http://localhost:5173
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├─ App.jsx                 # Providers, cursor, loader, nav, routes, footer
├─ main.jsx                # Entry + font
├─ index.css               # Design tokens, base styles, utility classes
├─ data/                   # All content lives here (edit to update the site)
│  ├─ profile.js           # Name, bio, roles, stats
│  ├─ projects.js          # Projects + case-study details
│  ├─ experience.js        # Timeline entries (+ photos)
│  ├─ skills.js / skillsGraph.js
│  ├─ socials.js · media.js · nav.js
├─ providers/              # ThemeProvider (light/dark)
├─ motion/                 # Reusable motion primitives (Reveal, Magnetic, Parallax, Tilt, PageTransition, CustomCursor)
├─ routes/                 # Lazy-loaded route definitions + transitions
├─ pages/                  # One file per route (thin composition)
└─ components/
   ├─ layout/  system/  ui/    # Shell + shared building blocks
   └─ home/ about/ work/ work-detail/ experience/ skills/ contact/   # Per-page sections
```

## ✏️ Customizing Content

The site is **data-driven** — no CMS required. To make it yours, edit the files in [`src/data/`](src/data):

- **`profile.js`** — your name, bio, roles, email, and location.
- **`projects.js`** — add/edit projects (title, tech, links, cover image, and optional case-study fields).
- **`experience.js`** — timeline entries; put photos in `public/` and reference them (e.g. `image: "/UPNVJ.jpg"`).
- **`skills.js` / `skillsGraph.js`** — your skills and how they connect.
- **`socials.js`** — public links (GitHub, etc.).

Design tokens (colors, fonts, spacing) live in [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js).

## ♿ Accessibility & Performance

- Honors `prefers-reduced-motion` (heavy interactions fall back to static, readable layouts).
- Keyboard-navigable, with semantic landmarks and focus states.
- Route-level code splitting and lazy loading.
- Interactive sections (rotating gallery, skills field) pause when off-screen via `IntersectionObserver`.
