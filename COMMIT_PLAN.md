<!-- # Commit Plan — Portfolio Rebuild

Rencana upload bertahap ke GitHub: **satu branch per fitur**, commit dikelompokkan per hari
supaya history-nya rapi dan masuk akal seolah dikerjakan beberapa hari.

## Konvensi

- Branch: `feat/<area>` (atau `refactor/`, `chore/`).
- Pesan commit: [Conventional Commits](https://www.conventionalcommits.org) — `feat(scope): ...`, `refactor: ...`, `chore: ...`.
- Alur: kerjakan di branch → merge ke `main` pakai `--no-ff` (biar history per fitur kelihatan) → push.
- `node_modules/` dan `dist/` **tidak** di-commit (sudah di `.gitignore`).

> Catatan: tiap branch fokus per fitur. Aplikasi utuh & jalan (`npm run dev`) **setelah semua branch merge**.
> Kalau mau tiap hari langsung bisa `dev`, ubah urutan: kerjakan **Hari 3 (app shell)** paling akhir.

Cek posisi awal:

```bash
git status        # semua perubahan rebuild masih uncommitted di main
git branch        # pastikan di main
```

---

## Hari 1 — Fondasi: tooling, tema, data

```bash
git switch -c feat/foundation
```

**Commit 1 — dependency & config**

```bash
git add package.json package-lock.json vite.config.js tailwind.config.js
git commit -m "chore(config): upgrade to react-router + framer-motion 11 and update build config"
```

**Commit 2 — design tokens, base style, theme provider**

```bash
git add src/index.css src/main.jsx src/providers/ThemeProvider.jsx
git commit -m "feat(theme): add light/dark design tokens, base styles and theme provider"
```

**Commit 3 — data layer lokal**

```bash
git add src/data/projects.js src/data/profile.js src/data/skills.js \
        src/data/experience.js src/data/socials.js src/data/media.js src/data/nav.js
git commit -m "feat(data): add local content data layer (projects, profile, skills, experience)"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/foundation
git push origin main
```

---

## Hari 2 — Motion & UI primitives

```bash
git switch -c feat/motion-ui
```

**Commit 1 — motion primitives**

```bash
git add src/motion/
git commit -m "feat(motion): add reusable scroll & pointer motion primitives (reveal, magnetic, parallax, transitions)"
```

**Commit 2 — komponen UI berbagi**

```bash
git add src/components/ui/
git commit -m "feat(ui): add shared building blocks (chapter, page-header, marquee, cursor image, ambient/noise)"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/motion-ui
git push origin main
``` -->

<!-- --- -->

<!-- ## Hari 3 — App shell: router, nav, footer, loader

```bash
git switch -c feat/app-shell
```

**Commit 1 — hapus komponen single-page lama**

```bash
git add -A src/components/Card.jsx src/components/Contact.jsx src/components/Hero.jsx \
           src/components/Navbar.jsx src/components/Project.jsx \
           src/components/atoms src/components/molecules src/components/organisms
git commit -m "refactor: remove legacy single-page components"
```

**Commit 2 — shell aplikasi**

```bash
git add src/App.jsx src/routes/ src/components/layout/ src/components/system/
git commit -m "feat(shell): add router, navigation, footer, mobile menu and boot loader"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/app-shell
git push origin main
```

--- -->

<!-- ## Hari 4 — Halaman Home & About

```bash
git switch -c feat/home-about
```

**Commit 1 — Home**

```bash
git add src/pages/Home.jsx src/components/home/
git commit -m "feat(home): add landing page with hero, manifesto and featured work cards"
```

**Commit 2 — About**

```bash
git add src/pages/About.jsx src/components/about/
git commit -m "feat(about): add about page (intro, portrait, story, how I think)"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/home-about
git push origin main
```

--- -->

<!-- ## Hari 5 — Work & Project detail

```bash
git switch -c feat/work
```

**Commit 1 — Work (rotating gallery)**

```bash
git add src/pages/Work.jsx src/components/work/
git commit -m "feat(work): add work page with rotating project gallery"
```

**Commit 2 — Project detail (case study)**

```bash
git add src/pages/WorkDetail.jsx src/components/work-detail/
git commit -m "feat(work-detail): add project case-study page (overview, process, gallery, next)"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/work
git push origin main
```

--- -->

## Hari 6 — Experience & Skills

```bash
git switch -c feat/experience-skills
```

**Commit 1 — Experience (cinematic story)**

```bash
git add src/pages/Experience.jsx src/components/experience/
git commit -m "feat(experience): add pinned cinematic experience timeline"
```

**Commit 2 — Skills (mental-model interaktif)**

```bash
git add src/pages/Skills.jsx src/components/skills/ src/data/skillsGraph.js
git commit -m "feat(skills): add interactive mental-model skills section"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/experience-skills
git push origin main
```

---

## Hari 7 — Contact, 404 & finishing

```bash
git switch -c feat/contact-final
```

**Commit 1 — Contact**

```bash
git add src/pages/Contact.jsx src/components/contact/
git commit -m "feat(contact): add contact page with mailto form and details"
```

**Commit 2 — Halaman 404**

```bash
git add src/pages/NotFound.jsx
git commit -m "feat(404): add not-found page"
```

**Commit 3 — housekeeping (opsional)**

```bash
git add COMMIT_PLAN.md README.md
git commit -m "chore: update docs and browserslist database"
```

**Merge & push**

```bash
git switch main && git merge --no-ff feat/contact-final
git push origin main
```

---

## Verifikasi akhir

```bash
npm install
npm run build     # harus sukses tanpa error
npm run dev       # buka http://localhost:5173
git log --oneline --graph --all
```

## (Opsional) pakai Pull Request

Kalau mau lewat PR, ganti langkah "Merge & push" tiap hari dengan:

```bash
git push -u origin <nama-branch>
gh pr create --fill        # butuh GitHub CLI (gh)
gh pr merge --squash        # atau --merge untuk mempertahankan tiap commit
```
