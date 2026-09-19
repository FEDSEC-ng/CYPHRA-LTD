"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { caseStudies } from "@/lib/data/case-studies";
import CTABanner from "@/components/ui/CTABanner";

const caseImages: Record<string, string> = {
  finsecure: "/images/protexy/case-studies/case-hero.png",
  vireon: "/images/protexy/case-studies/case-overview1.png",
  "medicore-systems": "/images/protexy/case-studies/case-overview2.png",
  nexabank: "/images/protexy/case-studies/case-results1.png",
  cloudsync: "/images/protexy/case-studies/case-results2.png",
  vertexhealth: "/images/protexy/case-studies/case-content1.png",
};

const caseStats: Record<string, { value: string; label: string }[]> = {
  nexabank: [
    { value: "3.2M+", label: "Threats Blocked Annually" },
    { value: "1.8B+", label: "Risks Mitigated Globally" },
  ],
  cloudsync: [
    { value: "06Y", label: "Security Partnership" },
    { value: "3.2M+", label: "Threats Blocked Annually" },
  ],
  vertexhealth: [
    { value: "99.9%", label: "System Uptime Maintained" },
    { value: "08Y", label: "Security Success Timeline" },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
              Our case studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Securing businesses with confidence
            </h1>
            <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-3xl leading-relaxed">
              Real engagements, real outcomes. Explore how FEDSEC has helped
              organizations strengthen their security posture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study) => {
              const stats = caseStats[study.slug] || [];
              const img = caseImages[study.slug] || study.image;
              return (
                <motion.div key={study.slug} variants={fadeInUp}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                      <Image
                        src={img}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-fedsec-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {study.challenge}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">
                      View details <span className="text-lg">&rarr;</span>
                    </span>
                    {stats.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="text-2xl font-bold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">{stat.value}</p>
                            <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
