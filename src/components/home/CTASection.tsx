"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-3xl bg-fedsec-gray-900 overflow-hidden p-12 md:p-16 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-fedsec-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-fedsec-pink/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-white mb-6 font-[family-name:var(--font-heading)]">
              Ready to Secure Your
              <span className="block gradient-text">Organization?</span>
            </h2>
            <p className="text-lg text-fedsec-gray-400 max-w-2xl mx-auto mb-10">
              Let&apos;s start a conversation about your security challenges.
              Every engagement begins with understanding your unique risk
              landscape and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Start a Conversation
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-fedsec-gray-600 text-fedsec-white hover:bg-fedsec-white hover:text-fedsec-gray-900"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
