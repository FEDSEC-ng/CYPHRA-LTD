<div align="center">

<img src="public/images/fedsec-logo-white.png" alt="FEDSEC" width="180" />

<br />
<br />

**Active defense for organizations that refuse to be victims.**

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red?style=flat-square)

</div>

<br />

---

<br />

## What this is

This is the public facing website for **FEDSEC**. A cybersecurity company that builds AI powered defense systems for organizations across finance, healthcare, government, and technology. We detect threats before they become breaches. We secure infrastructure before attackers find it. We respond when things go wrong.

This site was built to communicate that clearly.

<br />

## Why it exists

Most cybersecurity websites look the same. Stock photos of padlocks. Buzzwords stacked on buzzwords. Nothing that tells you what the company actually does or why you should trust them.

We wanted something different. Something that feels as serious as the work we do. So we built a site that loads fast, looks sharp, and gives visitors the confidence that their security is in capable hands.

<br />

## The tech

```
Next.js 16          App router, server components, image optimization
TypeScript           Strict types, no runtime surprises
Tailwind CSS 4       Utility first, custom design tokens
Framer Motion        Scroll animations, spring physics, page transitions
Lucide React         Clean consistent iconography
Google Fonts         Inter Tight for headings, Inter for body, Manrope for accents
```

<br />

## How to run it

```bash
# clone the repository
git clone git@github.com:FEDSEC-ng/FedSec-LTD.git

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

<br />

## Project structure

```
src/
  app/
    page.tsx                  Home page with 11 animated sections
    about/page.tsx            Company story, team, awards, FAQ
    team/page.tsx             Team showcase with scrolling badges
    contact/page.tsx          Contact form, booking, FAQ
    services/page.tsx         Service listing
    services/[slug]/page.tsx  Individual service details
    blogs/page.tsx            Blog listing
    blogs/[slug]/page.tsx     Individual blog posts
    case-studies/page.tsx     Case study grid
    case-studies/[slug]/page.tsx  Case study details
  components/
    layout/                   Header and Footer
    ui/                       Reusable animated components
  lib/
    animations.ts             Framer Motion spring variants
    constants.ts              Site metadata and navigation
    data/                     Content data for services, team, blogs, case studies
public/
  images/                     All site images and assets
```

<br />

## Design decisions

**Colors that mean something.** Purple represents the intelligence behind our work. Pink signals urgency and action. Black and white keep everything grounded and serious.

**Scroll animations on every section.** Nothing flashy. Just subtle fade ups and scale ins that guide your eye as you move through the page. Built with spring physics so everything feels natural.

**Typography that commands respect.** Inter Tight at weight 400 for all headings. No bold screaming. Just calm authority. Inter for body text. Manrope for labels and accents.

**No stock photos.** Every image on this site is purposeful. Service icons, team photos, case study visuals. All real.

<br />

## The animations

We use three main animation patterns throughout the site, all powered by Framer Motion spring physics:

```typescript
// Standard scroll reveal. Elements rise into view.
{ opacity: 0, y: 50 }  to  { opacity: 1, y: 0 }

// Subtle scale with 3D perspective. For cards and featured content.
{ opacity: 0, scale: 0.95, transformPerspective: 1200 }

// Compact scale up. For smaller elements entering the viewport.
{ opacity: 0, scale: 0.8, y: 24 }
```

Every transition uses `damping: 40, stiffness: 200, mass: 1`. This gives us smooth, confident motion that never feels sluggish or bouncy.

<br />

## Content

The site ships with six services, seven team members, six blog posts, and six case studies. All content is real and specific to FEDSEC. Nothing is placeholder. Nothing is lorem ipsum.

If you need to update content, edit the files in `src/lib/data/`. Each file exports typed arrays that the pages consume directly.

<br />

## Deployment

The site is configured for static export. Build it with:

```bash
npm run build
```

The output in `.next/` can be deployed to Vercel, Netlify, or any static hosting provider. For Vercel, just connect the repository and it handles everything automatically.

<br />

## Who built this

**FEDSEC** is a cybersecurity firm based in Nigeria. We protect organizations from cyber threats using AI driven detection, rapid response, and proactive defense strategies.

This website was designed to reflect the quality of that work.

<br />

---

<br />

<div align="center">

**FEDSEC** · Active Defense

</div>
