"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "FinSecure Capital",
  "MediCore Systems",
  "CloudSync Technologies",
  "NexaBank",
  "Vireon Corporation",
  "TechVault Inc.",
  "SecureData Corp",
  "CyberShield Ltd.",
];

export default function ClientsLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-fedsec-gray-50 border-y border-fedsec-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-fedsec-gray-400 font-[family-name:var(--font-accent)]"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center mx-8 text-lg font-bold text-fedsec-gray-300 font-[family-name:var(--font-heading)]"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
