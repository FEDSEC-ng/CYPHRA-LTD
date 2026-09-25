"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ShieldCheck,
  ArrowRight,
  Search,
  Layers,
  Zap,
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
import AutoCodeViewer from "@/components/home/AutoCodeViewer";
import CaseStudiesFolderStack from "@/components/home/CaseStudiesFolderStack";
import ColorSplash from "@/components/home/ColorSplash";
import LiveCode, { type CodeLine } from "@/components/home/LiveCode";
import PuzzleGradient from "@/components/home/PuzzleGradient";
import Tremble from "@/components/ui/Tremble";

/* ─── Data ─────────────────────────────────────────────── */

const team = [
  {
    name: "Nwachukwu Francis O.",
    role: "Founder / Tech Lead",
    bio: "Cybersecurity analyst and CTF player ranked in TryHackMe's top 2%. Leads CYPHRA's technical bench across network security, threat analysis, and SOC operations.",
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
    bio: "Hands-on testing of production systems — misconfigurations, insecure headers, and web application flaws turned into clear, actionable reports. Part of the discipline behind CYPHRA's methodology: authorized, documented, and built to hold up under scrutiny.",
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
  { city: "Lagos", country: "Nigeria", flag: "NG", image: "/images/locations/lagos.jpg", blurb: "Headquarters — enterprise, fintech & government engagements across West Africa.", service: "/services/vulnerability-assessment-and-penetration-testing" },
  { city: "Abuja", country: "Nigeria", flag: "NG", image: "/images/locations/abuja.jpg", blurb: "Advisory & compliance practice serving institutions and public sector.", service: "/services/grc-advisory" },
  { city: "Munich", country: "Germany", flag: "DE", image: "/images/locations/munich.jpg", blurb: "European operations — GRC, data protection, and penetration testing.", service: "/services/grc-advisory" },
  { city: "London", country: "United Kingdom", flag: "UK", image: "/images/locations/london.jpg", blurb: "Partnered delivery for UK & EU regulated organizations.", service: "/services/vulnerability-assessment-and-penetration-testing" },
  { city: "New York", country: "United States", flag: "US", image: "/images/locations/nyc.jpg", blurb: "Coverage for US clients across cloud security and red teaming.", service: "/services/vulnerability-assessment-and-penetration-testing" },
  { city: "Accra", country: "Ghana", flag: "GH", image: "/images/locations/accra.jpg", blurb: "West African expansion — SOC advisory and security operations.", service: "/services/security-operations" },
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
      "CYPHRA transformed our approach to security. Their team identified critical vulnerabilities we had missed for years and provided a clear roadmap for remediation.",
    author: "Chief Technology Officer",
    company: "FinSecure Capital",
    tag: "VAPT · Nigeria",
  },
  {
    quote:
      "The penetration testing engagement was thorough, professional, and delivered actionable results. CYPHRA's team went above and beyond to help us understand and prioritize findings.",
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

const whyCards = [
  {
    title: "We Identify Hidden Vulnerabilities",
    description:
      "Manual, adversarial testing that finds what scanners miss — logic flaws, misconfigurations, and exploitable chains.",
    image: "/images/why/why1.jpg",
    alt: "Analyst probing systems in a darkened room",
  },
  {
    title: "We Reduce Attack Surface",
    description:
      "Prioritized remediation that closes the real paths attackers take — not a generic checklist.",
    image: "/images/why/why2.jpg",
    alt: "Hardened data center corridor",
  },
  {
    title: "A Team That Works Like a Partner",
    description:
      "Offensive, defensive, GRC, network, and software disciplines working as one collective on your bench.",
    image: "/images/why/why3.jpg",
    alt: "Team collaborating around a screen",
  },
  {
    title: "Your Security Is Our Only Metric",
    description:
      "We measure success by risk reduced and resilience built — not hours billed or pages delivered.",
    image: "/images/why/why4.jpg",
    alt: "Analysts reviewing security dashboards",
  },
  {
    title: "Long-Term Security Maturity",
    description:
      "Programs designed for where your business is three years from now, not a three-month engagement.",
    image: "/images/why/why5.jpg",
    alt: "Modern enterprise architecture",
  },
  {
    title: "Continuous Optimization",
    description:
      "Monitoring, retesting, and tuning between engagements. Security is a process, not a project.",
    image: "/images/why/why6.jpg",
    alt: "Fiber patch panel under maintenance",
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

/* Hero live ops feed — interleaved red / blue / GRC stream */
const heroStream: CodeLine[] = [
  { text: "[red] nmap -sS -sV -T4 target.corp --top-ports 1000", tone: "attack" },
  { text: "[blue] pkt 10.0.4.12:443 ⇄ 91.203.x.x  TLS 1.3 hs ok", tone: "net" },
  { text: "[red] param id=104 → probing injection points", tone: "attack" },
  { text: "[grc] policy rbac/finance-portal.yaml — applying", tone: "ok" },
  { text: "[blue] SIEM rule TA0007: 14 beacon attempts blocked", tone: "net" },
  { text: "[red] [!!] SQLi confirmed — chained to admin", tone: "warn" },
  { text: "[grc] ISO 27001: 94 controls mapped · 0 majors", tone: "ok" },
  { text: "[blue] EDR quarantine: cobaltstrike.beacon.dll", tone: "warn" },
];

const heroChips = [
  { label: "TryHackMe Top 2%", icon: Crosshair },
  { label: "35+ Accepted Reports", icon: FileCheck },
  { label: "24/7 SOC Monitoring", icon: Radar },
];

/* Auto-code files — one per discipline, typed live in the rectangle viewer */

const tabCodeFiles: Record<string, { file: string; status: string; lines: CodeLine[] }> = {
  red: {
    file: "recon_redteam.ts",
    status: "authorized engagement · simulated",
    lines: [
      { text: "const target = \"client.corp\";", tone: "net" },
      { text: "const scope  = authorize({", tone: "dim" },
      { text: "  nets: [\"10.0.4.0/22\"], until: \"Q3\" });", tone: "dim" },
      { text: "", tone: "dim" },
      { text: "await recon.enumerate(target, {", tone: "net" },
      { text: "  ports: \"top-1000\", stealth: true });", tone: "net" },
      { text: "// → 47 hosts · nginx 1.24.0 · Drupal 9.5", tone: "ok" },
      { text: "", tone: "dim" },
      { text: "const sqli = await probe.param(104, {", tone: "attack" },
      { text: "  payloads: ['\u0027 OR 1=1 --'] });", tone: "attack" },
      { text: "if (sqli.confirmed) {", tone: "attack" },
      { text: "  chain([idor(), tokenReuse()])", tone: "warn" },
      { text: "    .escalateTo(\"admin\");", tone: "warn" },
      { text: "  report({ severity: \"critical\", cvss: 9.1 });", tone: "ok" },
      { text: "}", tone: "attack" },
    ],
  },
  blue: {
    file: "soc_detection.pcap",
    status: "live detection stream · 24/7",
    lines: [
      { text: "stream.on(\"packet\", (pkt) => {", tone: "net" },
      { text: "  soc.inspect(pkt); // 10.0.4.12 ⇄ 91.203.x", tone: "net" },
      { text: "}); // TLS 1.3 handshake ok", tone: "ok" },
      { text: "", tone: "dim" },
      { text: "siem.match(\"TA0007\", {", tone: "net" },
      { text: "  beacon: /cobaltstrike/, window: \"60s\" });", tone: "net" },
      { text: "// → 14 beacon attempts blocked", tone: "ok" },
      { text: "", tone: "dim" },
      { text: "edr.quarantine(\"cobaltstrike.beacon.dll\");", tone: "warn" },
      { text: "ir.open(\"#4821\", {", tone: "attack" },
      { text: "  severity: \"high\", playbook: \"C2-Contain\" });", tone: "attack" },
      { text: "dashboard.push(\"risk reduced → 41%\");", tone: "ok" },
    ],
  },
  grc: {
    file: "rbac_policy.yaml",
    status: "policy: enforced · 0 majors",
    lines: [
      { text: "policy: finance-portal", tone: "net" },
      { text: "roles:", tone: "dim" },
      { text: "  auditor:", tone: "net" },
      { text: "    allow: [read:reports]", tone: "ok" },
      { text: "  analyst:", tone: "net" },
      { text: "    allow: [read:*, write:drafts]", tone: "ok" },
      { text: "", tone: "dim" },
      { text: "controls:", tone: "dim" },
      { text: "  ISO_27001: { mapped: 94, majors: 0 }", tone: "ok" },
      { text: "  SOC_2:     { status: evidence-complete }", tone: "ok" },
      { text: "", tone: "dim" },
      { text: "enforce: rbac.apply(policy)", tone: "attack" },
      { text: "// board report: risk in business terms", tone: "dim" },
    ],
  },
};

const stepStreams: CodeLine[][] = [
  [
    { text: "nmap -sS -T4 --top-ports 1000 client.io", tone: "net" },
    { text: "Discovered 10.0.4.12 — nginx 1.24.0 :443", tone: "dim" },
    { text: "subfinder -d client.io -silent → 47 hosts", tone: "net" },
    { text: "[+] 6 assets resolve to internal ranges", tone: "ok" },
  ],
  [
    { text: "whatweb https://api.client.io", tone: "net" },
    { text: "[200] AngularJS 1.7.9 · jQuery 3.4.1", tone: "dim" },
    { text: "wafw00f: Cloudflare — bypass mapped", tone: "warn" },
    { text: "[!] Drupal 9.5 flagged — 3 CVE candidates", tone: "attack" },
  ],
  [
    { text: "param id=104 → testing injection points", tone: "attack" },
    { text: "payload: ' OR 1=1 --  →  200 OK (0.4s)", tone: "attack" },
    { text: "[!!] SQLi confirmed — read-only extraction", tone: "warn" },
    { text: "chain: user → admin via IDOR + token reuse", tone: "attack" },
  ],
  [
    { text: "CVSS 9.1 · 4 High · 11 Medium findings filed", tone: "dim" },
    { text: "remediation pack delivered — retest booked", tone: "ok" },
    { text: "policy rbac/finance-portal.yaml", tone: "net" },
    { text: "role: auditor | allow: read:reports", tone: "ok" },
  ],
];

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
      {/* fnz-style living puzzle gradient — moves by itself, hover steers it */}
      <PuzzleGradient />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* left — copy */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-fedsec-purple text-xs sm:text-sm font-medium font-[family-name:var(--font-accent)]">
                <Shield size={14} />
                Different Expertise. One Collective.
              </span>
            </motion.div>

            <TouchMove strength={10}>
              <h1 className="text-[44px] sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-fedsec-white leading-[1.04] mb-6 sm:mb-8 font-[family-name:var(--font-heading)] tracking-tight">
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
                <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mb-10 leading-relaxed font-[family-name:var(--font-body)]">
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
              className="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-3 sm:gap-4 mb-10"
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
              className="flex flex-wrap gap-3"
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

          {/* right — live ops code sim */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block"
          >
            <div className="rounded-2xl bg-gradient-to-br from-fedsec-purple/80 via-fedsec-pink/40 to-fedsec-emerald/50 p-[1.5px] shadow-[0_0_80px_rgba(102,47,144,0.4)]">
              <div className="rounded-[15px] bg-black/85 backdrop-blur-md">
                <LiveCode
                  lines={heroStream}
                  title="cyphra@ops:~ — live collective feed"
                  interval={820}
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {heroChips.map((chip) => (
                <div
                  key={chip.label}
                  className="glass rounded-xl px-3 py-3 flex flex-col items-center gap-2 text-center"
                >
                  <chip.icon size={16} className="text-fedsec-pink" />
                  <span className="text-[11px] font-semibold text-white/60 leading-tight font-[family-name:var(--font-accent)]">
                    {chip.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute -top-6 -right-4 w-40 h-40 blob-pink opacity-60 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 blob-purple opacity-70 -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fedsec-purple/50 to-transparent" />
    </section>
  );
}

function PartnerLogosMarquee() {
  const items = [
    "Google", "X", "Tesla", "HackerOne", "Microsoft", "Amazon",
    "Netflix", "Stripe", "Cloudflare", "Meta", "Airbnb", "Slack",
  ];
  return (
    <section className="py-10 border-y border-fedsec-gray-900/10 bg-fedsec-white overflow-hidden">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-fedsec-gray-900/50 mb-6 font-[family-name:var(--font-accent)]">
        Trusted by security teams at
      </p>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex items-center gap-16 shrink-0 animate-marquee">
            {[...items, ...items, ...items].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-2xl md:text-3xl font-black tracking-tight text-fedsec-gray-900/45 whitespace-nowrap transition-colors duration-300 hover:text-fedsec-gray-900/80 font-[family-name:var(--font-heading)] cursor-default"
              >
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
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              A Collective Built on{" "}
              <span className="gradient-text">Proof, Not Promises</span>
            </h2>
          </Tremble>
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

/* Where We Work (socialander global locations — white band) */
function LocationsSection() {
  return (
    <section className="py-24 md:py-28 bg-fedsec-white text-fedsec-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,380px)_1fr] gap-10 lg:gap-14 items-center mb-12">
          {/* left column — smaller content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Where We Work</span>
            <Tremble className="mt-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                Local Business on a{" "}
                <span className="gradient-text">Global Collective</span>
              </h2>
            </Tremble>
            <p className="text-base text-fedsec-gray-500 mt-4 leading-relaxed font-[family-name:var(--font-body)]">
              Delivered across multiple locations through a globally connected
              team — consistent standards, reliable communication, and effective
              delivery regardless of region.
            </p>
            <p className="mt-6 hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fedsec-gray-900/40 font-[family-name:var(--font-accent)]">
              Drag / scroll the strip
              <ArrowRight size={14} className="text-fedsec-pink" />
            </p>
          </motion.div>

          {/* right — one straight horizontal line of city cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="snap-start shrink-0 w-[250px] group relative h-[340px] rounded-2xl overflow-hidden border border-black/10 bg-fedsec-gray-100 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_24px_50px_-18px_rgba(102,47,144,0.35)]"
              >
                <Link href={loc.service} className="relative block h-full">
                  <Image
                    src={loc.image}
                    alt={`${loc.city}, ${loc.country}`}
                    fill
                    sizes="250px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-fedsec-purple/25 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="absolute top-4 left-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                    {String(i + 1).padStart(2, "0")} · {loc.flag}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                      {loc.city}
                    </h3>
                    <p className="text-xs font-semibold text-fedsec-pink font-[family-name:var(--font-accent)]">
                      {loc.country}
                    </p>
                    <p className="text-xs text-white/70 leading-relaxed mt-2 font-[family-name:var(--font-body)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {loc.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-fedsec-purple px-3 py-1.5 rounded-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-[family-name:var(--font-accent)]">
                      View services <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
    <section className="py-24 md:py-28 bg-fedsec-black relative overflow-hidden">
      {/* mouse-following gradient interplay for the RGB section */}
      <ColorSplash mode="dark" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag">How We Secure Your Business</span>
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              Red Team. Blue Team.{" "}
              <span className="gradient-text">GRC.</span>
            </h2>
          </Tremble>
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
            {/* rectangle auto-code viewer — the discipline's live file */}
            <div className="relative p-4 sm:p-5 bg-gradient-to-br from-fedsec-purple/10 via-transparent to-fedsec-emerald/5">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 sm:top-5 sm:left-5">
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
              <AutoCodeViewer
                file={tabCodeFiles[tab.id].file}
                lines={tabCodeFiles[tab.id].lines}
                status={tabCodeFiles[tab.id].status}
                className="mt-12 h-[300px] sm:h-[340px] md:h-[380px]"
              />
            </div>

            <div className="px-6 pt-2 md:px-8">
              <h3 className="text-2xl md:text-3xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {tab.tagline}
              </h3>
              <p className="text-white/60 leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
                {tab.description}
              </p>
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

/* Amazing Clients, Amazing Results — white band with folder-stack slider */
function TestimonialFolderSlider() {
  const [idx, setIdx] = useState(0);
  const n = testimonials.length;
  const go = (dir: number) => setIdx((i) => (i + dir + n) % n);

  return (
    <div className="relative h-[440px] sm:h-[400px]">
      {testimonials.map((t, i) => {
        const depth = (i - idx + n) % n; // 0 = front
        const hidden = depth > 2;
        return (
          <motion.div
            key={t.company}
            animate={{
              y: depth === 0 ? 0 : depth * -22,
              scale: depth === 0 ? 1 : 1 - depth * 0.04,
              opacity: hidden ? 0 : depth === 0 ? 1 : 0.55,
              filter: depth === 0 ? "brightness(1)" : `brightness(${1 - depth * 0.3})`,
              zIndex: 10 - depth,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 26 }}
            className="absolute inset-x-0 top-6 bottom-0 will-change-transform"
          >
            {/* folder tab */}
            <div className="ml-6 flex h-8 w-44 items-center rounded-t-xl border border-b-0 border-black/10 bg-fedsec-gray-100 px-4">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-fedsec-gray-900/50">
                Client File {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="relative h-[calc(100%-2rem)] rounded-2xl rounded-tl-none border border-black/10 bg-white p-7 sm:p-9 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] flex flex-col">
              <Quote size={26} className="text-fedsec-purple mb-4" />
              <p className="text-fedsec-gray-600 leading-relaxed mb-6 italic flex-1 font-[family-name:var(--font-body)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-bold text-fedsec-gray-900 text-sm font-[family-name:var(--font-heading)]">
                    {t.author}
                  </p>
                  <p className="text-sm text-fedsec-pink font-[family-name:var(--font-accent)]">
                    {t.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-fedsec-gray-900/40">
                  {t.tag}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* controls */}
      <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.company}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-7 bg-fedsec-pink" : "w-2 bg-fedsec-gray-900/20 hover:bg-fedsec-gray-900/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-black/15 bg-white flex items-center justify-center text-fedsec-gray-900 hover:bg-fedsec-purple hover:text-white hover:border-fedsec-purple transition-colors"
          >
            <ArrowRight size={17} className="rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-black/15 bg-white flex items-center justify-center text-fedsec-gray-900 hover:bg-fedsec-purple hover:text-white hover:border-fedsec-purple transition-colors"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

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
    <section className="py-24 md:py-28 bg-fedsec-white text-fedsec-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-tag">Amazing Clients, Amazing Results</span>
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Our Clients Have Seen How{" "}
              <span className="gradient-text">We Deliver</span>
            </h2>
          </Tremble>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* brand film tile */}
          <div className="lg:col-span-2">
            <div className="video-frame video-frame-light h-full min-h-[280px]">
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
                  aria-label="Play brand film"
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
            <p className="mt-4 text-sm text-fedsec-gray-500 font-[family-name:var(--font-body)]">
              Real engagements. Real outcomes. The film says it better than we
              can — see how the collective works.
            </p>
          </div>

          {/* folder-stack testimonial slider */}
          <div className="lg:col-span-3">
            <TestimonialFolderSlider />
          </div>
        </div>
      </div>
    </section>
  );
}


/* How We Do It — scroll wheel; nodes locked to the X / Y / −Y / −X axes.
 * Ring rotation carries each node to the top position while counter-rotation
 * keeps every icon upright — the formation never detaches from its circle. */
function ProcessSection() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wheelRef, offset: ["start start", "end end"] });
  const spring = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.6 });
  const rotate = useTransform(spring, [0, 1], [0, 270]);
  const [active, setActive] = useState(0);

  const [vp, setVp] = useState({ w: 1200, h: 850 });
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const ringSize = Math.min(620, vp.w * 0.92);
  const orbitRadius = Math.max(158, Math.min(ringSize / 2 - 60, vp.h * 0.3));

  // nodes locked to the four axes: top (−Y), right (+X), bottom (+Y), left (−X)
  const orbitPositions = processSteps.map((_, i) => {
    const angle = (i / processSteps.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle) * orbitRadius,
      y: Math.sin(angle) * orbitRadius,
    };
  });

  useMotionValueEvent(spring, "change", (v) => {
    const idx = Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length)));
    setActive(idx);
  });

  // novora-style clockwise progress arc (fills as the wheel turns to 270°)
  const ARC_R = 47;
  const ARC_C = 2 * Math.PI * ARC_R;
  const arcOffset = useTransform(spring, [0, 1], [ARC_C, ARC_C * (1 - 270 / 360)]);

  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-900 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-tag">[ How We Do It ]</span>
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white font-[family-name:var(--font-heading)] tracking-tight">
              The Hacking Process,{" "}
              <span className="gradient-text">Done Properly</span>
            </h2>
          </Tremble>
        </motion.div>

        <div ref={wheelRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {/* orbit ring + novora progress arc */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute -rotate-90"
              style={{ width: ringSize, height: ringSize }}
            >
              <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.35" strokeDasharray="0.6 3" />
              <motion.circle
                cx="50"
                cy="50"
                r={ARC_R}
                fill="none"
                stroke="var(--color-fedsec-emerald)"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeDasharray={ARC_C}
                style={{ strokeDashoffset: arcOffset }}
              />
            </motion.svg>

            {/* rotating ring — nodes keep their circular formation */}
            <motion.div
              style={{ rotate, width: ringSize, height: ringSize }}
              className="absolute will-change-transform"
            >
              {processSteps.map((step, i) => {
                const pos = orbitPositions[i];
                const state =
                  i < active ? "done" : i === active ? "current" : "pending";
                return (
                  <div
                    key={step.number}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
                    }}
                  >
                    {/* counter-rotation pivots on the node itself → icon stays upright */}
                    <motion.div style={{ rotate: -rotate }} className="will-change-transform">
                      <div
                        className={`flex flex-col items-center gap-3 ${
                          state === "current" ? "scale-110" : "scale-100"
                        } transition-transform duration-500`}
                      >
                        <div
                          className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center border transition-all duration-500 ${
                            state === "current"
                              ? "bg-fedsec-purple/25 border-fedsec-purple shadow-[0_0_44px_rgba(102,47,144,0.45)]"
                              : state === "done"
                                ? "bg-fedsec-gray-900/60 border-fedsec-gray-700/60"
                                : "bg-fedsec-gray-900/60 border-white/10"
                          }`}
                        >
                          <step.icon
                            size={34}
                            className={`transition-colors duration-500 ${
                              state === "current"
                                ? "text-fedsec-purple"
                                : state === "done"
                                  ? "text-fedsec-gray-500"
                                  : "text-white/25"
                            }`}
                          />
                        </div>
                        <span
                          className={`hidden sm:block text-[11px] font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-accent)] transition-colors duration-500 ${
                            state === "current"
                              ? "text-fedsec-pink"
                              : state === "done"
                                ? "text-white/40"
                                : "text-white/25"
                          }`}
                        >
                          {step.kicker}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* live ops terminal — the wheel's beating heart, fixed in the center */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute z-20 w-[min(220px,58vw)] md:w-[min(380px,80vw)]"
            >
              <div className="rounded-2xl bg-fedsec-purple p-[1.5px] shadow-[0_0_60px_rgba(102,47,144,0.55)]">
                <div className="rounded-[15px] bg-fedsec-gray-900/95 p-2 md:p-3">
                  <LiveCode
                    lines={stepStreams[active]}
                    title={`step-${processSteps[active].number}-@ops:~`}
                    interval={950}
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full glass px-3 md:px-4 py-1.5 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-fedsec-pink">
                  {(() => {
                    const StepIcon = processSteps[active].icon;
                    return <StepIcon size={12} className="shrink-0" />;
                  })()}
                  {processSteps[active].number} · {processSteps[active].title}
                </span>
              </div>
              <p className="mx-auto mt-2 max-w-[300px] md:max-w-sm text-center text-[11px] md:text-sm text-white/45 leading-relaxed font-[family-name:var(--font-body)]">
                {processSteps[active].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Why Cyphra (socialander "Why Brands Choose") */
function WhyCyphra() {
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
          <span className="section-tag">Why Brands Choose CYPHRA</span>
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              With Expertise Across the{" "}
              <span className="gradient-text">Entire Security Stack</span>
            </h2>
          </Tremble>
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
              className="group glass card-glow rounded-2xl overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fedsec-black via-fedsec-black/25 to-transparent" />
                <div className="absolute inset-0 bg-fedsec-purple/15 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute left-5 bottom-4 font-mono text-xs font-bold tracking-[0.3em] text-fedsec-pink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                  {item.description}
                </p>
              </div>
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
          <span className="section-tag">Meet the Team</span>
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              Built on Trust.{" "}
              <span className="gradient-text">Driven by Expertise.</span>
            </h2>
          </Tremble>
          <p className="text-base md:text-lg text-white/40 max-w-3xl font-[family-name:var(--font-body)]">
            CYPHRA — from <em>cipher</em>, the craft of keeping what matters
            private, intact, and trusted. And like the color purple — blue
            (defense) meeting red (offense) — we bring different disciplines
            together into one collective. The team below is that collective.
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
          <Tremble className="mt-4">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              We Know What Different{" "}
              <span className="gradient-text">Businesses Need</span>
            </h2>
          </Tremble>
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
          <Tremble className="my-6">
            <h2 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-fedsec-white font-[family-name:var(--font-heading)] tracking-tight">
              Your Security Partner,{" "}
              <span className="gradient-text">Not Just Another Firm</span>
            </h2>
          </Tremble>
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
      <CaseStudiesFolderStack />
      <ProcessSection />
      <WhyCyphra />
      <AboutCard />
      <AudiencesSection />
      <CTASection />
    </>
  );
}