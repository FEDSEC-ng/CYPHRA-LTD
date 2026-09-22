"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Crosshair,
  Fingerprint,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  { number: "01", title: "Vulnerability assessment & penetration testing", text: "Find the weaknesses that matter. We combine automated discovery with manual testing across applications, APIs, networks, and cloud environments.", icon: ScanSearch, href: "/services/vulnerability-assessment-and-penetration-testing" },
  { number: "02", title: "GRC & cybersecurity advisory", text: "Turn cyber risk into decisions people can act on with practical governance, risk, compliance, and security strategy.", icon: Crosshair, href: "/services/grc-advisory" },
  { number: "03", title: "Network & infrastructure security", text: "Strengthen the systems your organization relies on through network reviews, architecture thinking, and resilient controls.", icon: Network, href: "/services/network-security" },
  { number: "04", title: "Software & application security", text: "Build security into the product lifecycle with web, API, and software security guidance from development to deployment.", icon: Fingerprint, href: "/services/software-security" },
];

const principles = [
  ["Understand", "Your systems, environment, objectives, and concerns."],
  ["Assess", "Your vulnerabilities, risks, gaps, and weaknesses."],
  ["Analyze", "The technical and business context behind every finding."],
  ["Recommend", "Actions your team can realistically implement."],
  ["Strengthen", "Your security posture and resilience over time."],
];

const fadeUp: Variants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#08080a] text-white">
      <section className="relative isolate min-h-[760px] border-b border-white/10 bg-[#08080a]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(218,26,93,.3),transparent_24%),radial-gradient(circle_at_38%_8%,rgba(102,47,144,.34),transparent_32%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] lg:block"><Image src="/images/protexy/hero/hero-bg.png" alt="" fill priority className="object-cover opacity-55 mix-blend-screen" /><div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/70 to-transparent" /></div>
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto flex min-h-[760px] max-w-[1440px] items-end px-6 pb-20 pt-36 sm:px-10 lg:px-16 lg:pb-28">
          <div className="max-w-5xl">
            <motion.p initial="hidden" animate="visible" variants={fadeUp} className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f27839]"><span className="h-px w-10 bg-[#f27839]" /> FEDSEC / KNOW YOUR RISK</motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[.88] tracking-[-.075em]">Security is a<br /><span className="text-[#d91a63]">collective</span> advantage.</motion.h1>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end"><p className="max-w-md text-base leading-7 text-white/60">FEDSEC brings technical depth, strategic thinking, and practical security solutions together to help organizations understand risk and move with confidence.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-4 border-b border-[#f27839] pb-3 text-sm font-semibold uppercase tracking-[.16em] text-white transition-colors hover:text-[#f27839]">Start a conversation <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 right-6 hidden items-center gap-4 text-[10px] uppercase tracking-[.25em] text-white/40 sm:flex lg:right-16"><span>Scroll to explore</span><ArrowDownRight size={16} className="text-[#f27839]" /></div>
      </section>

      <section className="border-b border-white/10 bg-[#efeee9] text-[#111114]"><div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[430px] overflow-hidden bg-[#17121c] p-8 sm:p-12 lg:min-h-[620px] lg:p-16"><Image src="/images/protexy/about/about-main.png" alt="A connected cybersecurity network" fill className="object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-tr from-[#17121c] via-transparent to-[#662f90]/30" /><div className="relative flex h-full flex-col justify-between text-white"><p className="text-xs uppercase tracking-[.25em] text-[#f27839]">01 / The collective</p><p className="max-w-sm text-3xl font-medium leading-tight sm:text-5xl">Different expertise.<br />One clear direction.</p></div></div><div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20"><p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">Who we are</p><h2 className="max-w-xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-6xl">Cybersecurity should be practical, not mysterious.</h2><p className="mt-8 max-w-xl text-lg leading-8 text-black/60">FEDSEC is a multidisciplinary cybersecurity firm helping startups, SMEs, technology companies, institutions, and organizations protect the digital systems their work depends on.</p><Link href="/about" className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-black/30 pb-3 text-sm font-semibold uppercase tracking-[.16em]">More about FEDSEC <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></div></section>

      <section className="bg-[#08080a] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"><div className="mx-auto max-w-[1440px]"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">02 / What we do</p><h2 className="max-w-3xl text-5xl font-medium leading-[.9] tracking-[-.06em] sm:text-7xl">Security that<br /><span className="text-white/35">knows the context.</span></h2></div><p className="max-w-sm text-sm leading-6 text-white/50">From finding vulnerabilities to building stronger security practices, we meet organizations where they are and help them understand what to do next.</p></motion.div><div className="grid border-t border-white/15 md:grid-cols-2">{services.map((service, index) => { const Icon = service.icon; return <motion.div key={service.number} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: index * .08 }} className="group border-b border-white/15 p-8 md:min-h-[310px] md:p-10 lg:p-14 odd:md:border-r"><div className="flex items-start justify-between"><span className="text-sm text-[#f27839]">{service.number}</span><Icon size={25} strokeWidth={1.4} className="text-white/40 transition-colors group-hover:text-[#d91a63]" /></div><h3 className="mt-14 max-w-md text-2xl font-medium leading-tight tracking-[-.03em] sm:text-3xl">{service.title}</h3><p className="mt-5 max-w-md text-sm leading-6 text-white/45">{service.text}</p><Link href={service.href} className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#f27839]">Explore service <ArrowUpRight size={15} /></Link></motion.div>; })}</div></div></section>

      <section className="relative bg-[#d91a63] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"><div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(120deg,transparent,rgba(102,47,144,.5)),url('/images/protexy/hero/home-hero-decor.png')] bg-cover opacity-35 mix-blend-multiply" /><div className="relative mx-auto max-w-[1440px]"><p className="mb-8 text-xs font-semibold uppercase tracking-[.25em] text-white/70">03 / Our approach</p><div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-28"><h2 className="max-w-xl text-5xl font-medium leading-[.9] tracking-[-.06em] sm:text-7xl">Know the risk.<br />Know what&apos;s next.</h2><div className="grid border-t border-white/30 sm:grid-cols-2 lg:grid-cols-5 lg:border-t-0">{principles.map(([title, text], index) => <div key={title} className="border-b border-white/30 py-6 sm:px-5 lg:border-l lg:border-b-0 lg:py-0"><span className="text-xs text-white/60">0{index + 1}</span><h3 className="mt-8 text-xl font-medium">{title}</h3><p className="mt-4 text-sm leading-6 text-white/70">{text}</p></div>)}</div></div></div></section>

      <section className="bg-[#efeee9] px-6 py-24 text-[#111114] sm:px-10 lg:px-16 lg:py-36"><div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1fr_.8fr] lg:gap-24"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">04 / Meet the founder</p><h2 className="max-w-3xl text-5xl font-medium leading-[.9] tracking-[-.06em] sm:text-7xl">Built from curiosity.<br /><span className="text-[#662f90]">Grounded in practice.</span></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">Nwachukwu Francis O. is a cybersecurity professional and the founder of FEDSEC. His background spans threat analysis, security operations, penetration testing, cloud security, network security, and the creative strategy needed to make security understood.</p><div className="mt-10 flex flex-wrap gap-3">{["Threat analysis", "Security operations", "Cloud security", "Network security", "B.Tech Cyber Security"].map((skill) => <span key={skill} className="border border-black/15 px-4 py-2 text-xs uppercase tracking-[.12em]">{skill}</span>)}</div><Link href="/team" className="group mt-10 inline-flex items-center gap-3 border-b border-black/30 pb-3 text-sm font-semibold uppercase tracking-[.16em]">Meet the team <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div><div className="relative aspect-[4/5] overflow-hidden bg-[#19151e]"><Image src="/images/protexy/team/member1.png" alt="FEDSEC founder" fill className="object-cover grayscale transition-all duration-700 hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#111114]/70 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 text-white"><p className="text-2xl font-medium">Nwachukwu Francis O.</p><p className="mt-1 text-xs uppercase tracking-[.2em] text-white/60">Founder &amp; Cybersecurity Professional</p></div></div></div></section>

      <section className="relative overflow-hidden bg-[#08080a] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"><div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#662f90]/30 blur-[120px]" /><div className="relative mx-auto max-w-[1440px]"><div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[.25em] text-[#f27839]"><Sparkles size={16} /> The FEDSEC promise</div><div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><h2 className="max-w-4xl text-5xl font-medium leading-[.9] tracking-[-.06em] sm:text-8xl">Built on trust.<br /><span className="text-[#d91a63]">Driven by expertise.</span><br />Strengthened by collaboration.</h2><div className="lg:pb-2"><p className="text-lg leading-8 text-white/55">Effective security takes more than one perspective. We are building a firm where different disciplines, professionals, and ways of thinking work together as one collective.</p><Link href="/contact" className="mt-10 inline-flex items-center gap-4 border-b border-[#f27839] pb-3 text-sm font-semibold uppercase tracking-[.16em] text-white">Talk to FEDSEC <ArrowUpRight size={18} /></Link></div></div><div className="mt-24 flex items-center gap-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[.2em] text-white/35"><Radar size={18} className="text-[#f27839]" /> Practical security for a more secure digital ecosystem <ShieldCheck size={18} className="ml-auto text-[#d91a63]" /></div></div></section>
    </div>
  );
}
