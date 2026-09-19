"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WordByWordReveal from "@/components/ui/WordByWordReveal";
import AwardCarousel from "@/components/ui/AwardCarousel";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/ui/CTABanner";

const springTransition = { type: "spring" as const, damping: 40, stiffness: 200 };

const stats = [
  { value: "12,400+", label: "Protected endpoints" },
  { value: "185+", label: "Total countries covered" },
  { value: "98.7%", label: "Threat detection rate" },
];

const teamMembers = [
  { name: "Nathan Brooks", role: "CEO", image: "/images/protexy/team/nathan-brooks.png" },
  { name: "Olivia Walker", role: "Business Director", image: "/images/protexy/team/olivia-walker.png" },
  { name: "James Walker", role: "Project Manager", image: "/images/protexy/team/james-walker.png" },
  { name: "Emma Walker", role: "IT Manager", image: "/images/protexy/team/emma-walker.png" },
];

const faqItems = [
  {
    question: "What cybersecurity services do you provide?",
    answer: "We provide comprehensive cybersecurity solutions protecting networks, systems, cloud infrastructure, and sensitive business data from threats.",
  },
  {
    question: "How do you help prevent cyber threats?",
    answer: "We use AI-powered monitoring, threat detection, proactive defense, and rapid response to prevent cyberattacks effectively.",
  },
  {
    question: "Can your solutions support large organizations?",
    answer: "We offer threat monitoring, risk assessment, incident response, and security analytics to help organizations stay protected.",
  },
  {
    question: "Do you provide 24/7 security monitoring?",
    answer: "Yes, our experts provide 24/7 security monitoring, detecting threats instantly and responding before serious damage occurs.",
  },
  {
    question: "How quickly can you respond to incidents?",
    answer: "Our incident response team reacts immediately, containing threats quickly to minimize downtime, damage, and business disruption.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Contact our team, schedule a consultation, discuss your security needs, and receive a customized cybersecurity protection plan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">About us</span>
              <WordByWordReveal text="Advancing cybersecurity for modern organizations" className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]" />
              <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-xl leading-relaxed mb-8">
                FEDSEC is a multidisciplinary cybersecurity firm built around trust, expertise, and collaboration. We help organizations identify risks, strengthen their security posture, and build greater resilience against evolving cyber threats.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-fedsec-purple text-fedsec-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-fedsec-purple/90 transition-colors font-[family-name:var(--font-accent)]">
                Join us today
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image src="/images/protexy/about/about-main.png" alt="About FEDSEC" width={600} height={500} className="w-full h-auto object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-fedsec-white border-b border-fedsec-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fedsec-purple mb-2 font-[family-name:var(--font-heading)]">{stat.value}</div>
                <div className="text-sm text-fedsec-gray-500 font-[family-name:var(--font-accent)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">Our team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">Security experts you can trust</h2>
            <p className="text-lg text-fedsec-gray-500 max-w-2xl mx-auto">Our team of seasoned cybersecurity professionals brings decades of combined experience in protecting organizations from evolving threats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: index * 0.1 }} className="group text-center">
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4] bg-fedsec-gray-200">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-fedsec-gray-900 mb-1 font-[family-name:var(--font-heading)]">{member.name}</h3>
                <p className="text-sm text-fedsec-purple font-semibold font-[family-name:var(--font-accent)]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AwardCarousel />

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">FAQ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Everything you need to know</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">Our offices</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Find us around the world</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "New York", address: "350 5th Avenue, Suite 4500", zip: "New York, NY 10118", country: "United States" },
              { city: "London", address: "1 Canada Square, Canary Wharf", zip: "London E14 5AB", country: "United Kingdom" },
              { city: "Singapore", address: "1 Raffles Place, Level 20", zip: "Singapore 048616", country: "Singapore" },
            ].map((office, index) => (
              <motion.div key={office.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: index * 0.1 }} className="bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-8 text-center hover:border-fedsec-purple/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-fedsec-purple/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#662f90" /></svg>
                </div>
                <h3 className="text-xl font-bold text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">{office.city}</h3>
                <p className="text-sm text-fedsec-gray-500 leading-relaxed">{office.address}<br />{office.zip}<br />{office.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
