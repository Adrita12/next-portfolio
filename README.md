# 🚀 Adrita's Portfolio

A modern, space-themed developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Three.js**. Features smooth animations, a 3D star background, and a fully responsive design that works across all devices.

---

## ✨ Features

- **Space Theme** — Animated blackhole video background, rotating 3D star canvas, and cosmic color palette
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewports
- **Smooth Animations** — Slide-in effects, opacity transitions, and scroll-based reveals using Framer Motion
- **Interactive Navbar** — Desktop navigation pills and mobile hamburger menu
- **Skills Showcase** — Animated icon grid organized by category (Frontend, Backend, Other)
- **Project Cards** — Responsive project gallery with images and descriptions
- **Performance & Security Section** — Animated lock interaction with background video effects
- **Footer** — Social links and contact information
- **Vercel Analytics** — Built-in analytics integration

---

## 🛠 Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| **Framework**  | Next.js 14 (App Router)             |
| **Language**   | TypeScript                          |
| **Styling**    | Tailwind CSS 3.4                    |
| **Animations** | Framer Motion                       |
| **3D**         | Three.js, React Three Fiber / Drei  |
| **Icons**      | Heroicons, React Icons              |
| **Images**     | Next.js Image Optimization + Sharp  |
| **Analytics**  | Vercel Analytics                    |
| **Deployment** | Vercel                              |

---

## 📁 Project Structure

```
next-portfolio/
├── app/
│   ├── fonts/             # Local Geist font files
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout (Navbar, Footer, StarBackground)
│   └── page.tsx           # Home page (Hero, Skills, Encryption, Projects)
├── components/
│   └── main/
│       ├── sub/
│       │   ├── HeroContent.tsx      # Hero section content and CTA
│       │   ├── ProjectCard.tsx      # Individual project card
│       │   ├── SkillDataProvider.tsx # Animated skill icon
│       │   └── SkillText.tsx        # Skills section header text
│       ├── Encryption.tsx   # Performance & Security section
│       ├── Footer.tsx       # Footer with social links
│       ├── Hero.tsx         # Hero wrapper with video background
│       ├── Navbar.tsx       # Navigation bar with mobile menu
│       ├── Projects.tsx     # Projects section
│       ├── Skills.tsx       # Skills grid section
│       └── StarBackground.tsx # Three.js star particle background
├── constants/
│   └── index.ts           # Skill data arrays and social link config
├── utils/
│   └── motion.ts          # Framer Motion animation variants
├── public/                # Static assets (images, videos, SVGs)
├── tailwind.config.ts     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Adrita12/next-portfolio.git
cd next-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> For detailed setup instructions, environment requirements, and troubleshooting, see [SETUP.md](./SETUP.md).

---

## 📦 Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Create production build            |
| `npm run start` | Start production server            |
| `npm run lint`  | Run ESLint                         |

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push your code to a GitHub repository
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Alternatively, build locally:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is open source and available for personal use and learning.

---

**Built with ❤️ by Adrita Bhattacharjee**
