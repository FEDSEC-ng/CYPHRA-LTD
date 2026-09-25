"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Users, Target } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={slideInLeft}>
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">
              About CYPHRA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-gray-900 leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Effective Cybersecurity Goes Beyond Finding Vulnerabilities
            </h2>
            <p className="text-lg text-fedsec-gray-500 leading-relaxed mb-6">
              It requires understanding how technology, people, processes, and
              business operations connect. Our multidisciplinary approach allows
              us to look at security from different perspectives and provide
              practical solutions that address real organizational needs.
            </p>
            <p className="text-lg text-fedsec-gray-500 leading-relaxed mb-8">
              Built on the principle of trust, CYPHRA is committed to
              professionalism, confidentiality, continuous learning, and
              responsible security practices.
            </p>
            <Button href="/about" size="lg">
              Our Full Story
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>

          <motion.div variants={slideInRight} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Shield size={24} />,
                title: "Trust-First Approach",
                desc: "Every recommendation is grounded in your actual risk landscape, not vendor relationships.",
              },
              {
                icon: <Users size={24} />,
                title: "Multidisciplinary Team",
                desc: "Different expertise areas working together to provide holistic security solutions.",
              },
              {
                icon: <Target size={24} />,
                title: "Business-Aligned Security",
                desc: "Security programs designed to support your business objectives, not hinder them.",
              },
              {
                icon: <Shield size={24} />,
                title: "Responsible Practices",
                desc: "Ethical, professional, and committed to continuous improvement in everything we do.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-fedsec-purple/10 flex items-center justify-center text-fedsec-purple mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-sm text-fedsec-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
