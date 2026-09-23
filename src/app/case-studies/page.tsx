"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { caseStudies } from "@/lib/data/case-studies";
import CTABanner from "@/components/ui/CTABanner";

const caseImages: Record<string, string> = {
  finsecure: "/images/protexy/cases/case1.png",
  vireon: "/images/protexy/cases/case2.png",
  "medicore-systems": "/images/protexy/cases/case3.png",
  nexabank: "/images/protexy/cases/case4.png",
  cloudsync: "/images/protexy/cases/case5.png",
  vertexhealth: "/images/protexy/cases/case6.png",
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

export default function CaseStudiesListPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
              Trusted protection for every business
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              See how organizations across industries strengthened security
              and reduced risk using our proactive defense solutions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((cs) => (
              <motion.div key={cs.slug} variants={scaleIn}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                    <Image
                      src={caseImages[cs.slug] || "/images/protexy/cases/case1.png"}
                      alt={cs.client}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                    {cs.client}
                  </h3>
                  <p className="text-sm text-fedsec-gray-500 leading-relaxed mb-4">
                    {cs.title}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">
                    View details <span className="text-lg">&rarr;</span>
                  </span>
                  {caseStats[cs.slug] && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {caseStats[cs.slug].map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
                            {stat.value}
                          </p>
                          <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
