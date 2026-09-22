"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Handshake, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { team } from "@/lib/data/team";
import CTABanner from "@/components/ui/CTABanner";

const values = [
  ["Trust", "We build relationships through reliability, transparency, and responsible security practices."],
  ["Integrity", "We do what is right, even when no one is watching."],
  ["Confidentiality", "We protect the information, systems, and access entrusted to us."],
  ["Professionalism", "We approach every engagement with discipline, competence, and respect."],
  ["Collaboration", "Different perspectives and areas of expertise create stronger security outcomes."],
  ["Continuous learning", "We keep learning, adapting, and keeping pace with an evolving threat landscape."],
  ["Accountability", "We take responsibility for our work, decisions, and outcomes."],
];

const promise = [
  ["01", "Who we are", "A multidisciplinary cybersecurity firm bringing together professionals with diverse expertise."],
  ["02", "Why we exist", "To make effective cybersecurity more accessible, practical, and actionable."],
  ["03", "Who we serve", "Startups, SMEs, technology companies, institutions, and organizations that rely on digital systems."],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#08080a] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-16 lg:pb-28 lg:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(218,26,93,.28),transparent_28%),linear-gradient(120deg,#08080a,#18101f)]" /><div className="relative mx-auto grid max-w-[1440px] items-end gap-12 lg:grid-cols-[1fr_.7fr]"><div><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]"><span className="h-px w-10 bg-[#f27839]" /> FEDSEC / ABOUT</p><h1 className="max-w-5xl text-[clamp(3rem,9vw,8rem)] font-medium leading-[.88] tracking-[-.07em]">Trust is where<br /><span className="text-[#d91a63]">security starts.</span></h1><p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">FEDSEC was created around a simple belief: effective security requires more than one perspective. We bring technical knowledge, strategic thinking, and practical solutions together as one collective.</p></div><div className="relative aspect-[4/3] overflow-hidden bg-[#17121c]"><Image src="/images/protexy/about/about-main.png" alt="FEDSEC cybersecurity collective" fill className="object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent" /><div className="absolute bottom-5 left-5 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-white/70"><Sparkles size={15} className="text-[#f27839]" /> Different expertise. One collective.</div></div></div></section>

      <section className="bg-[#efeee9] px-6 py-16 text-[#111114] sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="grid border-t border-black/15 md:grid-cols-3">{promise.map(([number, title, text]) => <motion.div key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-b border-black/15 py-8 md:border-l md:px-7 lg:py-12"><span className="text-sm text-[#d91a63]">{number}</span><h2 className="mt-10 text-2xl font-medium tracking-[-.03em]">{title}</h2><p className="mt-4 max-w-sm text-base leading-7 text-black/55">{text}</p></motion.div>)}</div></div></section>

      <section className="bg-white px-6 py-20 text-[#111114] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">What makes us different</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">Multiple angles.<br /><span className="text-[#662f90]">One security outcome.</span></h2></div><div className="space-y-7 text-lg leading-8 text-black/60"><p>FEDSEC brings together offensive and defensive security perspectives with GRC, network, software, and other areas of expertise.</p><p>We do not approach security from a single point of view. We help organizations understand their environment, find what matters, and know what to do next.</p><p className="font-semibold text-black">Built on trust. Driven by expertise. Strengthened by collaboration.</p></div></div></section>

      <section className="bg-[#08080a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1440px]"><div className="mb-14 max-w-3xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">Our values</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">The standard we hold ourselves to.</h2></div><div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">{values.map(([title, text], index) => <div key={title} className="border-b border-white/15 p-7 sm:p-9 lg:border-l"><div className="flex items-center gap-4"><span className="text-xs text-[#d91a63]">0{index + 1}</span><h3 className="text-xl font-medium">{title}</h3></div><p className="mt-5 text-sm leading-6 text-white/50">{text}</p></div>)}</div></div></section>

      <section className="bg-[#efeee9] px-6 py-20 text-[#111114] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1440px]"><div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">Our people</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">A collective in motion.</h2></div><Link href="/team" className="inline-flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-xs font-semibold uppercase tracking-[.16em]">See every profile <ArrowUpRight size={16} /></Link></div><div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-5">{team.map((member, index) => <div key={member.name} className="bg-[#efeee9] p-6"><div className="mb-10 flex h-16 w-16 items-end border-b-2 border-[#d91a63] text-3xl text-[#d91a63]">{member.name.charAt(0)}</div><p className="text-xs text-[#662f90]">0{index + 1}</p><h3 className="mt-4 text-xl font-medium leading-tight">{member.name}</h3><p className="mt-2 text-xs uppercase tracking-[.12em] text-black/50">{member.role}</p></div>)}</div></div></section>

      <section className="bg-[#d91a63] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-3">{[[ShieldCheck, "Trust"], [LockKeyhole, "Confidentiality"], [Handshake, "Collaboration"]].map(([Icon, label]) => <div key={label as string} className="border-t border-white/30 pt-5"><Icon size={24} strokeWidth={1.5} /><p className="mt-8 text-2xl font-medium">{label as string}</p></div>)}</div></section>

      <CTABanner />
    </>
  );
}
