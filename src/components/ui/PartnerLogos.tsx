"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partnerLogos = [
  { src: "/images/protexy/logos/partners-row1.svg", alt: "Partners Row 1" },
  { src: "/images/protexy/logos/partners-row2.svg", alt: "Partners Row 2" },
  { src: "/images/protexy/logos/partners-row3.svg", alt: "Partners Row 3" },
];

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-fedsec-gray-50 border-y border-fedsec-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-fedsec-gray-400 font-[family-name:var(--font-accent)]"
        >
          Trusted by industry leaders
        </motion.p>
      </div>
      <div className="space-y-8">
        {partnerLogos.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1, delay: i * 0.1 }}
            className="relative overflow-hidden"
          >
            <div className="flex animate-marquee whitespace-nowrap">
              <Image
                src={row.src}
                alt={row.alt}
                width={1422}
                height={61}
                className="h-10 w-auto mx-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <Image
                src={row.src}
                alt={row.alt}
                width={1422}
                height={61}
                className="h-10 w-auto mx-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
