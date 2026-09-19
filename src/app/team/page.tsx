"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WordByWordReveal from "@/components/ui/WordByWordReveal";
import CTABanner from "@/components/ui/CTABanner";
import ScrollingBadges from "@/components/ui/ScrollingBadges";
import { team } from "@/lib/data/team";

const springTransition = { type: "spring" as const, damping: 40, stiffness: 200 };

const badges = [
  "Penetration Testing", "Vulnerability Assessment", "Incident Response",
  "Security Architecture", "Threat Intelligence", "GRC Advisory",
  "Network Security", "Cloud Security", "Red Team Operations",
];

export default function TeamPage() {
  const featured = team[0];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">Our team</span>
              <WordByWordReveal text="Meet the experts behind FEDSEC" className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]" tag="h1" />
              <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-xl leading-relaxed mb-8">Our team of seasoned cybersecurity professionals brings decades of combined experience in protecting organizations from evolving threats.</p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-fedsec-purple text-fedsec-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-fedsec-purple/90 transition-colors font-[family-name:var(--font-accent)]">
                Join us today
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image src={featured.image} alt={featured.name} width={600} height={500} className="w-full h-auto object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollingBadges badges={badges} />

      <section className="py-20 md:py-28 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">Our team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Security experts you can trust</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: index * 0.1 }} className="group text-center">
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4] bg-fedsec-gray-200">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-fedsec-gray-900 mb-1 font-[family-name:var(--font-heading)]">{member.name}</h3>
                <p className="text-sm text-fedsec-purple font-semibold font-[family-name:var(--font-accent)]">{member.role}</p>
                <p className="text-sm text-fedsec-gray-500 mt-2 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
