"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import ScrollingBadges from "@/components/ui/ScrollingBadges";
import CTABanner from "@/components/ui/CTABanner";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const overviewImages = [
  "/images/protexy/services/service-overview1.png",
  "/images/protexy/services/service-overview2.png",
  "/images/protexy/services/service-overview3.png",
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const service = services[serviceIndex];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fedsec-gray-100 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-normal text-fedsec-gray-900 mb-4 font-[family-name:var(--font-heading)]">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-fedsec-purple hover:underline font-[family-name:var(--font-accent)]"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const overviewImage = overviewImages[serviceIndex % overviewImages.length];

  return (
    <>
      {/* ──────────────────────────────────────────────
          1. Hero Section
      ────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-fedsec-gray-400 hover:text-fedsec-white mb-8 transition-colors font-[family-name:var(--font-accent)]"
            >
              <ArrowLeft size={16} />
              All Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              {service.title}
            </h1>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollingBadges badges={service.marqueeBadges} />
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. Service Overview
      ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                Overview
              </span>
              <h2 className="text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                About This Service
              </h2>
              <p className="text-lg text-fedsec-gray-500 leading-relaxed mb-8">
                {service.overview}
              </p>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-fedsec-purple mt-0.5 flex-shrink-0"
                    />
                    <span className="text-fedsec-gray-700 font-medium font-[family-name:var(--font-body)]">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={overviewImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. Key Benefits
      ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-fedsec-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
              Key Benefits
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bg-fedsec-white rounded-2xl p-6 border border-fedsec-gray-200 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center text-fedsec-purple mb-5">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-fedsec-gray-500 leading-relaxed font-[family-name:var(--font-body)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. Feature Sections (alternating layout)
      ────────────────────────────────────────────── */}
      {service.features.map((feature, i) => {
        const isReversed = i % 2 !== 0;
        return (
          <section
            key={feature.title}
            className={`py-20 md:py-28 ${
              i % 2 === 0 ? "bg-fedsec-white" : "bg-fedsec-gray-50"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isReversed ? "direction-rtl" : ""
                }`}
              >
                <motion.div
                  variants={isReversed ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">
                    Feature {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-fedsec-gray-500 leading-relaxed font-[family-name:var(--font-body)]">
                    {feature.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={isReversed ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ──────────────────────────────────────────────
          5. Contact CTA Section
      ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-fedsec-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-normal text-fedsec-gray-900 mb-6 font-[family-name:var(--font-heading)]">
                Have Questions About Our Security Services?
              </h2>
              <p className="text-lg text-fedsec-gray-500 leading-relaxed mb-8 font-[family-name:var(--font-body)]">
                Get in touch with our team of cybersecurity experts. We&apos;re here
                to help you understand your security needs and find the right
                solution for your organization.
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/protexy/team/member1.png"
                    alt="Ethan Brooks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
                    Ethan Brooks
                  </p>
                  <p className="text-sm text-fedsec-gray-500 font-[family-name:var(--font-accent)]">
                    Senior Security Consultant
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/protexy/services/contact-cta.png"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          6. Process Steps Section
      ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
              Intelligence behind every decision
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {service.processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-fedsec-purple text-fedsec-white flex items-center justify-center font-normal text-xl mx-auto mb-6 font-[family-name:var(--font-heading)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-fedsec-gray-500 leading-relaxed font-[family-name:var(--font-body)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          7. Related Services Section
      ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-fedsec-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
              Related
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
              Related Services
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {service.relatedServices.map((related) => (
              <motion.div key={related.slug} variants={fadeInUp}>
                <Link
                  href={`/services/${related.slug}`}
                  className="group block bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-8 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
                >
                  <h3 className="text-xl font-normal text-fedsec-gray-900 mb-4 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                    {related.title}
                  </h3>
                  <div className="space-y-3">
                    {related.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-fedsec-purple mt-0.5 flex-shrink-0"
                        />
                        <span className="text-fedsec-gray-600 font-[family-name:var(--font-body)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          8. CTA Banner
      ────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
