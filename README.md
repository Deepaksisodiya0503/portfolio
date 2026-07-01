# Deepak Sisodiya — Portfolio

Personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Features a dark/light theme toggle and sections for projects, skills, experience, education, and certifications.

🌐 **Live:** [portfolio.vercel.app](https://portfolio.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (dark mode)
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono (via `next/font`)
- **Deployment:** Vercel

---

## Sections

- **Hero** — Typing animation, social links (GitHub, LinkedIn, Email, Phone)
- **About** — Brief intro and key highlights
- **Skills** — Programming, Embedded/IoT, ML, Databases, Networking, Coursework
- **Projects** — Smart Home Controller, College Web Portal, Pan-Tilt Camera, Greenhouse Automation
- **Experience** — IoT Engineer Intern at Vibe6 Digital LLP
- **Education** — Integrated M.Tech IoT at DAVV (CGPA 8.4), Jawahar Navodaya Vidhyalaya
- **Certifications** — IoT Product Development (UpSys & DAVV), PLC & Factory Automation (Mitsubishi Electric)
- **Contact** — Email, Phone, LinkedIn, GitHub, Location

---

## Run Locally

```bash
git clone https://github.com/Deepaksisodiya0503/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
deepak-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + theme provider
│   ├── page.tsx          # Main page (imports all sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx        # Sticky nav + dark/light toggle
│   ├── Hero.tsx          # Typing animation hero section
│   ├── About.tsx         # About me + highlights
│   ├── Skills.tsx        # Skills by category
│   ├── Projects.tsx      # Project cards
│   ├── Experience.tsx    # Work experience timeline
│   ├── Education.tsx     # Education cards
│   ├── Certifications.tsx
│   ├── Contact.tsx       # Contact links + CTA
│   ├── Footer.tsx
│   └── ThemeProvider.tsx # next-themes wrapper
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Contact

- **Email:** sisodiyadeepak936@gmail.com
- **LinkedIn:** [deepak-sisodiya](https://www.linkedin.com/in/deepak-sisodiya)
- **GitHub:** [Deepaksisodiya0503](https://github.com/Deepaksisodiya0503)
- **Phone:** +91 9575152563
