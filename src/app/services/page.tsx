"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Crosshair, Eye, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data/services";
import CTABanner from "@/components/ui/CTABanner";

const pillarMeta = {
  "Red Team": {
    icon: Crosshair,
    title: "Red Team",
    subtitle: "Attack like an adversary. Simulate, discover, and validate weaknesses before real attackers do.",
    accent: "text-fedsec-pink",
    chip: "bg-fedsec-pink/10",
    border: "hover:border-fedsec-pink/40",
  },
  "Blue Team": {
    icon: Eye,
    title: "Blue Team",
    subtitle: "Defend around the clock. Monitor, detect, and respond to threats across your environment.",
    accent: "text-blue-500",
    chip: "bg-blue-500/10",
    border: "hover:border-blue-500/40",
  },
  GRC: {
    icon: ShieldCheck,
    title: "GRC",
    subtitle: "Align security with the business. Governance, risk, and compliance that builds trust.",
    accent: "text-fedsec-purple",
    chip: "bg-fedsec-purple/10",
    border: "hover:border-fedsec-purple/40",
  },
};

const pillarOrder = ["Red Team", "Blue Team", "GRC"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
              Our services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Security built on{" "}
              <span className="gradient-text">three pillars</span>
            </h1>
            <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-3xl leading-relaxed">
              Offense. Defense. Governance. We attack like adversaries, defend
              around the clock, and align security with your business — as one
              collective.
            </p>
          </motion.div>
        </div>
      </section>

      {pillarOrder.map((pillar) => {
        const meta = pillarMeta[pillar];
        const members = pillar === "Red Team"
          ? ["vulnerability-assessment-and-penetration-testing", "software-security", "network-security"]
          : pillar === "Blue Team"
            ? ["security-operations", "incident-response"]
            : ["grc-advisory"];
        const pillarServices = services.filter((s) => members.includes(s.slug));

        return (
          <section
            key={pillar}
            className={`py-16 md:py-24 ${pillar === "Blue Team" ? "bg-fedsec-gray-900" : "bg-fedsec-black"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-6 mb-10">
                  <div className={`w-16 h-16 rounded-2xl ${meta.chip} flex items-center justify-center shrink-0`}>
                    <meta.icon className={meta.accent} size={30} />
                  </div>
                  <div>
                    <span className="section-tag mb-3">{pillar}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)]">
                      {pillar === "Red Team"
                        ? "Think like an attacker"
                        : pillar === "Blue Team"
                          ? "Defend like a sentinel"
                          : "Secure by governance"}
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl">{meta.subtitle}</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillarServices.map((service) => (
                    <motion.div key={service.slug} variants={fadeInUp}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={`group block h-full glass rounded-2xl p-8 border border-white/10 ${meta.border} transition-all duration-300 hover:shadow-lg hover:shadow-black/20`}
                      >
                        <span className={`inline-block text-xs font-bold uppercase tracking-wider ${meta.accent} mb-3 font-[family-name:var(--font-accent)]`}>
                          {pillar}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-fedsec-gray-400 text-sm leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>
                        <span className={`inline-flex items-center gap-2 text-sm font-semibold ${meta.accent} font-[family-name:var(--font-accent)]`}>
                          Explore service
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}