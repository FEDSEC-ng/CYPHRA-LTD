"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-fedsec-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-fedsec-purple/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-fedsec-pink/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fedsec-purple/20 border border-fedsec-purple/30 text-fedsec-purple text-sm font-medium font-[family-name:var(--font-accent)]">
              <Shield size={16} />
              Trusted Security Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-fedsec-white leading-[1.1] mb-6 font-[family-name:var(--font-heading)]"
          >
            Securing Your
            <span className="block gradient-text">Digital World</span>
            with Trust
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-fedsec-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            FEDSEC is a multidisciplinary cybersecurity firm built around trust,
            expertise, and collaboration. We help organizations identify risks,
            strengthen their security posture, and build greater resilience
            against evolving cyber threats.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" size="lg">
              Start a Conversation
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-fedsec-gray-600 text-fedsec-white hover:bg-fedsec-white hover:text-fedsec-gray-900">
              Learn About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fedsec-purple/50 to-transparent" />
    </section>
  );
}
