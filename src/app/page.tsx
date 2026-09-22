"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  Crosshair,
  Eye,
  Fingerprint,
  Globe2,
  Handshake,
  Radar,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const serviceGroups = [
  {
    id: "offensive",
    label: "Offensive security",
    title: "Find the path in before someone else does.",
    description: "Authorized testing that turns an attacker's perspective into a practical remediation plan.",
    icon: ScanSearch,
    services: ["Vulnerability assessment", "Penetration testing", "Web & API security", "Red team thinking"],
    href: "/services/vulnerability-assessment-and-penetration-testing",
  },
  {
    id: "defensive",
    label: "Defensive security",
    title: "See what is happening across your environment.",
    description: "Security analysis and network thinking that make threats, gaps, and priorities easier to understand.",
    icon: Eye,
    services: ["Security analysis", "Network security", "Log & event analysis", "Threat detection"],
    href: "/services/network-security",
  },
  {
    id: "governance",
    label: "GRC & advisory",
    title: "Turn cyber risk into decisions people can use.",
    description: "Governance, risk, and compliance guidance shaped around your organization and its operating reality.",
    icon: ShieldCheck,
    services: ["Risk assessment", "GRC advisory", "Security policies", "Compliance readiness"],
    href: "/services/grc-advisory",
  },
  {
    id: "product",
    label: "Software security",
    title: "Build products that earn trust from the inside out.",
    description: "Security for applications, APIs, and software systems throughout development and deployment.",
    icon: Fingerprint,
    services: ["Secure code review", "Application security", "API testing", "DevSecOps guidance"],
    href: "/services/software-security",
  },
  {
    id: "people",
    label: "Security culture",
    title: "Make safer decisions part of everyday work.",
    description: "Education and awareness that help teams build better security habits and shared responsibility.",
    icon: BookOpenCheck,
    services: ["Cybersecurity education", "Awareness programs", "Team enablement", "Practical playbooks"],
    href: "/contact",
  },
];

const process = [
  { step: "01", title: "Recon", detail: "We learn the environment, the people, the systems, and the business pressure around the problem.", icon: Radar, color: "#d91a63" },
  { step: "02", title: "Fingerprint", detail: "We map the attack surface and identify the signals, dependencies, and weak points that matter.", icon: ScanSearch, color: "#f27839" },
  { step: "03", title: "Validate", detail: "We test assumptions with authorized assessment, analysis, and evidence rather than guesswork.", icon: Crosshair, color: "#662f90" },
  { step: "04", title: "Prioritize", detail: "We translate findings into clear risk, business context, and a sequence your team can act on.", icon: TerminalSquare, color: "#0b8f8f" },
  { step: "05", title: "Strengthen", detail: "We help you improve controls, culture, and resilience so the work keeps paying off after the report.", icon: ShieldCheck, color: "#d91a63" },
];

const places = ["Lagos", "Abuja", "Germany", "Remote / Global"];
const proof = [
  ["06", "service disciplines"],
  ["05", "people in the collective"],
  ["05", "steps from recon to resilience"],
  ["01", "shared security mission"],
];

const testimonials = [
  { quote: "The best security advice is clear enough to use. That is the standard we bring to every engagement.", label: "The FEDSEC standard", mark: "01" },
  { quote: "Different perspectives create better security outcomes. Offensive, defensive, governance, and product thinking belong in the same room.", label: "The collective approach", mark: "02" },
  { quote: "Our work is practical by design: understand the problem, show the evidence, and make the next move obvious.", label: "The client experience", mark: "03" },
];

const fadeUp: import("framer-motion").Variants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const selectedService = serviceGroups[activeService];
  const selectedProcess = process[activeProcess];
  const ProcessIcon = selectedProcess.icon;

  return (
    <div className="overflow-hidden bg-[#08080a] text-white">
      <section className="relative isolate min-h-[min(880px,100vh)] overflow-hidden border-b border-white/10 bg-[#08080a]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(218,26,93,.34),transparent_25%),radial-gradient(circle_at_38%_8%,rgba(102,47,144,.36),transparent_34%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block"><Image src="/images/protexy/hero/hero-bg.png" alt="" fill priority className="object-cover opacity-50 mix-blend-screen" /><div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/75 to-transparent" /></div>
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto flex min-h-[min(880px,100vh)] max-w-[1440px] items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-28">
          <div className="w-full max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-[#f27839]"><span className="h-px w-10 bg-[#f27839]" /> FEDSEC / KNOW YOUR RISK</motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="max-w-6xl text-[clamp(3.5rem,9vw,9.3rem)] font-medium leading-[.85] tracking-[-.08em]">Cybersecurity is<br /><span className="text-[#d91a63]">stronger together.</span></motion.h1>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .1 }} className="mt-12 grid max-w-4xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end"><p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg">FEDSEC is a multidisciplinary cybersecurity firm built on trust, expertise, and collaboration. We help organizations see risk clearly and move with confidence.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-4 border-b border-[#f27839] pb-3 text-xs font-semibold uppercase tracking-[.18em] text-white transition-colors hover:text-[#f27839]">Start a conversation <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></motion.div>
            <div className="mt-16 flex items-center gap-5 text-[10px] uppercase tracking-[.24em] text-white/35"><span>Scroll to explore</span><ArrowDownRight size={16} className="text-[#f27839]" /><span className="hidden h-px w-20 bg-white/20 sm:block" /><span className="hidden sm:block">Different expertise / One collective</span></div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#efeee9] text-[#111114]"><div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.72fr_1.28fr]"><div className="relative min-h-[430px] overflow-hidden bg-[#17121c] p-8 sm:p-12 lg:min-h-[560px] lg:p-16"><Image src="/images/protexy/about/about-main.png" alt="FEDSEC security collective" fill className="object-cover opacity-65" /><div className="absolute inset-0 bg-gradient-to-tr from-[#17121c] via-transparent to-[#662f90]/40" /><div className="relative flex h-full flex-col justify-between text-white"><p className="text-xs uppercase tracking-[.25em] text-[#f27839]">01 / The collective</p><p className="max-w-sm text-3xl font-medium leading-[.95] tracking-[-.04em] sm:text-5xl">One security view is never enough.</p></div></div><div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20"><p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">Who we are</p><h2 className="max-w-2xl text-4xl font-medium leading-[.92] tracking-[-.06em] sm:text-6xl">We connect the angles that make security useful.</h2><p className="mt-8 max-w-xl text-lg leading-8 text-black/60">FEDSEC brings offensive and defensive security perspectives together with GRC, network, software, and security culture expertise.</p><div className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-black/15 pt-6 text-sm font-semibold uppercase tracking-[.1em] sm:grid-cols-4"><span>Red team</span><span>Blue team</span><span>GRC</span><span>DevSec</span></div><Link href="/about" className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-black/30 pb-3 text-xs font-semibold uppercase tracking-[.17em]">About FEDSEC <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div></div></section>

      <section className="bg-[#08080a] px-6 py-14 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1440px] grid-cols-2 border-y border-white/15 sm:grid-cols-4">{proof.map(([number, label], index) => <motion.div key={label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * .08 }} className="border-b border-white/15 px-4 py-8 sm:border-b-0 sm:border-l sm:px-7 lg:py-10"><p className="text-4xl font-medium tracking-[-.06em] text-[#f27839] sm:text-6xl">{number}</p><p className="mt-3 max-w-[130px] text-xs uppercase leading-5 tracking-[.14em] text-white/45">{label}</p></motion.div>)}</div></section>

      <section className="bg-[#08080a] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-36"><div className="mx-auto max-w-[1440px]"><div className="mb-14 grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">02 / What we do</p><h2 className="max-w-3xl text-5xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl">Complete coverage.<br /><span className="text-white/35">One security team.</span></h2></div><p className="max-w-xl text-base leading-7 text-white/50">The work changes with the risk. The principle does not: understand the organization, find what matters, and help it get stronger.</p></div><div className="grid gap-10 lg:grid-cols-[.42fr_.58fr]"><div className="flex flex-col border-t border-white/15">{serviceGroups.map((service, index) => { const Icon = service.icon; return <button key={service.id} type="button" onClick={() => setActiveService(index)} className={`group flex items-center justify-between border-b border-white/15 px-4 py-5 text-left transition-all sm:px-6 ${activeService === index ? "bg-white text-[#111114]" : "text-white/55 hover:bg-white/[.06] hover:text-white"}`}><span className="flex items-center gap-4"><span className={`text-xs ${activeService === index ? "text-[#d91a63]" : "text-[#f27839]"}`}>0{index + 1}</span><span className="text-sm font-semibold uppercase tracking-[.09em] sm:text-base">{service.label}</span></span><Icon size={19} strokeWidth={1.5} className={activeService === index ? "text-[#d91a63]" : "text-white/35"} /></button>; })}</div><motion.div key={selectedService.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .35 }} className="relative overflow-hidden bg-[#141319] p-8 sm:p-12 lg:min-h-[500px] lg:p-16"><div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(218,26,93,.32),transparent_48%),url('/images/protexy/hero/home-hero-decor.png')] bg-cover opacity-40" /><div className="relative flex h-full flex-col justify-between"><div>{(() => { const ServiceIcon = selectedService.icon; return <ServiceIcon size={34} strokeWidth={1.3} className="mb-12 text-[#f27839]" />; })()}<p className="text-xs uppercase tracking-[.2em] text-[#f27839]">{selectedService.label}</p><h3 className="mt-5 max-w-xl text-4xl font-medium leading-[.94] tracking-[-.05em] sm:text-6xl">{selectedService.title}</h3><p className="mt-6 max-w-lg text-base leading-7 text-white/55">{selectedService.description}</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2">{selectedService.services.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/75"><Check size={15} className="text-[#d91a63]" /> {item}</div>)}</div><Link href={selectedService.href} className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#f27839] pb-2 text-xs font-semibold uppercase tracking-[.16em]">Explore this discipline <ArrowUpRight size={16} /></Link></div></motion.div></div></div></section>

      <section className="relative bg-[#d91a63] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(120deg,transparent,rgba(102,47,144,.5)),url('/images/protexy/hero/home-hero-decor.png')] bg-cover opacity-35 mix-blend-multiply" /><div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-white/70">03 / Where we work</p><h2 className="max-w-xl text-5xl font-medium leading-[.9] tracking-[-.06em] sm:text-7xl">Close to the problem.<br />Connected to the world.</h2><p className="mt-8 max-w-md text-base leading-7 text-white/75">FEDSEC works with organizations across locations, industries, and stages of growth. Our collective is rooted in Nigeria and open to the world.</p></div><div className="grid border-t border-white/30 sm:grid-cols-2">{places.map((place, index) => <div key={place} className="border-b border-white/30 py-7 sm:px-6"><span className="mr-4 text-xs text-white/60">0{index + 1}</span><span className="text-xl sm:text-2xl">{place}</span></div>)}</div></div></section>

      <section className="bg-[#08080a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36"><div className="mx-auto max-w-[1440px]"><div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">04 / How we do it</p><h2 className="text-5xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl">From recon to<br /><span className="text-white/35">resilience.</span></h2></div><p className="max-w-md text-base leading-7 text-white/50">A five-step flow that keeps the engagement moving, makes evidence visible, and leaves your team with a clear next action.</p></div><div className="grid gap-10 lg:grid-cols-[.45fr_.55fr] lg:items-start"><div className="lg:sticky lg:top-28"><div className="relative min-h-[430px] overflow-hidden bg-[#141319] p-8 sm:p-12" style={{ background: `linear-gradient(145deg, ${selectedProcess.color}33, transparent 48%), #141319` }}><div className="absolute inset-0 grid-pattern opacity-30" /><div className="relative flex h-full min-h-[330px] flex-col justify-between"><div className="flex items-center justify-between"><span className="text-sm text-white/50">PROCESS / {selectedProcess.step}</span><ProcessIcon size={32} strokeWidth={1.4} style={{ color: selectedProcess.color }} /></div><div><motion.div key={selectedProcess.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-[clamp(3rem,7vw,6rem)] font-medium leading-[.85] tracking-[-.08em]">{selectedProcess.title}</motion.div><p className="mt-8 max-w-md text-base leading-7 text-white/60">{selectedProcess.detail}</p></div></div></div></div><div className="border-t border-white/15">{process.map((item, index) => { const Icon = item.icon; return <button key={item.step} type="button" onClick={() => setActiveProcess(index)} className={`flex w-full items-start gap-5 border-b border-white/15 p-6 text-left transition-colors sm:p-8 ${activeProcess === index ? "bg-white text-[#111114]" : "text-white/55 hover:bg-white/[.05] hover:text-white"}`}><span className="pt-1 text-xs text-[#f27839]">{item.step}</span><span className="flex-1"><span className="flex items-center gap-3 text-xl font-medium"><Icon size={20} className={activeProcess === index ? "text-[#d91a63]" : "text-white/30"} /> {item.title}</span><span className={`mt-3 block max-w-lg text-sm leading-6 ${activeProcess === index ? "text-black/55" : "text-white/40"}`}>{item.detail}</span></span><ChevronRight size={19} className="mt-1 shrink-0" /></button>; })}</div></div></div></section>

      <section className="bg-[#efeee9] px-6 py-24 text-[#111114] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1440px]"><div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">05 / What good looks like</p><h2 className="text-5xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl">Clearer decisions.<br /><span className="text-[#662f90]">Stronger outcomes.</span></h2></div><Link href="/case-studies" className="inline-flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-xs font-semibold uppercase tracking-[.16em]">Explore our work <ArrowUpRight size={16} /></Link></div><div className="grid gap-6 lg:grid-cols-[.36fr_.64fr]"><div className="grid grid-cols-3 gap-px bg-black/15 lg:grid-cols-1">{testimonials.map((item, index) => <button key={item.mark} type="button" onClick={() => setActiveTestimonial(index)} className={`p-5 text-left transition-colors sm:p-7 ${activeTestimonial === index ? "bg-[#d91a63] text-white" : "bg-[#efeee9] text-black/45 hover:bg-white"}`}><span className="text-xs">{item.mark}</span><span className="mt-5 hidden text-xs font-semibold uppercase tracking-[.12em] sm:block">{item.label}</span></button>)}</div><motion.div key={activeTestimonial} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[330px] flex-col justify-between bg-white p-8 sm:p-12 lg:p-16"><Sparkles size={26} className="text-[#d91a63]" /><blockquote className="max-w-3xl text-3xl font-medium leading-[1.04] tracking-[-.04em] sm:text-5xl">&ldquo;{testimonials[activeTestimonial].quote}&rdquo;</blockquote><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">{testimonials[activeTestimonial].label}</p></motion.div></div></div></section>

      <section className="bg-[#08080a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">06 / Meet the founder</p><h2 className="text-5xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl">People make the<br /><span className="text-[#d91a63]">difference.</span></h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">Nwachukwu Francis O. founded FEDSEC to bring technical security, business context, and creative strategy into the same conversation.</p><Link href="/about" className="mt-10 inline-flex items-center gap-3 border-b border-[#f27839] pb-3 text-xs font-semibold uppercase tracking-[.17em]">Read the FEDSEC story <ArrowUpRight size={17} /></Link></div><div className="grid gap-px bg-white/15 sm:grid-cols-2"><Link href="/about" className="group bg-[#141319] p-8 transition-colors hover:bg-[#d91a63] sm:p-10"><Globe2 size={25} className="text-[#f27839]" /><h3 className="mt-16 text-2xl font-medium">The story</h3><p className="mt-4 text-sm leading-6 text-white/50 group-hover:text-white/75">Why FEDSEC exists, what we believe, and where the collective is going.</p><ArrowRight size={18} className="mt-8 transition-transform group-hover:translate-x-2" /></Link><Link href="/team" className="group bg-[#141319] p-8 transition-colors hover:bg-[#662f90] sm:p-10"><Handshake size={25} className="text-[#f27839]" /><h3 className="mt-16 text-2xl font-medium">The people</h3><p className="mt-4 text-sm leading-6 text-white/50 group-hover:text-white/75">Meet the specialists bringing GRC, networks, software, and security testing together.</p><ArrowRight size={18} className="mt-8 transition-transform group-hover:translate-x-2" /></Link></div></div></section>

      <section className="relative overflow-hidden bg-[#d91a63] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/images/protexy/cta/cta-bg.png')] bg-cover opacity-25 mix-blend-screen" /><div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-5xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl">Know your risk.<br />Know what&apos;s next.</h2><Link href="/contact" className="group inline-flex w-fit items-center gap-4 border-b border-white pb-3 text-xs font-semibold uppercase tracking-[.17em]">Talk to FEDSEC <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div></section>
    </div>
  );
}
