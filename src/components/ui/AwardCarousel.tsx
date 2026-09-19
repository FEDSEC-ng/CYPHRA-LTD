"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Award {
  year: string;
  name: string;
  description: string;
  icon: string;
}

const awards: Award[] = [
  {
    year: "2026",
    name: "Cyber Defense Excellence",
    description:
      "Recognized for advancing cybersecurity protection and threat prevention",
    icon: "/images/protexy/awards/award1.svg",
  },
  {
    year: "2025",
    name: "Security Innovation Award",
    description:
      "Honoring breakthrough solutions in modern cybersecurity technology",
    icon: "/images/protexy/awards/award2.svg",
  },
  {
    year: "2025",
    name: "Global Trust Recognition",
    description: "Awarded for delivering trusted security solutions worldwide",
    icon: "/images/protexy/awards/award3.svg",
  },
  {
    year: "2024",
    name: "Threat Response Leadership",
    description:
      "Recognizing excellence in threat detection and incident response.",
    icon: "/images/protexy/awards/award4.svg",
  },
  {
    year: "2024",
    name: "Digital Protection Achievement",
    description:
      "Celebrating outstanding contributions to digital security and resilience.",
    icon: "/images/protexy/awards/award5.svg",
  },
];

export default function AwardCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 40, stiffness: 200 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">
            Our achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
            Honoring innovation in cybersecurity solutions
          </h2>
        </motion.div>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  damping: 40,
                  stiffness: 200,
                  delay: index * 0.1,
                }}
                className="w-80 flex-shrink-0 bg-fedsec-white border border-fedsec-gray-200 rounded-2xl p-6 hover:border-fedsec-purple/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-fedsec-purple/10 flex items-center justify-center">
                    <Image
                      src={award.icon}
                      alt={award.name}
                      width={40}
                      height={40}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-xs font-bold text-fedsec-purple bg-fedsec-purple/10 px-3 py-1 rounded-full font-[family-name:var(--font-accent)]">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)]">
                  {award.name}
                </h3>
                <p className="text-sm text-fedsec-gray-500 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
