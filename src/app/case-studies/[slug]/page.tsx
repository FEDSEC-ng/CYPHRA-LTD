"use client";

import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { caseStudies } from "@/lib/data/case-studies";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const contentSections = [
  {
    title: "Threat Impact",
    description:
      "Advanced threat analysis and detection capabilities identified critical vulnerabilities across the digital infrastructure, enabling rapid response to emerging cyber risks and protecting sensitive business operations from sophisticated attack vectors.",
    image: "/images/protexy/case-studies/case-content1.png",
  },
  {
    title: "Infrastructure Growth",
    description:
      "Scalable security architecture was designed and deployed to support rapid infrastructure expansion while maintaining robust protection across cloud environments, network systems, and critical business applications.",
    image: "/images/protexy/case-studies/case-content2.png",
  },
  {
    title: "System Protection",
    description:
      "Comprehensive system protection measures were implemented including real-time monitoring, automated threat response, and continuous security validation to ensure maximum uptime and data integrity across all platforms.",
    image: "/images/protexy/case-studies/case-content3.png",
  },
  {
    title: "Risk Reduction",
    description:
      "Strategic risk reduction initiatives delivered measurable improvements in security posture, reducing attack surface exposure and establishing a resilient defense framework aligned with industry compliance standards.",
    image: "/images/protexy/case-studies/case-content4.png",
  },
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((s) => s.slug === slug);

  const relatedStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2);

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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section ref={overviewRef} className="py-16 md:py-24 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                Project Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                The Challenge
              </h2>
              <p className="text-lg text-fedsec-gray-600 leading-relaxed mb-8">
                {study.challenge}
              </p>
              <div className="space-y-3">
                {study.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-start gap-3"
                  >
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
                src="/images/protexy/case-studies/case-overview1.png"
                alt={`${study.title} overview`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Results Section */}
      <section ref={resultsRef} className="py-16 md:py-24 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
              className="order-2 lg:order-1 relative h-80 md:h-[450px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/protexy/case-studies/case-overview2.png"
                alt={`${study.title} results`}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
              className="order-1 lg:order-2"
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                Our Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                Security Results
              </h2>
              <p className="text-lg text-fedsec-gray-600 leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Content Sections */}
      <section className="py-16 md:py-24 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-20"
          >
            {contentSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-fedsec-purple/10 flex items-center justify-center mb-6">
                    <span className="text-2xl font-normal text-fedsec-purple font-[family-name:var(--font-heading)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-fedsec-gray-900 mb-4 font-[family-name:var(--font-heading)]">
                    {section.title}
                  </h3>
                  <p className="text-lg text-fedsec-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div
                  className={`relative h-72 md:h-96 rounded-2xl overflow-hidden ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
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

      {/* Testimonial Quote Section */}
      <section
        ref={testimonialRef}
        className="py-16 md:py-24 bg-fedsec-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              testimonialInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <div className="text-6xl font-normal text-fedsec-purple/20 mb-4 font-[family-name:var(--font-heading)]">
              &ldquo;
            </div>
            <blockquote className="text-xl md:text-2xl text-fedsec-gray-700 leading-relaxed mb-6 italic font-[family-name:var(--font-heading)]">
              FEDSEC delivered a comprehensive security transformation that
              exceeded our expectations. Their team provided exceptional
              expertise and ongoing support throughout the entire engagement.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fedsec-purple/20 flex items-center justify-center text-fedsec-purple font-normal font-[family-name:var(--font-heading)]">
                {study.client.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-sm font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
                  {study.client}
                </p>
                <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                  {study.industry}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Go Back Button */}
      <section className="py-12 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-fedsec-gray-500 hover:text-fedsec-purple transition-colors font-[family-name:var(--font-accent)]"
          >
            <ArrowLeft size={16} />
            Go Back
          </Link>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <section className="py-16 md:py-20 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Work"
            title="Related Case Studies"
            description="Explore how we've helped other organizations achieve their security objectives."
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
                      {relatedStudy.challenge}
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
