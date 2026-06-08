# Alwin Baby — Portfolio

Personal portfolio showcasing full-stack development, AI-powered products, and production-grade web engineering.

**Live site:** https://portfolio-lilac-seven-7f18tmp05l.vercel.app(https://github.com/Alwin-385/Portfolio)

---

## Overview

A cinematic, performance-focused portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Content is data-driven, animations respect `prefers-reduced-motion`, and each project includes a dedicated case study with screenshots, tech stack, and honest scope notes.

**Featured work:** IntervAI · CivicPulse · Smart Inventory Dashboard · Questlytics

---

## Features

- **Single-page experience** — Hero, About, Projects, Experience, Skills, Current Focus, Resume, Contact
- **Project case studies** — Dynamic routes at `/projects/[slug]` with galleries and deployment links
- **Motion system** — Framer Motion (`motion/react`) with shared tokens, scroll reveals, and reduced-motion fallbacks
- **Smooth scrolling** — Lenis with accessible skip links and keyboard-friendly navigation
- **Resume & credentials** — PDF preview, education, highlights, and verifiable certificates
- **SEO** — Metadata, Open Graph, JSON-LD, sitemap, and robots.txt

---

## Tech Stack

| Layer | Technologies |
|-------|----------------|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS design tokens, shadcn/ui |
| **Animation** | Motion (Framer Motion), Lenis |
| **Icons** | Lucide React |
| **Deploy** | Vercel (recommended) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
git clone https://github.com/Alwin-385/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── animations/       # Motion variants & tokens
├── components/       # UI, navigation, layout, providers
├── data/             # Site content (projects, experience, skills, etc.)
├── hooks/            # Shared React hooks
├── lib/              # Utilities, SEO, fonts
├── sections/         # Page sections (hero, about, projects, …)
└── styles/           # Global CSS & theme tokens
public/
├── projects/         # Project screenshots
├── certificates/     # Internship & course certificates
└── RESUME.pdf
```

Content lives in `src/data/` — update copy, projects, and experience there without touching layout code.

---

## Environment Variables

Optional — set in Vercel or `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO & sitemap (e.g. `https://your-name.vercel.app`) |

---

## Deploy

1. Push this repo to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Set **Production Branch** to `main`
4. Add `NEXT_PUBLIC_SITE_URL` with your deployed URL
5. Redeploy

---

## Contact

**Alwin Baby** — Full-Stack Developer · AI Applications

- Email: [alwinbaby385@gmail.com](mailto:alwinbaby385@gmail.com)
- GitHub: [@Alwin-385](https://github.com/Alwin-385)
- LinkedIn: [alwin-baby](https://www.linkedin.com/in/alwin-baby-a4a947297)

---

## License

This project is open source for portfolio and learning purposes. Please do not reuse personal content (bio, resume, certificates) without permission.
