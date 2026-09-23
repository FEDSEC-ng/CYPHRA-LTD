"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck, Shield } from "lucide-react";
import WordByWordReveal from "@/components/ui/WordByWordReveal";
import CTABanner from "@/components/ui/CTABanner";

const springTransition = { type: "spring" as const, damping: 40, stiffness: 200 };

const team = [
  {
    name: "Nwachukwu Francis O.",
    role: "Founder / Tech Lead",
    bio: "Cybersecurity analyst and CTF player ranked in TryHackMe's top 2%, with hands-on experience spanning network security, threat analysis, and SOC operations. Holds SOC Level 1, APIsec Certified Practitioner, Practical Ethical Hacking, Cisco Network Defense, and HCIA Cloud Security credentials. Leads FEDSEC's technical bench and brand.",
    image: "/images/team/francis.png",
    cv: null,
    credentials: "TryHackMe Top 2% · SOC L1 · APIsec · CNSP",
  },
  {
    name: "Abang Obed",
    role: "Lead Security Engineer",
    bio: "Six years across security operations, application security, offensive security, and detection engineering — spanning web, API, mobile, network, cloud, and Windows internals. Secured government infrastructure at Nigeria's National Emergency Management Agency, holds CPTS, and has been credited on GitHub's and X's official security advisory programs.",
    image: "/images/team/obed.png",
    cv: "/images/resumes/obed-cv.pdf",
    credentials: "CPTS · NEMA · GitHub/X Advisories",
  },
  {
    name: "Ridwan Adebayo",
    role: "Penetration Tester",
    bio: "Cybersecurity adviser and penetration tester with five+ years in offensive security, vulnerability research, and security program advisory. Advises Nigeria's Police Force National Cyber Crime Center and leads penetration testing across government systems. 35+ accepted bug bounty reports; eCPPT, eWPT, CNSP, and Google Associate Cloud Engineer certified.",
    image: "/images/team/ridwan.png",
    cv: "/images/resumes/ridwan-cv.pdf",
    credentials: "eCPPT · eWPT · CNSP · 35+ Bounties",
  },
  {
    name: "Agnes Akpa",
    role: "Cyber Security Analyst",
    bio: "Operates at the intersection of technical security, risk governance, and business strategy — application development, cloud security, DevSecOps, and blockchain security awareness. Head of Security at FiatRouter, previously Cloud Computing Intern with NITDA's IT Hub. (ISC)² Certified in Cybersecurity, DevSecOps, and Google Cybersecurity certified.",
    image: "/images/team/agnes.png",
    cv: "/images/resumes/agnes-cv.docx",
    credentials: "(ISC)² CC · DevSecOps · Google Cyber",
  },
  {
    name: "Isah Dauda",
    role: "Full-Stack Developer & Security Researcher",
    bio: "Researcher and full-stack blockchain engineer who audits from the inside out — tracing vulnerabilities through architecture and business logic rather than relying on scanners. CAP and CNSP certified, hunts bounties across Cantina, YesWeHack, and Bugcrowd, and has competed in public audit contests including on the XRP Ledger.",
    image: "/images/team/isah.png",
    cv: null,
    credentials: "CAP · CNSP · XRP Ledger Audits",
  },
  {
    name: "Anih Kosarachi Clement",
    role: "SOC Analyst",
    bio: "Cybersecurity graduate of FUTMinna with a strong foundation in security monitoring, alert triage, incident analysis, and threat detection. Grounded in SIEM concepts, log versus event analysis, IOCs, and endpoint behavior — building toward incident response, threat hunting, and detection engineering.",
    image: "/images/team/clement.png",
    cv: "/images/resumes/clement-cv.pdf",
    credentials: "FUTMinna · SIEM · Threat Detection",
  },
  {
    name: "Olowolagba Peter",
    role: "Network Security Engineer",
    bio: "Network security specialist with hands-on experience across enterprise networking and IT security operations, gained through internships with Stanbic IBTC Pension Managers. Cisco core switching, SD-WAN, SolarWinds, ManageEngine, Forcepoint, Trellix ePO, Check Point SmartConsole, and Imperva DAM. Pursuing CCNA.",
    image: "/images/team/peter.png",
    cv: "/images/resumes/peter-cv.pdf",
    credentials: "CCNA (pursuing) · Cisco · Stanbic IBTC",
  },
  {
    name: "Badu Zaccheaus J.",
    role: "Cyber Security Analyst",
    bio: "Cybersecurity analyst with hands-on experience testing production systems — uncovering misconfigurations, insecure headers, and web application flaws, and turning findings into clear, actionable reports for stakeholders. Part of the discipline behind FEDSEC's methodology: authorized, documented, and built to hold up under scrutiny.",
    image: "/images/team/badu.png",
    cv: "/images/resumes/badu-cv.docx",
    credentials: "Web App Testing · Methodical Reporting",
  },
];

const values = [
  {
    title: "Trust",
    description: "We build relationships through reliability, transparency, and responsible security practices.",
  },
  {
    title: "Integrity",
    description: "We do what is right, even when no one is watching.",
  },
  {
    title: "Confidentiality",
    description: "We protect the information, systems, and access entrusted to us.",
  },
  {
    title: "Professionalism",
    description: "We approach every engagement with discipline, competence, and respect.",
  },
  {
    title: "Collaboration",
    description: "Different perspectives and areas of expertise create stronger security outcomes.",
  },
  {
    title: "Continuous Learning",
    description: "We stay committed to learning and keeping pace with an evolving threat landscape.",
  },
  {
    title: "Accountability",
    description: "We take responsibility for our work, our decisions, and the outcomes we deliver.",
  },
];

const stats = [
  { value: "8", suffix: "+", label: "Security experts" },
  { value: "12", suffix: "+", label: "Countries covered" },
  { value: "190", prefix: "$", suffix: "M+", label: "Client risk reduced" },
];

const approach = [
  { title: "Understand", desc: "We first understand the organization's systems, environment, objectives, and security concerns." },
  { title: "Assess", desc: "We identify vulnerabilities, risks, gaps, and weaknesses through structured security assessments." },
  { title: "Analyze", desc: "We examine findings within their wider technical and business context." },
  { title: "Recommend", desc: "We provide practical recommendations organizations can realistically implement." },
  { title: "Strengthen", desc: "We help organizations improve their security posture and become more resilient over time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
                About us
              </span>
              <WordByWordReveal
                text="Built on trust. Driven by expertise."
                className="text-4xl md:text-6xl lg:text-[64px] font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]"
              />
              <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-xl leading-relaxed mb-8">
                FEDSEC is a multidisciplinary cybersecurity firm bringing
                together professionals with diverse expertise to help
                organizations understand, manage, and strengthen their
                cybersecurity. Our foundation is trust. Our strength is
                expertise. Our advantage is collaboration.
              </p>
              <Link href="/contact" className="grow-pill growable">
                <span className="pill-label">Work with us</span>
                <span className="pill-icon">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image src="/images/protexy/about/about-main.png" alt="About FEDSEC" width={640} height={520} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-fedsec-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-fedsec-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: index * 0.1 }} className="text-center stat-orb p-8">
                <div className="text-4xl md:text-5xl font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                  {stat.prefix || ""}{stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-fedsec-purple font-[family-name:var(--font-accent)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story + values */}
      <section className="py-20 md:py-28 bg-fedsec-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">Our brand story</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
              Different Expertise.{" "}
              <span className="gradient-text">One Collective.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              FEDSEC was born from a simple idea: cybersecurity is stronger when
              different areas of expertise work together. <strong className="text-white">FED</strong> is
              inspired by the Latin <em>fiducia</em> — trust, confidence, and reliance.
              <strong className="text-white"> SEC</strong> is security, the core of what we do. Purple — the
              coming together of blue (defense) and red (offense) — represents
              the integration of different disciplines into one collective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ ...springTransition, delay: (index % 3) * 0.08 }} className="p-8 glass card-glow rounded-2xl">
                <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                  {value.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                  {value.description}
                </p>
                <div className="mt-5">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
                    Work with us <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Approach */}
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="section-tag mb-3">Our approach</p>
              <h3 className="text-2xl md:text-4xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
                Five principles guide every engagement
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {approach.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ ...springTransition, delay: i * 0.06 }} className="p-5 glass rounded-2xl text-center">
                  <span className="block text-2xl font-bold text-white/[0.08] mb-2 font-[family-name:var(--font-heading)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">{step.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-[family-name:var(--font-body)]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-fedsec-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">Our collective</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
              Experts You Can Trust
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Offense and defense, governance and engineering. A super team of
              cybersecurity — hover a specialist to see their story.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: (index % 4) * 0.08 }} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-fedsec-gray-800">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-heading)]">{member.name}</h3>
                  <p className="text-sm text-fedsec-pink font-semibold font-[family-name:var(--font-accent)]">{member.role}</p>
                  <p className="text-xs text-white/40 mt-2 hidden sm:block">{member.credentials}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.cv ? (
                    <a href={member.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-fedsec-purple/90 backdrop-blur px-3 py-2 rounded-full font-[family-name:var(--font-accent)]">
                      <FileCheck size={14} /> CV
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-fedsec-purple/90 backdrop-blur px-3 py-2 rounded-full font-[family-name:var(--font-accent)]">
                      <Shield size={14} /> Lead
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}