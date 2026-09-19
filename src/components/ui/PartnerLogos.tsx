"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-fedsec-gray-50 border-y border-fedsec-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-fedsec-gray-400 font-[family-name:var(--font-accent)]"
        >
          Trusted by industry leaders
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1, delay: 0.1 }}
        className="relative overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          <Image
            src="/images/protexy/logos/partner-strip.svg"
            alt="Partner logos"
            width={1300}
            height={61}
            className="h-10 w-auto mx-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
          <Image
            src="/images/protexy/logos/partner-strip.svg"
            alt="Partner logos"
            width={1300}
            height={61}
            className="h-10 w-auto mx-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
          <Image
            src="/images/protexy/logos/partner-strip.svg"
            alt="Partner logos"
            width={1300}
            height={61}
            className="h-10 w-auto mx-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
