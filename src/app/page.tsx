"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowRight,
  Search,
  Layers,
  Zap,
  CheckCircle,
  Quote,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ─── Data ─────────────────────────────────────────────── */

const trustBadges = ["ISO 27001", "PCI DSS", "SOC 2", "GDPR"];

const clients = [
  "Financial Institutions",
  "Healthcare Providers",
  "Technology Companies",
  "Government Agencies",
  "E-Commerce Platforms",
  "Educational Institutions",
  "Energy Companies",
  "Telecommunications",
];

const services = [
  {
    category: "Assessment",
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "Identify, analyze, and remediate security vulnerabilities across your digital infrastructure with comprehensive VAPT services.",
    slug: "vulnerability-assessment-and-penetration-testing",
    icon: Search,
  },
  {
    category: "Governance",
    title: "GRC Advisory",
    description:
      "Strategic governance, risk management, and compliance advisory to align your security program with business objectives.",
    slug: "grc-advisory",
    icon: Shield,
  },
  {
    category: "Defense",
    title: "Network Security",
    description:
      "End-to-end network security solutions to protect infrastructure from unauthorized access, malware, and network-based attacks.",
    slug: "network-security",
    icon: Layers,
  },
  {
    category: "Development",
    title: "Software Security",
    description:
      "Secure software development practices and application security testing built into your development lifecycle.",
    slug: "software-security",
    icon: CheckCircle,
  },
  {
    category: "Operations",
    title: "Security Operations",
    description:
      "Managed security operations with continuous monitoring, threat detection, and rapid response capabilities.",
    slug: "security-operations",
    icon: Zap,
  },
  {
    category: "Response",
    title: "Incident Response",
    description:
      "Rapid incident response and digital forensics to contain breaches, investigate attacks, and restore operations.",
    slug: "incident-response",
    icon: Shield,
  },
];

const partnershipTabs = [
  {
    label: "Financial Institutions",
    caseStudy: {
      name: "NexaBank — SOC Build-Out",
      description:
        "Designed and built NexaBank's SOC from the ground up, deploying SIEM/SOAR platforms and 200+ detection use cases mapped to MITRE ATT&CK.",
      result: "Mean time to detect reduced to under 4 hours",
    },
  },
  {
    label: "Healthcare",
    caseStudy: {
      name: "MediCore Systems — Data Protection",
      description:
        "Implemented comprehensive patient data security measures across multiple healthcare facilities with continuous compliance monitoring.",
      result: "99.7% secure access maintained across all facilities",
    },
  },
  {
    label: "Technology",
    caseStudy: {
      name: "CloudSync — Migration Security",
      description:
        "Embedded within CloudSync's migration team to provide security architecture review, cloud security validation, and continuous testing throughout migration.",
      result: "Zero security incidents during full cloud migration",
    },
  },
  {
    label: "Enterprise",
    caseStudy: {
      name: "FinSecure — VAPT Program",
      description:
        "Comprehensive vulnerability assessment and penetration testing program covering web applications, APIs, and network infrastructure.",
      result: "$190M+ in identified risk reduced",
    },
  },
];

const caseStudies = [
  {
    name: "FinSecure Security Assessment",
    industry: "Financial Services",
    location: "Nigeria",
    description:
      "Comprehensive VAPT engagement identifying critical vulnerabilities across web applications and APIs.",
  },
  {
    name: "Healthcare Compliance Program",
    industry: "Healthcare",
    location: "Nigeria",
    description:
      "GRC advisory establishing ISO 27001-aligned security governance and regulatory compliance.",
  },
  {
    name: "Enterprise Network Hardening",
    industry: "Enterprise Technology",
    location: "Nigeria",
    description:
      "Network security assessment implementing zero trust architecture and continuous monitoring.",
  },
  {
    name: "E-Commerce Platform Protection",
    industry: "E-Commerce",
    location: "United Kingdom",
    description:
      "Full-stack security assessment covering applications, APIs, and cloud infrastructure.",
  },
  {
    name: "SaaS Security Audit",
    industry: "Technology",
    location: "United States",
    description:
      "Software security review and DevSecOps implementation for a fast-growing SaaS platform.",
  },
  {
    name: "Government Cybersecurity Framework",
    industry: "Government",
    location: "Ghana",
    description:
      "GRC advisory and security operations setup for a digital transformation initiative.",
  },
];

const differentiators = [
  {
    title: "We Know Your Risk",
    description:
      "$190M+ in risk reduction for clients. Every assessment is tied to business outcomes and actionable remediation.",
  },
  {
    title: "Multidisciplinary Coverage",
    description:
      "60+ specialists across VAPT, GRC, network, software, SOC, and incident response — not a single-focus shop.",
  },
  {
    title: "A Team That Works Like a Partner",
    description:
      "1.2M+ hours of combined security experience. We embed with your team, not just deliver a report.",
  },
  {
    title: "Your Security Is Our Only Metric",
    description:
      "We measure success by risk reduced, vulnerabilities closed, and resilience built — not hours billed.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Strategies designed for 3-year security maturity, not just 3-month engagements.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Continuous monitoring, testing, and adjustment. Security is a process, not a project.",
  },
];

const stats = [
  { target: 500, suffix: "+", label: "Security Assessments" },
  { target: 190, suffix: "M+", label: "Risk Reduced for Clients" },
  { target: 6, suffix: "", label: "Service Lines" },
  { target: 24, suffix: "/7", label: "SOC Monitoring" },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your attack surface, assess your risk landscape, and understand your business objectives to build a security strategy that fits.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team architects tailored security solutions aligned with industry frameworks and your specific compliance requirements.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We implement, test, and optimize security controls through iterative cycles to ensure maximum protection and performance.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Final deployment with comprehensive documentation, team training, and handoff to your operations team or our managed SOC.",
    icon: CheckCircle,
  },
];

const postEngagement = [
  {
    title: "Ongoing Review",
    description:
      "Regular security reviews and assessments to keep your defenses current against evolving threats.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Iterative optimization of security controls, policies, and procedures based on threat intelligence.",
  },
  {
    title: "Long-Term Support",
    description:
      "Dedicated support and advisory for ongoing security maturity and compliance maintenance.",
  },
];

const testimonials = [
  {
    quote:
      "FEDSEC transformed our approach to security. Their team identified critical vulnerabilities we had missed for years and provided a clear roadmap for remediation.",
    author: "CTO",
    company: "FinSecure Capital",
    avatar: "/images/protexy/team/avatar-olivia.png",
  },
  {
    quote:
      "The penetration testing engagement was thorough, professional, and delivered actionable results. FEDSEC's team went above and beyond to help us understand and prioritize findings.",
    author: "Head of Engineering",
    company: "CloudSync Technologies",
    avatar: "/images/protexy/team/avatar-james.png",
  },
  {
    quote:
      "Their GRC advisory services helped us achieve ISO 27001 certification in record time. The team understood our business needs and designed a program that actually works for us.",
    author: "CISO",
    company: "NexaBank",
    avatar: "/images/protexy/team/avatar-emma.png",
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

/* ─── Sections ─────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fedsec-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,47,144,0.15),transparent_70%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06] pointer-events-none hidden lg:block">
        <Image src="/images/protexy/hero/home-hero-image.png" alt="" fill className="object-contain object-right" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-fedsec-purple text-xs sm:text-sm font-medium font-[family-name:var(--font-accent)]">
              <Shield size={14} />
              KNOW YOUR RISK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-fedsec-white leading-[1.08] mb-6 sm:mb-8 font-[family-name:var(--font-heading)] tracking-tight"
          >
            Cybersecurity{" "}
            <span className="gradient-text">that Delivers Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/40 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-body)]"
          >
            We build security strategies that protect your organization, reduce
            risk, and strengthen resilience. From VAPT and GRC advisory to
            incident response, we have secured 500+ organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Link href="/contact" className="grow-pill">
              <span className="pill-label">Know Your Risk</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/services" className="grow-pill grow-pill-outline">
              <span className="pill-label">Our Services</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 px-4 py-3 rounded-xl glass"
              >
                <Shield size={18} className="text-fedsec-purple" />
                <div>
                  <p className="text-sm font-semibold text-fedsec-white font-[family-name:var(--font-accent)]">
                    {badge}
                  </p>
                  <p className="text-xs text-white/40 font-[family-name:var(--font-body)]">
                    Certified
                  </p>
                </div>
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
  return (
    <section className="py-6 border-t border-b border-white/6 bg-fedsec-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <span className="text-xs text-white/40 font-[family-name:var(--font-accent)] whitespace-nowrap uppercase tracking-wider">
            Trusted by:
          </span>
          <div className="flex items-center gap-12 animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-sm text-white/40 font-[family-name:var(--font-accent)] whitespace-nowrap"
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

function ServicesGrid() {
  return (
    <section className="section-glow py-24 md:py-32 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]"
          >
            Our <span className="gradient-text">Security Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
          >
            We combine strategic thinking, technical expertise, and data-driven
            approaches to deliver cybersecurity solutions aligned with your
            business goals for sustainable protection.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeInUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full p-8 glass card-glow rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center mb-6 group-hover:bg-fedsec-purple transition-all duration-300">
                  <service.icon size={24} className="text-fedsec-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-fedsec-pink mb-3 font-[family-name:var(--font-accent)]">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple group-hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClientPartnerships() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Client Partnerships
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]"
          >
            Trusted Across{" "}
            <span className="gradient-text">Every Sector</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {partnershipTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-[family-name:var(--font-accent)] ${
                activeTab === i
                  ? "bg-fedsec-purple text-white glow-purple"
                  : "glass text-white/40 hover:text-fedsec-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-10">
            <div className="aspect-[16/6] rounded-xl mb-8 relative overflow-hidden">
              <Image
                src="/images/protexy/services/service1.png"
                alt={partnershipTabs[activeTab].caseStudy.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)]">
              {partnershipTabs[activeTab].caseStudy.name}
            </h3>
            <p className="text-white/40 leading-relaxed mb-6 font-[family-name:var(--font-body)]">
              {partnershipTabs[activeTab].caseStudy.description}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-fedsec-purple/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-fedsec-purple" />
              </div>
              <span className="text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)]">
                {partnershipTabs[activeTab].caseStudy.result}
              </span>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]"
            >
              Read success story <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 pt-12 border-t border-white/6">
          <p className="text-center text-xs text-white/40 uppercase tracking-wider mb-6 font-[family-name:var(--font-accent)]">
            Trusted by organizations across
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <span
                key={client}
                className="px-4 py-2 rounded-full glass text-xs text-white/40 font-[family-name:var(--font-accent)]"
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

function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
            >
              Case Studies
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]"
            >
              Organizations{" "}
              <span className="gradient-text">We&apos;ve Secured</span>
            </motion.h2>
          </div>
          <Link
            href="/case-studies"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]"
          >
            View all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.name} variants={fadeInUp}>
              <div className="group glass card-glow rounded-2xl overflow-hidden h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={`/images/protexy/cases/case${i + 1}.png`}
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
                  <h3 className="text-xl font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                    {cs.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4 font-[family-name:var(--font-body)]">
                    {cs.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple group-hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
                    View project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyFEDSEC() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]"
          >
            What Makes Our{" "}
            <span className="gradient-text">Security Different</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-fedsec-gray-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
          >
            Every strategy starts with one question: what does secure growth
            look like for your business?
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 bg-white border border-fedsec-gray-100 rounded-2xl hover:border-fedsec-purple/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-sm text-fedsec-gray-500 leading-relaxed font-[family-name:var(--font-body)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="py-24 md:py-32 gradient-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-[80px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm md:text-base text-white/70 font-[family-name:var(--font-accent)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]"
          >
            How We <span className="gradient-text">Do It</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative p-8 glass rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center">
                  <step.icon size={24} className="text-fedsec-purple" />
                </div>
                <span className="text-3xl font-bold text-white/10 font-[family-name:var(--font-heading)]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {["Discover", "Design", "Refine", "Deliver"].map((label) => (
            <span
              key={label}
              className="px-5 py-2 rounded-full glass text-sm text-white/40 font-[family-name:var(--font-accent)]"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-fedsec-white mb-8 text-center font-[family-name:var(--font-heading)]">
            What Happens After Engagement?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postEngagement.map((item, i) => (
              <div
                key={item.title}
                className="relative flex items-start gap-4 p-5 sm:p-6 glass rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                  <Image
                    src={`/images/protexy/services/feature${i + 1}.png`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-lg bg-fedsec-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={20} className="text-fedsec-purple" />
                </div>
                <div className="relative">
                  <h4 className="font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed font-[family-name:var(--font-body)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]"
          >
            Trusted by{" "}
            <span className="gradient-text">Organizations That Care</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white border border-fedsec-gray-200 rounded-2xl p-8 flex flex-col"
            >
              <Quote
                size={32}
                className="text-fedsec-purple/20 mb-4 flex-shrink-0"
              />
              <p className="text-fedsec-gray-700 leading-relaxed mb-6 flex-1 italic font-[family-name:var(--font-body)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-fedsec-gray-200 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-fedsec-gray-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-fedsec-gray-900 text-sm font-[family-name:var(--font-heading)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-fedsec-gray-500 font-[family-name:var(--font-body)]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Industries
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]"
          >
            Industries We{" "}
            <span className="gradient-text">Secure</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
          >
            Tailored cybersecurity approach per industry. No recycled
            strategies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry}
              variants={fadeInUp}
              className="p-6 glass rounded-xl text-center hover:border-fedsec-purple/20 hover:glow-sm transition-all duration-300 group"
            >
              <Shield
                size={24}
                className="text-fedsec-purple mx-auto mb-3 group-hover:scale-110 transition-transform"
              />
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

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-fedsec-black overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/protexy/cta/cta-bg.png" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-fedsec-black/80 via-fedsec-black/60 to-fedsec-black" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]"
          >
            Get Started
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]"
          >
            Your Growth Partner,{" "}
            <span className="gradient-text">Not Just Another Firm</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 max-w-2xl mx-auto mb-10 font-[family-name:var(--font-body)]"
          >
            Trusted by leading organizations and recognized for our expertise.
            Let us help you know your risk and build lasting resilience.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/contact" className="grow-pill">
              <span className="pill-label">Contact Us</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/services" className="grow-pill grow-pill-outline">
              <span className="pill-label">View Services</span>
              <span className="pill-icon">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogosMarquee />
      <ServicesGrid />
      <ClientPartnerships />
      <CaseStudiesSection />
      <WhyFEDSEC />
      <StatsBar />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
