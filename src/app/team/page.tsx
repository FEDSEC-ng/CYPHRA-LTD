"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Fingerprint, Network, ScanSearch, ShieldCheck } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import { team } from "@/lib/data/team";

const disciplines = [
  ["Offensive security", ScanSearch],
  ["GRC & advisory", ShieldCheck],
  ["Network security", Network],
  ["Software security", Fingerprint],
] as const;

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#08080a] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(218,26,93,.25),transparent_28%),linear-gradient(120deg,#08080a,#1a1123)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]"><span className="h-px w-10 bg-[#f27839]" /> FEDSEC / OUR PEOPLE</p>
          <h1 className="max-w-5xl text-[clamp(3rem,9vw,8rem)] font-medium leading-[.88] tracking-[-.07em]">Different disciplines.<br /><span className="text-[#d91a63]">One collective.</span></h1>
          <div className="mt-10 grid max-w-4xl gap-8 text-white/60 sm:grid-cols-[1fr_auto] sm:items-end"><p className="max-w-xl text-base leading-7 sm:text-lg">FEDSEC is built by people who bring different perspectives to the same security problem. Technical depth, business context, and a willingness to keep learning shape how we work.</p><Link href="/contact" className="inline-flex w-fit items-center gap-3 border-b border-[#f27839] pb-3 text-xs font-semibold uppercase tracking-[.16em] text-white">Work with us <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="bg-[#efeee9] px-6 py-16 text-[#111114] sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1440px]"><p className="mb-8 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">Our coverage</p><div className="grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">{disciplines.map(([label, Icon]) => <div key={label} className="flex items-center gap-4 border-b border-black/15 py-6 lg:border-l lg:px-6 lg:py-8"><Icon size={22} className="text-[#d91a63]" strokeWidth={1.5} /><span className="text-sm font-semibold uppercase tracking-[.12em]">{label}</span></div>)}</div></div>
      </section>

      <section className="bg-[#08080a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]"><div className="mb-14 max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">The people behind FEDSEC</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">Meet the people building the firm.</h2></div><div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{team.map((member, index) => { const isExpanded = expandedMember === member.name; return <motion.article key={member.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .55, delay: index * .06 }} className="bg-[#08080a] p-7 sm:p-9"><div className="mb-12 flex h-24 w-24 items-end border-b border-[#d91a63] text-5xl font-medium text-[#d91a63]">{member.name.charAt(0)}</div><p className="mb-3 text-xs uppercase tracking-[.18em] text-[#f27839]">0{String(index + 1).padStart(2, "0")} / Profile</p><h3 className="text-2xl font-medium tracking-[-.03em]">{member.name}</h3><p className="mt-2 text-sm font-semibold text-white/65">{member.role}</p><p className={`mt-6 text-sm leading-6 text-white/50 ${isExpanded ? "" : "line-clamp-4"}`}>{member.bio}</p><div className="mt-7 flex flex-wrap items-center gap-4"><button type="button" onClick={() => setExpandedMember(isExpanded ? null : member.name)} className="inline-flex items-center gap-2 border-b border-[#f27839] pb-2 text-xs font-semibold uppercase tracking-[.14em] text-white">{isExpanded ? "Hide profile" : "Read profile"}</button>{member.resume ? <a href={member.resume} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-[.14em] text-[#f27839]">View CV</a> : <span className="text-xs uppercase tracking-[.14em] text-white/25">CV coming soon</span>}</div></motion.article>; })}</div></div>
      </section>

      <CTABanner />
    </>
  );
}
