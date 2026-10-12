"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "CSEAN",
    full: "Cyber Security Experts Association of Nigeria",
    logo: "/images/partners/csean-logo.png",
    href: "https://csean.org.ng",
  },
];

export default function Memberships() {
  return (
    <section className="py-16 md:py-20 bg-fedsec-white border-y border-fedsec-gray-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag">Memberships and Affiliations</span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
            Recognized by the Bodies That Set the Standard
          </h2>
          <p className="mt-4 text-base md:text-lg text-fedsec-gray-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Our researchers hold individual membership with the Cyber Security
            Experts Association of Nigeria, the national umbrella body for
            cybersecurity professionals.
          </p>
        </motion.div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {members.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.full} website`}
              className="flex flex-col items-center gap-3 shrink-0"
            >
              <span className="relative block h-20 w-56 md:h-24 md:w-64">
                <Image
                  src={m.logo}
                  alt={m.full}
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-contain"
                />
              </span>
              <span className="text-xs font-semibold text-fedsec-gray-900/50 font-[family-name:var(--font-accent)]">
                {m.full}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
