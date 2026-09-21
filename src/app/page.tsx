"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield } from "lucide-react";
import WordByWordReveal from "@/components/ui/WordByWordReveal";
import PartnerLogos from "@/components/ui/PartnerLogos";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  springTransition,
} from "@/lib/animations";

const services = [
  {
    icon: "/images/protexy/icons/hEdInb3mCJe8MyL1oTSA35AmZY.svg",
    category: "Assessment",
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Identify and remediate security vulnerabilities across your digital infrastructure",
    slug: "vulnerability-assessment-and-penetration-testing",
  },
  {
    icon: "/images/protexy/icons/qh9WSzmiZO49WPjU5MLP5yjGNnQ.svg",
    category: "Governance",
    title: "GRC Advisory",
    description: "Strategic governance, risk management, and compliance advisory",
    slug: "grc-advisory",
  },
  {
    icon: "/images/protexy/icons/SIb2C40P2SYrdZDpd43ru9IWG2M.svg",
    category: "Defense",
    title: "Network Security",
    description: "Protect your infrastructure from unauthorized access and network-based attacks",
    slug: "network-security",
  },
  {
    icon: "/images/protexy/icons/BiLwEGhOv1EUnb8FqA8ZzcGg.svg",
    category: "Response",
    title: "Incident Response",
    description: "Rapid breach containment, forensic investigation, and recovery",
    slug: "incident-response",
  },
];

const caseStudies = [
  {
    slug: "fintech-vapt",
    name: "FinTech Security Assessment",
    description: "Comprehensive VAPT engagement for a financial technology platform, identifying critical vulnerabilities across web applications and APIs",
    image: "/images/protexy/cases/case1.png",
    stats: [
      { value: "47", label: "Vulnerabilities Identified" },
      { value: "12", label: "Critical Findings Remediated" },
    ],
  },
  {
    slug: "healthcare-compliance",
    name: "Healthcare Compliance Program",
    description: "GRC advisory engagement for a healthcare provider, establishing ISO 27001-aligned security governance and achieving regulatory compliance",
    image: "/images/protexy/cases/case2.png",
    stats: [
      { value: "ISO", label: "27001 Compliance Achieved" },
      { value: "100%", label: "Audit Pass Rate" },
    ],
  },
  {
    slug: "enterprise-network",
    name: "Enterprise Network Hardening",
    description: "Network security assessment and remediation for a large enterprise, implementing zero trust architecture and continuous monitoring",
    image: "/images/protexy/cases/case3.png",
    stats: [
      { value: "99.9%", label: "System Uptime Maintained" },
      { value: "60%", label: "Reduction in Attack Surface" },
    ],
  },
];

const industries = [
  { icon: "/images/protexy/industries/education.svg", name: "Finance", description: "Securing financial systems and data." },
  { icon: "/images/protexy/industries/government.svg", name: "Healthcare", description: "Protecting sensitive patient data" },
  { icon: "/images/protexy/industries/sports.svg", name: "Technology", description: "Securing software and cloud platforms" },
  { icon: "/images/protexy/industries/transport.svg", name: "Enterprise", description: "Securing complex infrastructure" },
];

const blogPosts = [
  { author: "Francis Buchi", date: "Jan 22, 2026", title: "Understanding VAPT: Why your organization needs it", slug: "understanding-vapt-why-your-organization-needs-it", image: "/images/protexy/blogs/blog1.png" },
  { author: "Nwachukwu Francis O.", date: "Feb 15, 2025", title: "Building a cybersecurity governance framework from scratch", slug: "building-a-cybersecurity-governance-framework", image: "/images/protexy/blogs/blog2.png" },
  { author: "Francis Buchi", date: "Apr 27, 2026", title: "Incident response planning: A step-by-step guide", slug: "incident-response-planning-step-by-step-guide", image: "/images/protexy/blogs/blog3.png" },
  { author: "Nwachukwu Francis O.", date: "May 17, 2026", title: "Why zero trust security matters for modern organizations", slug: "why-zero-trust-security-matters-today", image: "/images/protexy/blogs/blog4.png" },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fedsec-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,47,144,0.15),transparent_70%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <WordByWordReveal
          text="Different Expertise. One Collective. Secure by Trust."
          tag="h1"
          className="text-5xl md:text-6xl lg:text-7xl font-normal text-fedsec-white leading-[1.1] mb-8 font-[family-name:var(--font-heading)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-fedsec-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-body)]"
        >
          Protect your organization with proactive cybersecurity solutions
          designed to detect threats, secure critical systems, and reduce risk
          across your digital infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg">Get started</Button>
          <Button href="/services" variant="outline" size="lg">Learn more</Button>
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
            About us
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
            Advancing cybersecurity for modern organizations
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/protexy/about/about-main.png" alt="About FEDSEC" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fedsec-purple/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-fedsec-pink/10 rounded-2xl -z-10" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-8 mb-8">
              <p className="text-lg text-fedsec-gray-600 leading-relaxed mb-6 italic font-[family-name:var(--font-body)]">
                &ldquo;Security is not just about responding to threats — it&apos;s
                about knowing your risk before they become incidents. Our
                multidisciplinary approach helps organizations identify
                vulnerabilities, strengthen defenses, and build lasting
                resilience.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-fedsec-gray-200">
                  <Image src="/images/protexy/about/about-avatar.png" alt="Francis Buchi" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Francis Buchi</p>
                  <p className="text-sm text-fedsec-gray-500">Founder / Tech Lead</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-fedsec-purple/5 border border-fedsec-purple/10 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center shrink-0">
                <Shield size={24} className="text-fedsec-purple" />
              </div>
              <div>
                <p className="font-semibold text-fedsec-gray-900 mb-1 font-[family-name:var(--font-heading)]">Predict</p>
                <p className="text-sm text-fedsec-gray-500">AI-powered insights help anticipate evolving cyber threats</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Our services</motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Security that never sleeps</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeInUp}>
              <Link href={`/services/${service.slug}`} className="group block h-full bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl p-8 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-fedsec-purple/10 flex items-center justify-center shrink-0 group-hover:bg-fedsec-purple group-hover:text-fedsec-white transition-all duration-300">
                    <Image src={service.icon} alt={service.category} width={28} height={28} className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-fedsec-purple mb-2 font-[family-name:var(--font-accent)]">{service.category}</span>
                    <h3 className="text-xl md:text-2xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">{service.title}</h3>
                    <p className="text-fedsec-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <p className="text-lg text-fedsec-gray-500 mb-6 max-w-2xl mx-auto">Protect your organization with intelligent security solutions designed to detect threats, reduce risk, and strengthen resilience.</p>
          <Button href="/services" variant="outline" size="lg">More services</Button>
        </div>
      </div>
    </section>
  );
}

function TrustedProcess() {
  const steps = [
    { num: "1", title: "Know Your Risk", description: "We assess your security posture to identify vulnerabilities, gaps, and threats across your environment." },
    { num: "2", title: "Strengthen Defenses", description: "Implement targeted security controls, policies, and procedures to address identified risks." },
    { num: "3", title: "Build Resilience", description: "Establish continuous monitoring and response capabilities to maintain long-term security." },
  ];

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Our trusted process</motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Intelligence behind every decision</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={scaleIn} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-fedsec-purple/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-normal text-fedsec-purple font-[family-name:var(--font-heading)]">{step.num}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)]">{step.title}</h3>
              <p className="text-fedsec-gray-500 text-sm leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Our case studies</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Securing businesses with confidence</motion.h2>
          </div>
          <Link href="/case-studies" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
            View all <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((cs) => (
            <motion.div key={cs.slug} variants={scaleIn}>
              <Link href={`/case-studies/${cs.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                  <Image src={cs.image} alt={cs.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">{cs.name}</h3>
                <p className="text-sm text-fedsec-gray-500 leading-relaxed mb-4">{cs.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">View details <span className="text-lg">&rarr;</span></span>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {cs.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">{stat.value}</p>
                      <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Industries we served</motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Trusted across sectors</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={scaleIn} className="bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-8 text-center hover:border-fedsec-purple/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-fedsec-purple/10 flex items-center justify-center mx-auto mb-5">
                <Image src={industry.icon} alt={industry.name} width={28} height={28} className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">{industry.name}</h3>
              <p className="text-sm text-fedsec-gray-500">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Why choose us</motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Where expertise meets trust</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="text-center p-8 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl">
            <p className="text-3xl md:text-4xl font-normal text-fedsec-purple mb-2 font-[family-name:var(--font-heading)]">99.9%</p>
            <p className="text-xl md:text-2xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">Risk Reduction</p>
            <p className="text-sm text-fedsec-gray-500">Accuracy in identifying and remediating critical security vulnerabilities</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center p-8 bg-fedsec-purple text-fedsec-white rounded-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Shield size={32} />
            </div>
            <p className="text-xl md:text-2xl font-normal mb-2 font-[family-name:var(--font-heading)]">Protection</p>
            <p className="text-sm text-fedsec-gray-300">Multidisciplinary team covering VAPT, GRC, network, and software security</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center p-8 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl">
            <p className="text-3xl md:text-4xl font-normal text-fedsec-purple mb-2 font-[family-name:var(--font-heading)]">500+</p>
            <p className="text-xl md:text-2xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">Assessments</p>
            <p className="text-sm text-fedsec-gray-500">Security assessments and engagements completed across industries</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogsSection() {
  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Our blogs</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Staying ahead of evolving threats</motion.h2>
          </div>
          <Link href="/blogs" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple hover:gap-3 transition-all font-[family-name:var(--font-accent)]">
            View all <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={scaleIn}>
              <Link href={`/blogs/${post.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-fedsec-gray-300" />
                  <span className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">{post.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors leading-snug">{post.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">View details <span className="text-lg">&rarr;</span></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <PartnerLogos />
      <TrustedProcess />
      <CaseStudiesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <BlogsSection />
      <CTABanner />
    </>
  );
}
