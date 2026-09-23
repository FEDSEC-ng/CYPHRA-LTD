"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileCheck } from "lucide-react";
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
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">Our team</span>
              <WordByWordReveal text="Different expertise. One collective." className="text-4xl md:text-6xl lg:text-7xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]" tag="h1" />
              <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-xl leading-relaxed mb-8">
                Meet the FEDSEC collective — offensive and defensive specialists,
                governance and engineering minds working as one team to protect
                your business.
              </p>
              <a href="/contact" className="grow-pill growable">
                <span className="pill-label">Work with us</span>
                <span className="pill-icon"><ArrowRight size={18} /></span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image src={featured.image} alt={featured.name} width={600} height={720} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-fedsec-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollingBadges badges={badges} />

      <section className="py-20 md:py-28 bg-fedsec-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">Our collective</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
              Security experts you can trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: (index % 4) * 0.08 }} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-fedsec-gray-800">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-heading)]">{member.name}</h3>
                  <p className="text-sm text-fedsec-pink font-semibold font-[family-name:var(--font-accent)]">{member.role}</p>
                  <p className="text-xs text-white/40 mt-2">{member.credentials}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.cv ? (
                    <a href={member.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-fedsec-purple/90 backdrop-blur px-3 py-2 rounded-full font-[family-name:var(--font-accent)]">
                      <FileCheck size={14} /> View CV
                    </a>
                  ) : null}
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