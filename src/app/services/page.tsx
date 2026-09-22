"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, Fingerprint, Network, ScanSearch, ShieldCheck, Workflow } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { number: "01", title: "Vulnerability Assessment & Penetration Testing", label: "Find the weakness", text: "Authorized assessments that identify vulnerabilities across networks, applications, APIs, and infrastructure before they become serious threats.", icon: ScanSearch, href: "/services/vulnerability-assessment-and-penetration-testing" },
  { number: "02", title: "GRC & Cybersecurity Advisory", label: "Make risk actionable", text: "Practical guidance to understand requirements, identify gaps, improve processes, and establish stronger security practices.", icon: ShieldCheck, href: "/services/grc-advisory" },
  { number: "03", title: "Security Analysis", label: "See what is happening", text: "Analysis of systems, security events, logs, and potential threats to help organizations detect, understand, and respond to risk.", icon: Workflow, href: "/contact" },
  { number: "04", title: "Network Security", label: "Protect the connection", text: "Assessment and strengthening of network infrastructure, configurations, connected environments, and the controls around them.", icon: Network, href: "/services/network-security" },
  { number: "05", title: "Software & Application Security", label: "Build security in", text: "Security thinking for applications, APIs, and software systems throughout development and deployment.", icon: Fingerprint, href: "/services/software-security" },
  { number: "06", title: "Cybersecurity Education & Awareness", label: "Grow security culture", text: "Helping organizations and individuals develop stronger cybersecurity knowledge and safer everyday practices.", icon: BookOpenCheck, href: "/contact" },
];

const audiences = ["Startups", "SMEs", "Technology companies", "Institutions", "Organizations with digital operations"];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#08080a] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-16 lg:pb-28 lg:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(102,47,144,.4),transparent_30%),linear-gradient(120deg,#08080a,#17101d)]" /><div className="relative mx-auto max-w-[1440px]"><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]"><span className="h-px w-10 bg-[#f27839]" /> FEDSEC / WHAT WE DO</p><h1 className="max-w-5xl text-[clamp(3rem,9vw,8rem)] font-medium leading-[.88] tracking-[-.07em]">Security work with<br /><span className="text-[#d91a63]">a point of view.</span></h1><p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">We provide practical cybersecurity services designed to help organizations identify vulnerabilities, understand their risks, strengthen their security posture, and make informed security decisions.</p></div></section>

      <section className="bg-[#efeee9] px-6 py-20 text-[#111114] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1440px]"><div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#662f90]">The service map</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">What organizations need to know, do, and improve.</h2></div><p className="max-w-xl text-lg leading-8 text-black/55">Good security is not one tool or one report. It is a connected practice that moves from seeing the risk to knowing what to do next.</p></div><div className="grid border-t border-black/15 md:grid-cols-2">{services.map((service, index) => { const Icon = service.icon; return <motion.article key={service.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .55, delay: index * .05 }} className="group border-b border-black/15 p-7 sm:p-10 lg:p-14 odd:md:border-r"><div className="flex items-start justify-between"><span className="text-sm text-[#d91a63]">{service.number}</span><Icon size={26} strokeWidth={1.4} className="text-black/35 transition-colors group-hover:text-[#d91a63]" /></div><p className="mt-14 text-xs font-semibold uppercase tracking-[.18em] text-[#662f90]">{service.label}</p><h3 className="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-[-.03em] sm:text-3xl">{service.title}</h3><p className="mt-5 max-w-xl text-base leading-7 text-black/55">{service.text}</p><Link href={service.href} className="mt-8 inline-flex items-center gap-3 border-b border-black/25 pb-2 text-xs font-semibold uppercase tracking-[.16em]">Explore the service <ArrowUpRight size={16} /></Link></motion.article>; })}</div></div></section>

      <section className="bg-[#d91a63] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-white/70">Who we serve</p><h2 className="text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">Security that meets your stage.</h2></div><div className="grid border-t border-white/30 sm:grid-cols-2">{audiences.map((audience, index) => <div key={audience} className="border-b border-white/30 py-5 sm:px-5"><span className="mr-3 text-xs text-white/60">0{index + 1}</span><span className="text-lg">{audience}</span></div>)}</div></div></section>

      <section className="bg-[#08080a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#f27839]">How we work</p><h2 className="max-w-3xl text-4xl font-medium leading-[.92] tracking-[-.05em] sm:text-6xl">Understand first.<br /><span className="text-white/35">Recommend clearly.</span></h2></div><p className="max-w-xl text-lg leading-8 text-white/55">We start by understanding the organization, not simply looking for vulnerabilities. We assess, analyze, recommend, and strengthen with actions that can realistically be implemented.</p></div></section>

      <CTABanner />
    </>
  );
}
