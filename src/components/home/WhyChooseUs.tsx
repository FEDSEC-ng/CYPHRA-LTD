"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  Headphones,
  Award,
  TrendingUp,
  Lock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: <Shield size={24} />,
    title: "Proven Methodology",
    description:
      "Battle-tested processes refined through hundreds of engagements across industries and threat landscapes.",
  },
  {
    icon: <Clock size={24} />,
    title: "Rapid Response",
    description:
      "Speed matters in security. Our incident response and assessment timelines are designed to minimize your exposure.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Support",
    description:
      "Every client gets a dedicated point of contact and direct access to senior security professionals — no ticket queues.",
  },
  {
    icon: <Award size={24} />,
    title: "Certified Experts",
    description:
      "Our team holds industry-leading certifications including OSCP, CISSP, CISM, CEH, and ISO 27001 Lead Auditor.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Measurable Results",
    description:
      "We deliver reports with clear metrics, actionable recommendations, and tracking to ensure remediation success.",
  },
  {
    icon: <Lock size={24} />,
    title: "Confidential by Design",
    description:
      "We handle your data with the same rigor we bring to securing it. NDA-backed, SOC-aware, and trust-focused.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why CYPHRA"
          title="Built on Trust, Driven by Expertise"
          description="We don't just find vulnerabilities. We understand your business, your risks, and deliver solutions that make a real difference."
          light
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-fedsec-gray-800 border border-fedsec-gray-700 rounded-2xl p-8 hover:border-fedsec-purple/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-fedsec-purple/20 flex items-center justify-center text-fedsec-purple mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-fedsec-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
