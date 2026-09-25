"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, Eye, ShieldCheck } from "lucide-react";
import { services } from "@/lib/data/services";
import CTABanner from "@/components/ui/CTABanner";
import Tremble from "@/components/ui/Tremble";
import PuzzleGradient from "@/components/home/PuzzleGradient";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const serviceImages: Record<string, string> = {
  "vulnerability-assessment-and-penetration-testing": "/images/why/why1.jpg",
  "software-security": "/images/why/why4.jpg",
  "network-security": "/images/why/why6.jpg",
  "security-operations": "/images/why/why3.jpg",
  "incident-response": "/images/why/why2.jpg",
  "grc-advisory": "/images/why/why5.jpg",
};

const pillarMeta = {
  "Red Team": {
    icon: Crosshair,
    tagline: "Think like an attacker",
    subtitle:
      "Attack like an adversary. Simulate, discover, and validate weaknesses before real attackers do.",
    accent: "text-fedsec-pink",
    chip: "bg-fedsec-pink/10",
    border: "hover:border-fedsec-pink/40",
    overlay: "bg-fedsec-pink/25",
  },
  "Blue Team": {
    icon: Eye,
    tagline: "Defend like a sentinel",
    subtitle:
      "Defend around the clock. Monitor, detect, and respond to threats across your environment.",
    accent: "text-blue-400",
    chip: "bg-blue-500/10",
    border: "hover:border-blue-500/40",
    overlay: "bg-blue-500/20",
  },
  GRC: {
    icon: ShieldCheck,
    tagline: "Secure by governance",
    subtitle:
      "Align security with the business. Governance, risk, and compliance that builds trust.",
    accent: "text-fedsec-purple-light",
    chip: "bg-fedsec-purple/10",
    border: "hover:border-fedsec-purple/40",
    overlay: "bg-fedsec-purple/30",
  },
};

const pillarOrder = ["Red Team", "Blue Team", "GRC"] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero — living gradient, same language as the homepage */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <PuzzleGradient base="none" opacity={0.6} blobCount={5} />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
              Our services
            </span>
            <Tremble>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-fedsec-white leading-[1.05] mb-6 font-[family-name:var(--font-heading)] tracking-tight">
                Security built on{" "}
                <span className="gradient-text">three pillars</span>
              </h1>
            </Tremble>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10">
              Offense. Defense. Governance. We attack like adversaries, defend
              around the clock, and align security with your business — as one
              collective. Here is what that looks like across our core services.
            </p>
            <div className="flex flex-wrap gap-3">
              {["VAPT", "Red Team", "SOC Operations", "GRC Advisory", "Incident Response"].map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full glass text-xs font-semibold text-white/60 font-[family-name:var(--font-accent)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {pillarOrder.map((pillar, pillarIdx) => {
        const meta = pillarMeta[pillar];
        const members =
          pillar === "Red Team"
            ? ["vulnerability-assessment-and-penetration-testing", "software-security", "network-security"]
            : pillar === "Blue Team"
              ? ["security-operations", "incident-response"]
              : ["grc-advisory"];
        const pillarServices = services.filter((s) => members.includes(s.slug));
        const PillarIcon = meta.icon;

        return (
          <section
            key={pillar}
            className={`py-20 md:py-28 ${pillarIdx % 2 === 1 ? "bg-fedsec-gray-900" : "bg-fedsec-black"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* pillar header */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-14"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${meta.chip} flex items-center justify-center shrink-0`}>
                    <PillarIcon className={meta.accent} size={30} />
                  </div>
                  <div>
                    <span className="section-tag mb-3 block">{pillar}</span>
                    <Tremble>
                      <h2 className="text-3xl md:text-5xl font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
                        {meta.tagline}
                      </h2>
                    </Tremble>
                    <p className="text-lg text-white/50 max-w-2xl">{meta.subtitle}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* alternating service rows */}
              <div className="space-y-16 md:space-y-20">
                {pillarServices.map((service, i) => {
                  const flip = i % 2 === 1;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                    >
                      {/* image tile */}
                      <Link
                        href={`/services/${service.slug}`}
                        className={`group relative block rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] ${
                          flip ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={serviceImages[service.slug]}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100"
                        />
                        <div className={`absolute inset-0 ${meta.overlay} mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <span className="absolute top-5 left-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/70">
                          {pillar} · {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-[family-name:var(--font-accent)]">
                          View service <ArrowRight size={13} />
                        </span>
                      </Link>

                      {/* copy */}
                      <div className={flip ? "lg:order-1" : ""}>
                        <span className={`inline-block text-xs font-bold uppercase tracking-[0.25em] ${meta.accent} mb-4 font-[family-name:var(--font-accent)]`}>
                          {pillar}
                        </span>
                        <Tremble>
                          <h3 className="text-2xl md:text-4xl font-bold text-fedsec-white mb-4 font-[family-name:var(--font-heading)] tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </Tremble>
                        <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-[family-name:var(--font-body)]">
                          {service.shortDescription}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <Link href={`/services/${service.slug}`} className="grow-pill growable">
                            <span className="pill-label">Explore service</span>
                            <span className="pill-icon">
                              <ArrowRight size={16} />
                            </span>
                          </Link>
                          <div className="flex items-center gap-2">
                            {service.marqueeBadges.slice(0, 2).map((b) => (
                              <span
                                key={b}
                                className="px-3 py-1.5 rounded-full glass text-[11px] font-semibold text-white/50 font-[family-name:var(--font-accent)]"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
