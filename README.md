<div align="center">

<img src="public/images/cyphra-logo-white.png" alt="CYPHRA LTD" width="180" />

<br />
<br />

**CYPHRA LTD — Know Your Risk.**

*Different Expertise. One Collective. Secure by Trust.*

<br />

🌐 **Live site: [https://cyphraltd.tech](https://cyphraltd.tech)**

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red?style=flat-square)

</div>

<br />

---

<br />

## What this is

This is the public website for **[CYPHRA LTD](https://cyphraltd.tech)** — a multidisciplinary cybersecurity firm. The name comes from *cipher*, the craft of protecting what matters. Purple (blue defense meeting red offense) represents different disciplines integrated into one collective.

CYPHRA operates as an extension of the client's team: offensive specialists, defensive engineers, and governance advisors working as one. Six core services:

1. Vulnerability Assessment & Penetration Testing
2. GRC Advisory
3. Network Security
4. Software Security
5. Security Operations
6. Incident Response

The site covers services, case studies, blogs, the team collective, and contact — with delivery locations in Lagos (HQ), Abuja, Munich, London, New York, and Accra.

<br />

## Why it exists

Most cybersecurity websites look the same. Stock photos of padlocks. Buzzwords stacked on buzzwords. Nothing that tells you what the company actually does or why you should trust them.

This site was built to communicate that clearly: real services, real case files, real people with verifiable credentials (TryHackMe rankings, CPTS, eCPPT, (ISC)², bug bounty records). It loads fast, looks sharp, and gives visitors confidence their security is in capable hands.

<br />

## The tech

```
Next.js 16            App router, image optimization, metadata API
React 19              Server and client components
TypeScript 5          Strict types throughout
Tailwind CSS 4        Utility first, custom design tokens
Framer Motion 13      Scroll reveals, spring physics, page transitions
Lucide React          Clean consistent iconography
Self-hosted fonts     ClashDisplay (headings), Satoshi (body), JetBrains Mono (accents)
```

No runtime font CDN — all type ships with the build via `next/font/local`.

<br />

## How to run it

```bash
# clone the repository
git clone git@github.com:FEDSEC-ng/CYPHRA-LTD.git

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

```bash
# lint
npm run lint

# production build
npm run build

# serve the production build
npm run start
```

<br />

## Project structure

```
src/
  app/
    page.tsx                    Home page with animated sections
    about/page.tsx              Brand story, values, approach, team
    team/page.tsx                Team showcase with scrolling badges
    contact/page.tsx            Contact form, booking, FAQ
    services/page.tsx           Service listing
    services/[slug]/page.tsx    Individual service details
    blogs/page.tsx              Blog listing
    blogs/[slug]/page.tsx       Individual blog posts
    case-studies/page.tsx       Case study grid
    case-studies/[slug]/page.tsx  Case study details
    icon.png / apple-icon.png / favicon.ico  Brand favicon set
  components/
    layout/                     Header, Footer, brand logo
    home/                       Home page sections (hero, stats, team, locations...)
    ui/                         Reusable animated components
  lib/
    animations.ts               Framer Motion spring variants
    constants.ts                Site metadata, navigation, social links
    data/                       Typed content: services, team, blogs, case studies
  fonts/                        Self-hosted ClashDisplay + Satoshi woff2
public/
  images/                       Logos, team headshots, CVs, locations, case visuals
```

<br />

## Design decisions

**Colors that mean something.** Purple (`#662f90`) is blue defense meeting red offense — disciplines integrated into one collective. Pink (`#da1a5d`) signals urgency and action. Black and white keep everything grounded and serious.

**Scroll animations on every section.** Subtle fade ups and scale ins that guide the eye, built with spring physics (`damping: 40, stiffness: 200`) so motion feels natural, never bouncy.

**Typography with intent.** ClashDisplay for headings, Satoshi for body, JetBrains Mono for terminal/code accents — all self-hosted, no external requests.

**Real content, no placeholders.** Services, case files, team bios, CVs, and credentials are all real. To update content, edit the typed files in `src/lib/data/`.

<br />

## Deployment

Standard Next.js build (dynamic routes for services, blogs, and case studies). Deploy to Vercel by connecting the repository, or build and host anywhere Node.js runs:

```bash
npm run build
npm run start
```

<br />

## Contact

- **Site:** [https://cyphraltd.tech](https://cyphraltd.tech)
- **Email:** info@cyphraltd.com
- **Phone:** +234 902 153 0382
- **HQ:** Lagos, Nigeria

<br />

---

<br />

<div align="center">

**CYPHRA LTD** · Know Your Risk · Different Expertise. One Collective. Secure by Trust.

</div>
