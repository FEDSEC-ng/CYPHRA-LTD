"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "/7", label: "Monitoring & Support" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative -mt-1 z-10 bg-fedsec-white border-y border-fedsec-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-fedsec-gray-200"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="py-8 md:py-12 px-6 text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-fedsec-purple mb-2 font-[family-name:var(--font-heading)]">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm md:text-base text-fedsec-gray-500 font-[family-name:var(--font-accent)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
