# Setup Guide

Detailed instructions to clone, install, and run this portfolio project locally.

---

## Prerequisites

Ensure you have the following installed:

| Tool      | Minimum Version | Check Command    |
| --------- | --------------- | ---------------- |
| **Node.js** | v18.17.0+      | `node -v`        |
| **npm**     | v9.0.0+        | `npm -v`         |
| **Git**     | Any recent     | `git --version`  |

> **Tip:** We recommend using [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node.js versions.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Adrita12/next-portfolio.git
cd next-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages including:
- **Next.js 14** — React framework
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Animation library
- **Three.js / React Three Fiber** — 3D star background
- **Sharp** — Image optimization
- **React Icons & Heroicons** — Icon sets

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## Project Configuration

### Tailwind CSS
- Config: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Uses CSS custom properties for theme colors

### TypeScript
- Config: `tsconfig.json`
- Path aliases: `@/*` maps to project root

### Next.js
- Config: `next.config.mjs`
- Uses App Router (Next.js 14)
- Image optimization enabled via Sharp

---

## Customization

### Updating Skills
Edit `constants/index.ts` to add, remove, or reorder skills. Each skill entry has:
```ts
{
  skill_name: "React",
  Image: "/react.png",    // Place image in /public
  width: 80,
  height: 80,
}
```

### Updating Projects
Edit `components/main/Projects.tsx` to modify the project cards. Each `<ProjectCard>` takes:
- `src` — Image path (place in `/public`)
- `title` — Project name
- `description` — Short project description

### Updating Social Links
Edit `constants/index.ts` → `Socials` array for navbar social icons.
Edit `components/main/Footer.tsx` for footer links.

### Updating Resume Link
Edit `components/main/sub/HeroContent.tsx` and change the Google Drive URL in the `<motion.a>` tag.

---

## Troubleshooting

### `npm install` fails
- Ensure Node.js version is 18.17+ (`node -v`)
- Delete `node_modules` and `package-lock.json`, then re-run `npm install`

### Three.js / WebGL errors
- The 3D star background requires WebGL support
- If running in a browser without GPU acceleration, the stars may not render — this is expected in some CI/headless environments

### `sharp` module errors
- Sharp requires native binaries. If it fails to install:
  ```bash
  npm install --platform=win32 sharp   # Windows
  npm install --platform=linux sharp   # Linux
  npm install --platform=darwin sharp  # macOS
  ```

### Port 3000 already in use
```bash
# Use a different port
npx next dev -p 3001
```

### Fonts not loading
- Ensure `app/fonts/GeistVF.woff` exists
- The font is loaded via `next/font/local` in `app/layout.tsx`

---

## Deployment on Vercel

1. Push your repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `your-project.vercel.app`

No environment variables are required for this project.
