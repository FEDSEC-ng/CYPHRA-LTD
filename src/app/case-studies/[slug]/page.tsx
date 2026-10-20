"use client";

import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { useRef } from "react";
import { caseStudies } from "@/lib/data/case-studies";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((s) => s.slug === slug);
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);

  const relatedStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2);
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const resultsRef = useRef(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fedsec-gray-100 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-normal text-fedsec-gray-900 mb-4 font-[family-name:var(--font-heading)]">
            Case Study Not Found
          </h1>
          <Link
            href="/case-studies"
            className="text-fedsec-purple hover:underline font-[family-name:var(--font-accent)]"
          >
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Case Study Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white font-[family-name:var(--font-accent)]"
            >
              <ArrowLeft size={14} />
              All work
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              {study.services.map((s) => (
                <Badge key={s} variant="purple">
                  {s}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal text-fedsec-white leading-tight mb-8 font-[family-name:var(--font-heading)]">
              {study.title}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", damping: 40, stiffness: 200 }}
            className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mt-8"
          >
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Plain English Summary */}
      <section className="py-14 md:py-20 bg-fedsec-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-fedsec-purple/20 bg-fedsec-purple/[0.04] p-7 md:p-9"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-fedsec-purple font-[family-name:var(--font-accent)]">
              <Info size={14} /> In plain English
            </p>
            <p className="mt-3 text-xl md:text-2xl leading-relaxed text-fedsec-gray-800 font-[family-name:var(--font-heading)]">
              {study.plain}
            </p>
            <p className="mt-4 text-sm text-fedsec-gray-500 font-[family-name:var(--font-body)]">
              The technical account follows below, for readers who want the detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What This Means For You */}
      <section className="pb-16 md:pb-24 bg-fedsec-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-fedsec-pink font-[family-name:var(--font-accent)]">
            Three lessons any team can use
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {study.takeaways.map((takeaway, i) => (
              <motion.div
                key={takeaway}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-fedsec-gray-200 bg-fedsec-gray-50 p-6"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-fedsec-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-relaxed text-fedsec-gray-700 font-[family-name:var(--font-body)]">
                  {takeaway}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section ref={overviewRef} className="py-16 md:py-24 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              className="text-center"
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                The Technical Detail
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                The Challenge
              </h2>
              <p className="text-lg text-fedsec-gray-600 leading-relaxed mb-8 text-center">
                {study.challenge}
              </p>
              <div className="space-y-3 text-left">
                {study.results.map((result) => (
                  <div key={result} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-fedsec-purple mt-0.5 flex-shrink-0"
                    />
                    <span className="text-fedsec-gray-700 font-medium">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/services/svc-cables.jpg"
                alt={`${study.title} overview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Results Section */}
      <section ref={resultsRef} className="py-16 md:py-24 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
              className="order-2 lg:order-1 relative h-80 md:h-[450px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/services/svc-code.jpg"
                alt={`${study.title} results`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
              className="order-1 lg:order-2 text-center"
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                Our Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                How We Proved It
              </h2>
              <p className="text-lg text-fedsec-gray-600 leading-relaxed text-center">
                {study.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Details Sidebar */}
      <section className="py-16 md:py-20 bg-fedsec-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 rounded-2xl bg-fedsec-gray-800 border border-fedsec-gray-700">
              <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
                Company
              </span>
              <p className="text-xl font-normal text-fedsec-white font-[family-name:var(--font-heading)]">
                {study.company}
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-fedsec-gray-800 border border-fedsec-gray-700">
              <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
                Date
              </span>
              <p className="text-xl font-normal text-fedsec-white font-[family-name:var(--font-heading)]">
                {study.date}
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-fedsec-gray-800 border border-fedsec-gray-700">
              <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
                Category
              </span>
              <p className="text-xl font-normal text-fedsec-white font-[family-name:var(--font-heading)]">
                {study.category}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Writeup Section */}
      <section ref={testimonialRef} className="py-16 md:py-24 bg-fedsec-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">
              Full Writeup
            </p>
            <p className="text-xl md:text-2xl text-fedsec-gray-700 leading-relaxed mb-8 font-[family-name:var(--font-heading)]">
              Researched and disclosed by {study.researcher || "our team"}.
              Read every step, payload, and takeaway.
            </p>
            {study.mediumUrl ? (
              <a
                href={study.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fedsec-purple px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-fedsec-purple-light font-[family-name:var(--font-accent)]"
              >
                {study.externalLabel || "Read on Medium"}
                <ArrowRight size={16} />
              </a>
            ) : (
              <div>
                <p className="text-base text-fedsec-gray-500 leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  Responsible disclosure is still in progress, so technical
                  details stay private for now. Vetted clients can review the
                  full account under NDA.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-fedsec-purple px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-fedsec-purple-light font-[family-name:var(--font-accent)]"
                >
                  Ask about this work
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Previous and Next */}
      <section className="py-12 bg-fedsec-white border-t border-fedsec-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="group rounded-2xl border border-fedsec-gray-200 p-5 transition-colors hover:border-fedsec-purple/40"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                <ArrowLeft size={13} /> Previous case
              </span>
              <p className="mt-2 text-base font-bold text-fedsec-gray-900 transition-colors group-hover:text-fedsec-purple font-[family-name:var(--font-heading)]">
                {prevStudy.title}
              </p>
            </Link>
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group rounded-2xl border border-fedsec-gray-200 p-5 text-right transition-colors hover:border-fedsec-purple/40"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                Next case <ArrowRight size={13} />
              </span>
              <p className="mt-2 text-base font-bold text-fedsec-gray-900 transition-colors group-hover:text-fedsec-purple font-[family-name:var(--font-heading)]">
                {nextStudy.title}
              </p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-fedsec-gray-500 transition-colors hover:text-fedsec-purple font-[family-name:var(--font-accent)]"
            >
              <ArrowLeft size={15} /> All case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <section className="py-16 md:py-20 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Work"
            title="Related Case Studies"
            description="More disclosures from our researchers."
            align="left"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {relatedStudies.map((relatedStudy) => (
              <motion.div key={relatedStudy.slug} variants={fadeInUp}>
                <Link
                  href={`/case-studies/${relatedStudy.slug}`}
                  className="group block h-full bg-fedsec-white border border-fedsec-gray-200 rounded-2xl overflow-hidden hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={relatedStudy.image}
                      alt={relatedStudy.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {relatedStudy.services.slice(0, 2).map((s) => (
                        <Badge key={s} variant="dark">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                      {relatedStudy.title}
                    </h3>
                    <p className="text-sm text-fedsec-gray-500 leading-relaxed line-clamp-3">
                      {relatedStudy.plain}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
