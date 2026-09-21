"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  springTransition,
} from "@/lib/animations";

const services = [
  {
    category: "Assessment",
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Identify, analyze, and remediate security vulnerabilities across your digital infrastructure with comprehensive VAPT services.",
    slug: "vulnerability-assessment-and-penetration-testing",
  },
  {
    category: "Governance",
    title: "GRC Advisory",
    description: "Strategic governance, risk management, and compliance advisory to align your security program with business objectives.",
    slug: "grc-advisory",
  },
  {
    category: "Defense",
    title: "Network Security",
    description: "End-to-end network security solutions to protect infrastructure from unauthorized access, malware, and network-based attacks.",
    slug: "network-security",
  },
  {
    category: "Development",
    title: "Software Security",
    description: "Secure software development practices and application security testing built into your development lifecycle.",
    slug: "software-security",
  },
  {
    category: "Operations",
    title: "Security Operations",
    description: "Managed security operations with continuous monitoring, threat detection, and rapid response capabilities.",
    slug: "security-operations",
  },
  {
    category: "Response",
    title: "Incident Response",
    description: "Rapid incident response and digital forensics to contain breaches, investigate attacks, and restore operations.",
    slug: "incident-response",
  },
];

const caseStudies = [
  {
    name: "FinTech Security Assessment",
    industry: "Financial Technology",
    location: "Nigeria",
    description: "Comprehensive VAPT engagement identifying critical vulnerabilities across web applications and APIs.",
  },
  {
    name: "Healthcare Compliance Program",
    industry: "Healthcare",
    location: "Nigeria",
    description: "GRC advisory establishing ISO 27001-aligned security governance and regulatory compliance.",
  },
  {
    name: "Enterprise Network Hardening",
    industry: "Enterprise Technology",
    location: "Nigeria",
    description: "Network security assessment implementing zero trust architecture and continuous monitoring.",
  },
  {
    name: "E-Commerce Platform Protection",
    industry: "E-Commerce",
    location: "United Kingdom",
    description: "Full-stack security assessment covering applications, APIs, and cloud infrastructure.",
  },
  {
    name: "SaaS Security Audit",
    industry: "Technology",
    location: "United States",
    description: "Software security review and DevSecOps implementation for a fast-growing SaaS platform.",
  },
  {
    name: "Government Cybersecurity Framework",
    industry: "Government",
    location: "Ghana",
    description: "GRC advisory and security operations setup for a digital transformation initiative.",
  },
];

const differentiators = [
  {
    title: "We Know Your Risk",
    description: "$190M+ in risk reduction for clients. Every assessment is tied to business outcomes and actionable remediation.",
  },
  {
    title: "Multidisciplinary Coverage",
    description: "60+ specialists across VAPT, GRC, network, software, SOC, and incident response — not a single-focus shop.",
  },
  {
    title: "A Team That Works Like a Partner",
    description: "1.2M+ hours of combined security experience. We embed with your team, not just deliver a report.",
  },
  {
    title: "Your Security Is Our Only Metric",
    description: "We measure success by risk reduced, vulnerabilities closed, and resilience built — not hours billed.",
  },
  {
    title: "Long-Term Partnerships",
    description: "Strategies designed for 3-year security maturity, not just 3-month engagements.",
  },
  {
    title: "Continuous Optimization",
    description: "Continuous monitoring, testing, and adjustment. Security is a process, not a project.",
  },
];

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

const stats = [
  { value: "500+", label: "Security Assessments" },
  { value: "$190M+", label: "Risk Reduced for Clients" },
  { value: "6", label: "Service Lines" },
  { value: "24/7", label: "SOC Monitoring" },
];

const trustBadges = [
  "ISO 27001",
  "PCI DSS",
  "SOC 2",
  "GDPR",
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fedsec-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,47,144,0.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fedsec-purple/20 border border-fedsec-purple/30 text-fedsec-purple text-sm font-medium font-[family-name:var(--font-accent)]">
              <Shield size={16} />
              Multidisciplinary Cybersecurity Firm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-fedsec-white leading-[1.1] mb-8 font-[family-name:var(--font-heading)]"
          >
            Cybersecurity{" "}
            <span className="gradient-text">that Delivers Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-fedsec-gray-400 max-w-2xl mb-10 leading-relaxed font-[family-name:var(--font-body)]"
          >
            We build security strategies that protect your organization, reduce
            risk, and strengthen resilience. From VAPT and GRC advisory to
            incident response, we have secured 500+ organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
          >
            <Button href="/contact" size="lg">
              Know Your Risk
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-fedsec-gray-600 text-fedsec-white hover:bg-fedsec-white hover:text-fedsec-black">
              Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fedsec-purple/20 flex items-center justify-center">
                  <Shield size={18} className="text-fedsec-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fedsec-white font-[family-name:var(--font-accent)]">{badge}</p>
                  <p className="text-xs text-fedsec-gray-400">Certified</p>
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

function PartnerLogos() {
  return (
    <section className="py-8 border-b border-fedsec-gray-800 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-hidden">
          <span className="text-xs text-fedsec-gray-500 font-[family-name:var(--font-accent)] whitespace-nowrap">
            Trusted by:
          </span>
          <div className="flex items-center gap-12 animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-sm text-fedsec-gray-600 font-[family-name:var(--font-accent)] whitespace-nowrap"
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

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            Our Services
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
            Our <span className="gradient-text">Security Services</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
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
              <Link href={`/services/${service.slug}`} className="group block h-full p-8 bg-fedsec-gray-900 border border-fedsec-gray-800 rounded-2xl hover:border-fedsec-purple/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-fedsec-purple/20 flex items-center justify-center mb-6 group-hover:bg-fedsec-purple group-hover:text-white transition-all">
                  <Shield size={24} className="text-fedsec-purple group-hover:text-white" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-fedsec-pink mb-3 font-[family-name:var(--font-accent)]">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-fedsec-gray-400 leading-relaxed mb-6 font-[family-name:var(--font-body)]">
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

function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
              Case Studies
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
              Organizations{" "}
              <span className="gradient-text">Weve Secured</span>
            </motion.h2>
          </div>
          <Link href="/case-studies" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
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
          {caseStudies.map((cs) => (
            <motion.div key={cs.name} variants={fadeInUp}>
              <div className="group bg-fedsec-black border border-fedsec-gray-800 rounded-2xl overflow-hidden hover:border-fedsec-purple/30 transition-all duration-300">
                <div className="aspect-[16/10] bg-gradient-to-br from-fedsec-purple/20 to-fedsec-pink/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield size={48} className="text-fedsec-purple/30" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-fedsec-pink font-[family-name:var(--font-accent)]">
                      {cs.industry}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-fedsec-gray-600" />
                    <span className="text-xs text-fedsec-gray-500 font-[family-name:var(--font-accent)]">
                      {cs.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-fedsec-white mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                    {cs.name}
                  </h3>
                  <p className="text-sm text-fedsec-gray-400 leading-relaxed mb-4 font-[family-name:var(--font-body)]">
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

function DifferentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
            What Makes Our{" "}
            <span className="gradient-text">Security Different</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Every strategy starts with one question: what does secure growth
            look like for your business?
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-fedsec-gray-900 border border-fedsec-gray-800 rounded-2xl hover:border-fedsec-purple/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-sm text-fedsec-gray-400 leading-relaxed font-[family-name:var(--font-body)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
                {stat.value}
              </p>
              <p className="text-sm text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            Client Sectors
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
            Real Clients.{" "}
            <span className="gradient-text">Real Protection.</span>
          </motion.h2>
        </motion.div>

        <div className="flex items-center gap-8 overflow-hidden py-8">
          <div className="flex items-center gap-12 animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-lg text-fedsec-gray-600 font-[family-name:var(--font-accent)] whitespace-nowrap"
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

function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            Industries
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
            Industries We{" "}
            <span className="gradient-text">Secure</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
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
              className="p-6 bg-fedsec-black border border-fedsec-gray-800 rounded-xl text-center hover:border-fedsec-purple/30 transition-all duration-300"
            >
              <Shield size={24} className="text-fedsec-purple mx-auto mb-3" />
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

function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
              About FEDSEC
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
              Different Expertise.{" "}
              <span className="gradient-text">One Collective.</span>
            </h2>
            <p className="text-lg text-fedsec-gray-400 leading-relaxed mb-6 font-[family-name:var(--font-body)]">
              FEDSEC is a multidisciplinary cybersecurity firm built on trust,
              expertise, and collaboration. We deliver VAPT, GRC advisory,
              network security, software security, security operations, and
              incident response services.
            </p>
            <p className="text-lg text-fedsec-gray-400 leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              Our team combines strategic thinking with deep technical expertise
              to help organizations know their risk and build lasting resilience
              against evolving cyber threats.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]"
            >
              Learn about us <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-fedsec-gray-900 border border-fedsec-gray-800 rounded-2xl p-8 mb-6">
              <p className="text-lg text-fedsec-gray-400 leading-relaxed mb-6 italic font-[family-name:var(--font-body)]">
                &ldquo;Security is not just about responding to threats — it&apos;s
                about knowing your risk before they become incidents.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-fedsec-purple/20 flex items-center justify-center">
                  <Shield size={20} className="text-fedsec-purple" />
                </div>
                <div>
                  <p className="font-semibold text-fedsec-white font-[family-name:var(--font-heading)]">Francis Buchi</p>
                  <p className="text-sm text-fedsec-gray-500">Founder / Tech Lead</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-fedsec-gray-900 border border-fedsec-gray-800 rounded-2xl text-center">
                <p className="text-3xl font-bold gradient-text mb-1 font-[family-name:var(--font-heading)]">500+</p>
                <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">Assessments Completed</p>
              </div>
              <div className="p-6 bg-fedsec-gray-900 border border-fedsec-gray-800 rounded-2xl text-center">
                <p className="text-3xl font-bold gradient-text mb-1 font-[family-name:var(--font-heading)]">99.9%</p>
                <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">Risk Reduction Accuracy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            Get Started
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
            Your Growth Partner,{" "}
            <span className="gradient-text">Not Just Another Firm</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-400 max-w-2xl mx-auto mb-10 font-[family-name:var(--font-body)]">
            Trusted by leading organizations and recognized for our expertise.
            Let us help you know your risk and build lasting resilience.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-fedsec-gray-600 text-fedsec-white hover:bg-fedsec-white hover:text-fedsec-black">
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <ServicesSection />
      <CaseStudiesSection />
      <DifferentSection />
      <StatsSection />
      <ClientsSection />
      <IndustriesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
