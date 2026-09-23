"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ShieldCheck,
  ArrowRight,
  Search,
  Layers,
  Zap,
  CheckCircle,
  Quote,
  Play,
  Crosshair,
  Radar,
  Target,
  FileCheck,
  Eye,
  Terminal,
  Network,
  Lock,
  GraduationCap,
  Building2,
  Rocket,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

/* ─── Data ─────────────────────────────────────────────── */

const team = [
  {
    name: "Nwachukwu Francis O.",
    role: "Founder / Tech Lead",
    bio: "Cybersecurity analyst and CTF player ranked in TryHackMe's top 2%. Leads FEDSEC's technical bench across network security, threat analysis, and SOC operations.",
    image: "/images/team/francis.png",
    cv: null,
    short: "F",
  },
  {
    name: "Abang Obed",
    role: "Lead Security Engineer",
    bio: "Six years across security operations, application security, offensive security, and detection engineering. CPTS certified, credited on GitHub and X security advisories.",
    image: "/images/team/obed.png",
    cv: "/images/resumes/obed-cv.pdf",
    short: "O",
  },
  {
    name: "Ridwan Adebayo",
    role: "Penetration Tester",
    bio: "Five+ years in offensive security. Advises Nigeria's Police Force National Cyber Crime Center, 35+ accepted bug bounty reports across Bugcrowd and YesWeHack.",
    image: "/images/team/ridwan.png",
    cv: "/images/resumes/ridwan-cv.pdf",
    short: "R",
  },
  {
    name: "Agnes Akpa",
    role: "Cyber Security Analyst",
    bio: "Head of Security at FiatRouter. Blends technical depth with risk governance and business alignment. (ISC)2 Certified in Cybersecurity, DevSecOps, and Google Cybersecurity certified.",
    image: "/images/team/agnes.png",
    cv: "/images/resumes/agnes-cv.docx",
    short: "A",
  },
  {
    name: "Isah Dauda",
    role: "Security Researcher",
    bio: "Full-stack blockchain engineer who audits from the inside out. CAP and CNSP certified, hunts on Cantina, YesWeHack, and Bugcrowd, including XRP Ledger audit contests.",
    image: "/images/team/isah.png",
    cv: null,
    short: "I",
  },
  {
    name: "Badu Zaccheaus J.",
    role: "Cyber Security Analyst",
    bio: "Hands-on testing of production systems — misconfigurations, insecure headers, and web application flaws turned into clear, actionable reports. Part of the discipline behind FEDSEC's methodology: authorized, documented, and built to hold up under scrutiny.",
    image: "/images/team/badu.png",
    cv: "/images/resumes/badu-cv.docx",
    short: "B",
  },
];

const stats = [
  { target: 8, suffix: "+", label: "Security Experts", note: "One multidisciplinary collective" },
  { target: 190, prefix: "$", suffix: "M+", label: "Client Risk Reduced", note: "Across every engagement" },
  { target: 35, suffix: "+", label: "Acceptance Reports", note: "On Bugcrowd & YesWeHack" },
  { target: 12, suffix: "+", label: "Countries Served", note: "Enterprise to startup" },
  { target: 200, suffix: "+", label: "Engagements Delivered", note: "VAPT to SOC build-out" },
  { target: 24, suffix: "/7", label: "SOC Monitoring", note: "Always watching" },
];

const locations = [
  { city: "Lagos", country: "Nigeria", flag: "NG", image: "/images/locations/lagos.svg", blurb: "Headquarters — enterprise, fintech & government engagements across West Africa.", service: "/services/penetration-testing" },
  { city: "Abuja", country: "Nigeria", flag: "NG", image: "/images/locations/abuja.svg", blurb: "Advisory & compliance practice serving institutions and public sector.", service: "/services/grc-advisory" },
  { city: "Munich", country: "Germany", flag: "DE", image: "/images/locations/munich.svg", blurb: "European operations — GRC, data protection, and penetration testing.", service: "/services/grc-advisory" },
  { city: "London", country: "United Kingdom", flag: "UK", image: "/images/locations/london.svg", blurb: "Partnered delivery for UK & EU regulated organizations.", service: "/services/penetration-testing" },
  { city: "New York", country: "United States", flag: "US", image: "/images/locations/nyc.svg", blurb: "Coverage for US clients across cloud security and red teaming.", service: "/services/penetration-testing" },
  { city: "Accra", country: "Ghana", flag: "GH", image: "/images/locations/accra.svg", blurb: "West African expansion — SOC advisory and security operations.", service: "/services/soc-monitoring" },
];

const growthTabs = [
  {
    id: "red",
    label: "Red Team",
    icon: Target,
    eyebrow: "Offensive Security",
    tagline: "We attack like an adversary — before they do. Authorized, documented, and built to hold up under scrutiny.",
    description:
      "Our offensive team simulates real-world attackers against your systems. From recon to exploitation, every engagement identifies the vulnerabilities that actually matter and validates them end-to-end.",
    items: [
      { title: "Penetration Testing & VAPT", desc: "Network, web, mobile, API, and cloud penetration testing", icon: Target },
      { title: "Red Team Operations", desc: "Full-scope, multi-vector simulated attacks", icon: Crosshair },
      { title: "Web & API Security", desc: "Business-logic-driven application assessment", icon: Layers },
      { title: "Cloud Security Review", desc: "AWS, GCP, and Azure misconfiguration hunting", icon: Shield },
      { title: "Wireless & Network Testing", desc: "Infrastructure compromise — internal and external", icon: Network },
    ],
  },
  {
    id: "blue",
    label: "Blue Team",
    icon: ShieldCheck,
    eyebrow: "Defensive Security",
    tagline: "We defend in depth. Detection, response, and hardening engineered for your environment.",
    description:
      "Our defensive team builds and operates the controls that stop attackers: continuous monitoring, threat detection, log analysis, and incident response that keeps your business running.",
    items: [
      { title: "Security Operations (SOC)", desc: "24/7 monitoring with MITRE ATT&CK mapping", icon: Radar },
      { title: "Security Analysis", desc: "Log and event analysis, threat detection", icon: Eye },
      { title: "Network Security", desc: "Firewall, SD-WAN, and zero-trust hardening", icon: Lock },
      { title: "Incident Response", desc: "Containment, forensics, and recovery", icon: Zap },
      { title: "Threat Detection Engineering", desc: "Detection use cases and SIEM build-out", icon: Terminal },
    ],
  },
  {
    id: "grc",
    label: "GRC",
    icon: FileCheck,
    eyebrow: "Governance, Risk & Compliance",
    tagline: "We translate cyber risk into the language your board actually acts on.",
    description:
      "Our GRC discipline helps organizations understand security requirements, close gaps, and build programs that align compliance, business objectives, and real-world security operations.",
    items: [
      { title: "GRC Advisory", desc: "Risk frameworks aligned to business goals", icon: Shield },
      { title: "Compliance Readiness", desc: "ISO 27001, SOC 2, PCI DSS, GDPR programs", icon: FileCheck },
      { title: "Security Architecture", desc: "Secure design and system-architecture review", icon: Building2 },
      { title: "Policy & Governance", desc: "Policies, controls, and security programs", icon: Layers },
      { title: "Education & Awareness", desc: "Training that changes behavior", icon: GraduationCap },
    ],
  },
];

const testimonials = [
  {
    quote:
      "FEDSEC transformed our approach to security. Their team identified critical vulnerabilities we had missed for years and provided a clear roadmap for remediation.",
    author: "Chief Technology Officer",
    company: "FinSecure Capital",
    tag: "VAPT · Nigeria",
  },
  {
    quote:
      "The penetration testing engagement was thorough, professional, and delivered actionable results. FEDSEC's team went above and beyond to help us understand and prioritize findings.",
    author: "Head of Engineering",
    company: "CloudSync Technologies",
    tag: "Web & API Security · UK",
  },
  {
    quote:
      "Their GRC advisory services helped us achieve ISO 27001 certification in record time. The team understood our business needs and designed a program that actually works for us.",
    author: "Chief Information Security Officer",
    company: "NexaBank",
    tag: "GRC · Germany",
  },
];

const caseStudies = [
  {
    name: "SOC Build-Out, Zero to Detection",
    industry: "Financial Services",
    location: "Nigeria",
    description:
      "Designed and built a bank's SOC from scratch — SIEM/SOAR platforms and 200+ detection use cases mapped to MITRE ATT&CK.",
  },
  {
    name: "Web & API Security Assessment",
    industry: "Technology",
    location: "United Kingdom",
    description:
      "Full-stack security assessment of a SaaS platform, uncovering business-logic flaws and critical API vulnerabilities.",
  },
  {
    name: "ISO 27001 Compliance Program",
    industry: "Healthcare",
    location: "Germany",
    description:
      "GRC advisory establishing auditable security governance, controls, and documentation toward certification.",
  },
  {
    name: "Enterprise Network Hardening",
    industry: "Enterprise",
    location: "Nigeria",
    description:
      "Zero-trust architecture review, firewall segmentation, and continuous monitoring across a corporate estate.",
  },
  {
    name: "E-Commerce Platform Protection",
    industry: "E-Commerce",
    location: "United States",
    description:
      "Application, API, and cloud infrastructure security for a high-traffic retail platform.",
  },
  {
    name: "Government Cybersecurity Framework",
    industry: "Government",
    location: "Ghana",
    description:
      "SOC advisory and security operations setup for a national digital transformation initiative.",
  },
];

const whyCards = [
  {
    title: "We Identify Hidden Vulnerabilities",
    description:
      "Manual, adversarial testing that finds what scanners miss — misconfigurations, logic flaws, and exploitable chains.",
  },
  {
    title: "We Reduce Attack Surface",
    description:
      "Prioritized remediation that closes the real paths attackers take, not a generic checklist.",
  },
  {
    title: "A Team That Works Like a Partner",
    description:
      "Disciplines — offensive, defensive, GRC, network, software — working as one collective on your bench.",
  },
  {
    title: "Your Security Is Our Only Metric",
    description:
      "We measure success by risk reduced and resilience built, not hours billed or reports delivered.",
  },
  {
    title: "Long-Term Security Maturity",
    description:
      "Programs designed for where your business is three years from now, not a three-month engagement.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Monitoring, retesting, and adjustment. Security is a process, not a project.",
  },
];

const processSteps = [
  {
    number: "01",
    kicker: "Discover",
    title: "Reconnaissance",
    description:
      "We map your attack surface — domains, infrastructure, applications, cloud, and exposed services — and understand your business objectives.",
    icon: Radar,
  },
  {
    number: "02",
    kicker: "Identify",
    title: "Fingerprinting",
    description:
      "We fingerprint technologies, versions, and configurations to profile the environment and shortlist likely weak points.",
    icon: Search,
  },
  {
    number: "03",
    kicker: "Attack",
    title: "Exploitation & Validation",
    description:
      "We validate vulnerabilities in a controlled, authorized way — chaining real-world attack paths to prove impact, not guess.",
    icon: Target,
  },
  {
    number: "04",
    kicker: "Deliver",
    title: "Reporting & Remediation",
    description:
      "You get prioritized findings with practical remediation guidance, then we retest and help your team implement fixes.",
    icon: FileCheck,
  },
];

const postEngagement = [
  {
    title: "Ongoing Review",
    description:
      "Regular reassessment to keep defenses current against an evolving threat landscape.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Detection tuning, threat intelligence, and iterative hardening between engagements.",
  },
  {
    title: "Long-Term Support",
    description:
      "Dedicated advisory as your security program and maturity grow with your business.",
  },
];

const industries = [
  "Finance & Banking",
  "Healthcare",
  "Technology & SaaS",
  "Government",
  "E-Commerce & Retail",
  "Education",
  "Energy & Utilities",
  "Telecommunications",
  "Manufacturing",
  "Transportation",
];

const audiences = [
  {
    title: "Startups and Founders",
    description:
      "You are building from scratch and every dollar needs to work. We help early-stage companies build a secure foundation and attract their first enterprise contracts.",
    icon: Rocket,
  },
  {
    title: "Growing Businesses",
    description:
      "You have product-market fit and want security that scales. We come in as a strategic partner building detection, testing, and compliance programs that compound over time.",
    icon: Briefcase,
  },
  {
    title: "Enterprise & Institutions",
    description:
      "You operate at scale across markets and stakeholders. We handle multi-country assessments, enterprise GRC programs, and SOC operations where stakes are high.",
    icon: Building2,
  },
  {
    title: "NGOs & Public Sector",
    description:
      "Your audience is donors, constituents, and communities. We deliver compliance-aware, budget-efficient security that balances reach and credibility.",
    icon: HeartHandshake,
  },
];

const trustBadges = ["VAPT", "GRC Advisory", "SOC Operations", "Red Team", "ISO 27001 Aligned"];

/* ─── TouchMove (socialander title/subtitle) ──────────── */

function TouchMove({
  children,
  className = "",
  strength = 12,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div ref={ref} className={`touch-move transition-transform duration-300 ease-out will-change-transform ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

/* ─── CursorFollow (FNZ click-follow) ─────────────────── */

function CursorFollow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const onClick = (e: MouseEvent) => {
      const el = document.createElement("div");
      el.className = "cursor-dot is-active";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.width = "80px";
      el.style.height = "80px";
      el.style.background = "rgba(218,26,93,0.25)";
      document.body.appendChild(el);
      setTimeout(() => {
        el.style.opacity = "0";
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%) scale(3)`;
      }, 20);
      setTimeout(() => el.remove(), 350);
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.dataset.x = String(tx);
        dotRef.current.dataset.y = String(ty);
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
    </>
  );
}

/* ─── Sections ─────────────────────────────────────────── */

function HeroSection() {
  const words = ["Know", "Your", "Risk."];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fedsec-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,47,144,0.18),transparent_70%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/fedsec-brand-video-poster.jpg"
      >
        <source src="/images/fedsec-brand-video.mp4" type="video/mp4" />
      </video>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-fedsec-purple text-xs sm:text-sm font-medium font-[family-name:var(--font-accent)]">
              <Shield size={14} />
              Different Expertise. One Collective.
            </span>
          </motion.div>

          <TouchMove strength={10}>
            <h1 className="text-[40px] sm:text-6xl md:text-7xl lg:text-[92px] font-bold text-fedsec-white leading-[1.05] mb-6 sm:mb-8 font-[family-name:var(--font-heading)] tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block mr-[0.25em] ${word === "Risk." ? "gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </TouchMove>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <TouchMove strength={6}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-body)]">
                A multidisciplinary cybersecurity collective. Red team and blue
                team, GRC and engineering — different expertise working as one
                to find the risk before it finds you.
              </p>
            </TouchMove>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Link href="/contact" className="grow-pill growable">
              <span className="pill-label">Know Your Risk</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/services" className="grow-pill grow-pill-outline growable">
              <span className="pill-label">Our Services</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Shield size={14} className="text-fedsec-purple" />
                <span className="text-xs sm:text-sm font-semibold text-white/60 font-[family-name:var(--font-accent)]">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fedsec-purple/50 to-transparent" />
    </section>
  );
}

function PartnerLogosMarquee() {
  const items = [
    "Financial Institutions", "Healthcare", "Technology & SaaS", "Government",
    "E-Commerce", "Education", "Energy", "Telecommunications",
  ];
  return (
    <section className="py-6 border-b border-white/6 bg-fedsec-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <span className="text-xs text-white/40 font-[family-name:var(--font-accent)] whitespace-nowrap uppercase tracking-wider">
            Secured sectors:
          </span>
          <div className="flex items-center gap-12 animate-marquee">
            {[...items, ...items].map((client, i) => (
              <span key={i} className="text-sm text-white/40 font-[family-name:var(--font-accent)] whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Numbers — "Our Numbers Do the Talking for Us" (socialander) */
function NumbersSection() {
  return (
    <section className="relative py-24 md:py-28 bg-fedsec-black overflow-hidden">
      <div className="absolute -top-40 left-1/4 w-96 h-96 blob-purple" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 blob-pink opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Our Numbers Do the Talking for Us</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            A Collective Built on{" "}
            <span className="gradient-text">Proof, Not Promises</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Different disciplines. One standard. Measured entirely on the risk we
            reduce and the resilience we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="stat-orb p-6 md:p-8 text-center hover:border-fedsec-purple/30 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                <AnimatedCounter target={stat.target} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)]">
                {stat.label}
              </p>
              <p className="text-xs text-white/30 mt-1 hidden sm:block font-[family-name:var(--font-body)]">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Where We Work (socialander global locations) */
function LocationsSection() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Where We Work</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Local Business on a{" "}
            <span className="gradient-text">Global Collective</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Delivered across multiple locations through a globally connected
            team — consistent standards, reliable communication, and effective
            delivery regardless of region.
          </p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:overflow-visible lg:flex-wrap lg:justify-center">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="snap-start shrink-0 w-[320px] sm:w-[360px] group relative rounded-2xl overflow-hidden card-glow hover:border-fedsec-purple/40 transition-all duration-300"
            >
              <Link href={loc.service} className="block relative h-56 overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`${loc.city}, ${loc.country}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fedsec-black via-black/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 bg-fedsec-purple/20 mix-blend-multiply" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]">{loc.city}</h3>
                    <span className="text-2xl">{loc.flag}</span>
                  </div>
                  <p className="text-xs font-semibold text-fedsec-pink font-[family-name:var(--font-accent)]">{loc.country}</p>
                  <p className="text-sm text-white/60 leading-relaxed mt-3 font-[family-name:var(--font-body)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {loc.blurb}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-fedsec-purple mt-3 font-[family-name:var(--font-accent)]">
                    View services <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* How We Grow Your Brand (socialander tabs → red/blue/GRC) */
function GrowthTabs() {
  const [active, setActive] = useState(0);
  const tab = growthTabs[active];

  return (
    <section className="py-24 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag">How We Secure Your Business</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Red Team. Blue Team.{" "}
            <span className="gradient-text">GRC.</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            We combine offensive and defensive security perspectives with
            governance, risk, and compliance — a super team of cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col gap-3"
          >
            {growthTabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`group flex-1 lg:flex-none flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 border font-[family-name:var(--font-accent)] ${
                  active === i
                    ? t.id === "red"
                      ? "bg-fedsec-red/20 border-fedsec-red/50 text-fedsec-white glow-red"
                      : t.id === "blue"
                      ? "bg-fedsec-blue/20 border-fedsec-blue/50 text-fedsec-white glow-blue"
                      : "bg-fedsec-emerald/20 border-fedsec-emerald/50 text-fedsec-white glow-emerald"
                    : "glass border-transparent text-white/40 hover:text-fedsec-white"
                }`}
              >
                <span
                  className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    active === i
                      ? "bg-fedsec-purple/15 text-fedsec-purple"
                      : "bg-fedsec-purple/10 text-fedsec-purple"
                  }`}
                >
                  <t.icon size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest opacity-60 text-[10px]">
                    {t.eyebrow}
                  </span>
                  <span className="block font-bold text-sm">{t.label}</span>
                </span>
              </button>
            ))}
          </motion.div>

          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] md:aspect-[21/10] overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/fedsec-brand-video-poster.jpg"
              >
                <source src="/images/fedsec-brand-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-fedsec-black via-transparent to-fedsec-black/40" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-accent)] ${
                    tab.id === "red"
                      ? "bg-fedsec-red text-white"
                      : tab.id === "blue"
                      ? "bg-fedsec-blue text-white"
                      : "bg-fedsec-emerald text-white"
                  }`}
                >
                  {tab.eyebrow}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                  {tab.tagline}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
                  {tab.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 md:p-8">
              {tab.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group p-6 glass rounded-2xl hover:border-fedsec-purple/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-fedsec-purple/10 flex items-center justify-center mb-4 group-hover:bg-fedsec-purple group-hover:text-white transition-colors duration-300">
                    <item.icon size={22} className="text-fedsec-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Amazing Clients, Amazing Results (socialander testimonials + video) */
function ResultsSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <section className="py-24 md:py-28 bg-fedsec-gray-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 blob-purple opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Amazing Clients, Amazing Results</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Our Clients Have Seen How{" "}
            <span className="gradient-text">We Deliver</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          <div className="lg:col-span-2">
            <div className="video-frame h-full min-h-[260px]">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
                poster="/images/fedsec-brand-video-poster.jpg"
              >
                <source src="/images/fedsec-brand-video.mp4" type="video/mp4" />
              </video>
              {!playing && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play FEDSEC brand film"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                  <div className="relative w-20 h-20 rounded-full bg-fedsec-purple/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-purple">
                    <Play size={30} className="text-white ml-1" />
                  </div>
                  <span className="absolute bottom-6 left-6 text-white text-sm font-semibold font-[family-name:var(--font-accent)]">
                    Watch our brand film
                  </span>
                </button>
              )}
              {playing && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Pause video"
                >
                  <div className="w-16 h-16 rounded-full bg-fedsec-purple/70 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap size={26} className="text-white" />
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 glass rounded-2xl flex gap-5"
              >
                <Quote size={28} className="text-fedsec-purple flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70 leading-relaxed mb-4 italic font-[family-name:var(--font-body)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-fedsec-white text-sm font-[family-name:var(--font-heading)]">
                        {t.author}
                      </p>
                      <p className="text-sm text-fedsec-pink font-[family-name:var(--font-accent)]">
                        {t.company}
                      </p>
                    </div>
                    <span className="text-xs text-white/30 font-[family-name:var(--font-accent)]">
                      {t.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Real Results — card grid (socialander case-study cards) */
function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <div>
            <span className="section-tag">Real Clients. Real Results.</span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 font-[family-name:var(--font-heading)] tracking-tight">
              We Let the Work{" "}
              <span className="gradient-text">Speak for Itself</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]"
          >
            See all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link href="/case-studies" className="group block glass card-glow rounded-2xl overflow-hidden h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={`/images/protexy/cases/case${(i % 6) + 1}.png`}
                    alt={cs.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fedsec-pink font-[family-name:var(--font-accent)]">
                      {cs.industry}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-white/40 font-[family-name:var(--font-accent)]">
                      {cs.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)] leading-snug">
                    {cs.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4 font-[family-name:var(--font-body)]">
                    {cs.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple group-hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
                    See case study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* How We Do It (novora-style hacking process) */
function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-tag">[ How We Do It ]</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 font-[family-name:var(--font-heading)] tracking-tight">
            The Hacking Process,{" "}
            <span className="gradient-text">Done Properly</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative p-8 glass rounded-2xl overflow-hidden hover:border-fedsec-purple/30 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.06] font-[family-name:var(--font-heading)] select-none">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center mb-6 group-hover:bg-fedsec-purple transition-colors duration-300">
                <step.icon size={24} className="text-fedsec-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-fedsec-pink mb-2 font-[family-name:var(--font-accent)]">
                {step.kicker}
              </span>
              <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Reconnaissance", "Fingerprinting", "Exploitation", "Reporting"].map((label) => (
            <span key={label} className="px-5 py-2 rounded-full glass text-sm text-white/40 font-[family-name:var(--font-accent)]">
              {label}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-fedsec-white mb-8 text-center font-[family-name:var(--font-heading)]">
            What Happens After Engagement?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postEngagement.map((item) => (
              <div key={item.title} className="p-6 glass rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-fedsec-purple/20 flex items-center justify-center mb-4">
                  <CheckCircle size={20} className="text-fedsec-purple" />
                </div>
                <h4 className="font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Why FEDSEC (socialander "Why Brands Choose") */
function WhyFEDSEC() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Why Brands Choose FEDSEC</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            With Expertise Across the{" "}
            <span className="gradient-text">Entire Security Stack</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            A super team of cybersecurity — offense, defense, governance, and
            engineering aligned precisely with your business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="p-8 glass card-glow rounded-2xl"
            >
              <span className="block text-3xl font-bold text-white/[0.08] mb-4 font-[family-name:var(--font-heading)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* About / Team card (socialander about-us with CV links + reveal) */
function AboutCard() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-900 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-pink opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-tag">About Us</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Built on Trust.{" "}
            <span className="gradient-text">Driven by Expertise.</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-3xl font-[family-name:var(--font-body)]">
            FED was inspired by the Latin <em>fiducia</em> — trust. SEC is the
            security we deliver. Purple, the meeting of blue (defense) and red
            (offense) — the coming together of different disciplines into one
            collective. The team below is that collective.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500">
                <h3 className="text-base md:text-lg font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-fedsec-pink font-semibold font-[family-name:var(--font-accent)]">
                  {member.role}
                </p>
              </div>

              <div
                className={`absolute inset-0 p-5 flex flex-col justify-end bg-fedsec-purple/90 transition-all duration-500 ${
                  active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-sm font-bold text-white mb-2 font-[family-name:var(--font-heading)] leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-white/85 leading-relaxed mb-4 overflow-hidden line-clamp-5 font-[family-name:var(--font-body)]">
                  {member.bio}
                </p>
                <div className="flex items-center gap-3">
                  {member.cv ? (
                    <>
                      <a
                        href={member.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3 py-2 rounded-full transition-colors font-[family-name:var(--font-accent)]"
                      >
                        <FileCheck size={14} /> View CV
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-fedsec-black bg-white hover:bg-fedsec-gray-100 px-3 py-2 rounded-full transition-colors font-[family-name:var(--font-accent)]"
                      >
                        Work with {member.short} <ArrowRight size={12} />
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-fedsec-black bg-white hover:bg-fedsec-gray-100 px-3 py-2 rounded-full transition-colors font-[family-name:var(--font-accent)]"
                    >
                      Work with {member.short} <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link href="/about" className="grow-pill growable">
            <span className="pill-label">More About the Collective</span>
            <span className="pill-icon">
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* We Know What Different Businesses Need (socialander audiences) */
function AudiencesSection() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Who We Serve</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            We Know What Different{" "}
            <span className="gradient-text">Businesses Need</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Whatever stage you are at, if security is the goal, we have done
            this before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group p-8 glass card-glow rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center mb-5 group-hover:bg-fedsec-purple transition-colors duration-300">
                <a.icon size={24} className="text-fedsec-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {a.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Industries */
function IndustriesSection() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Industries</span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mt-4 mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Industries We <span className="gradient-text">Secure</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            A tailored approach per industry. No recycled strategies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="group p-6 glass rounded-xl text-center hover:border-fedsec-purple/20 hover:glow-sm transition-all duration-300"
            >
              <Shield size={24} className="text-fedsec-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-fedsec-white font-[family-name:var(--font-accent)]">
                {industry}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* CTA */
function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-fedsec-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/fedsec-brand-video-poster.jpg"
      >
        <source src="/images/fedsec-brand-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-fedsec-black/70 via-fedsec-black/50 to-fedsec-black" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Ready When You Are</span>
          <h2 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-fedsec-white my-6 font-[family-name:var(--font-heading)] tracking-tight">
            Your Security Partner,{" "}
            <span className="gradient-text">Not Just Another Firm</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-10 font-[family-name:var(--font-body)]">
            A super team of cybersecurity, one collective. Let us find the risk
            before the attacker does.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="grow-pill growable">
              <span className="pill-label">Contact Us</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/about" className="grow-pill grow-pill-outline growable">
              <span className="pill-label">Meet the Collective</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <CursorFollow />
      <HeroSection />
      <PartnerLogosMarquee />
      <NumbersSection />
      <LocationsSection />
      <GrowthTabs />
      <ResultsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <WhyFEDSEC />
      <AboutCard />
      <AudiencesSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}