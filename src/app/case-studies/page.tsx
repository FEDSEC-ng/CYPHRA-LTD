"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { caseStudies } from "@/lib/data/case-studies";
import CTABanner from "@/components/ui/CTABanner";

const caseStats: Record<string, { value: string; label: string }[]> = {
  "tesla-odata-wildcards": [
    { value: "P2", label: "Tesla Severity" },
    { value: "$2,000", label: "Bounty Paid" },
  ],
  "supabase-auth-bypass": [
    { value: "9.1", label: "CVSS Score" },
    { value: "$1,800", label: "Bounty Paid" },
  ],
  "luxury-sso-chain": [
    { value: "6.5", label: "CVSS Score" },
    { value: "x3", label: "Paid Environments" },
  ],
  "codesandbox-payment-replay": [
    { value: "High", label: "Severity Triage" },
    { value: "GHSA", label: "Credited Reporter" },
  ],
  "polyglot-upload-stored-xss": [
    { value: "P3 S3", label: "Severity Set" },
    { value: "Kit", label: "Reproduction Delivered" },
  ],
  "dm-restriction-bypass": [
    { value: "Review", label: "Preliminary Passed" },
    { value: "Fixed", label: "Behavior Observed" },
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
              Real findings. Real clients. Real results. Real bounties.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-fedsec-gray-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Disclosed reports by our researchers Ridwan Adebayo and Abang
              Obed, triaged and paid by the programs. Every card starts with a
              plain explanation, then the technical account.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-3xl rounded-2xl border border-fedsec-purple/15 bg-fedsec-purple/[0.04] p-6 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fedsec-purple font-[family-name:var(--font-accent)]">
              What is a disclosure?
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                "We find a security flaw in a live product.",
                "We report it privately to the vendor, not the public.",
                "The vendor fixes it, and many programs pay for the report.",
              ].map((line, i) => (
                <div key={line} className="flex gap-3">
                  <span className="font-mono text-xs font-bold text-fedsec-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-fedsec-gray-600 font-[family-name:var(--font-body)]">
                    {line}
                  </p>
                </div>
              ))}
            </div>
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
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-fedsec-purple/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-fedsec-purple font-[family-name:var(--font-accent)]">
                      {cs.category}
                    </span>
                    <span className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                      {cs.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                    {cs.client}
                  </h3>
                  <p className="text-sm text-fedsec-gray-500 leading-relaxed mb-3">
                    {cs.title}
                  </p>
                  <p className="rounded-xl bg-fedsec-gray-50 p-3 text-sm leading-relaxed text-fedsec-gray-700 font-[family-name:var(--font-body)]">
                    <span className="font-bold text-fedsec-purple">In plain terms: </span>
                    {cs.plain}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">
                    Read the story <span className="text-lg">&rarr;</span>
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
