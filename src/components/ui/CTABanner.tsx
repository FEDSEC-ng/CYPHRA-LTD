"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/protexy/cta/cta-bg.png"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-fedsec-gray-900/80" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
            Build a resilient security strategy for the future
          </h2>
          <p className="text-lg text-fedsec-gray-300 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-accent)]">
            AI-powered cybersecurity solutions built to secure modern digital
            environments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
