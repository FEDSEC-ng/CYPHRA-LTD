"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Search,
  ClipboardCheck,
  Network,
  Code,
  Activity,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Search: <Search size={28} />,
  ClipboardCheck: <ClipboardCheck size={28} />,
  Network: <Network size={28} />,
  Code: <Code size={28} />,
  Activity: <Activity size={28} />,
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Comprehensive Security Services"
          description="Our multidisciplinary approach covers every aspect of cybersecurity — from identifying vulnerabilities to building resilient security programs."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl p-8 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-fedsec-purple/10 flex items-center justify-center text-fedsec-purple mb-6 group-hover:bg-fedsec-purple group-hover:text-fedsec-white transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-fedsec-gray-500 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
