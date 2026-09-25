"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "CYPHRA transformed our approach to security. Their team identified critical vulnerabilities we had missed for years and provided a clear roadmap for remediation.",
    author: "CTO",
    company: "FinSecure Capital",
    industry: "Financial Services",
  },
  {
    quote:
      "The penetration testing engagement was thorough, professional, and delivered actionable results. CYPHRA's team went above and beyond to help us understand and prioritize findings.",
    author: "Head of Engineering",
    company: "CloudSync Technologies",
    industry: "Technology",
  },
  {
    quote:
      "Their GRC advisory services helped us achieve ISO 27001 certification in record time. The team understood our business needs and designed a program that actually works for us.",
    author: "Chief Information Security Officer",
    company: "NexaBank",
    industry: "Banking",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Voices"
          title="Trusted by Organizations That Take Security Seriously"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl p-8 flex flex-col"
            >
              <Quote
                size={32}
                className="text-fedsec-purple/20 mb-4 flex-shrink-0"
              />
              <p className="text-fedsec-gray-700 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-fedsec-gray-200 pt-4">
                <p className="font-bold text-fedsec-gray-900 text-sm font-[family-name:var(--font-heading)]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-fedsec-gray-500">
                  {testimonial.company} &middot; {testimonial.industry}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
