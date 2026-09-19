"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data/services";
import CTABanner from "@/components/ui/CTABanner";

const serviceIcons: Record<string, string> = {
  "advanced-cloud-security-protection": "/images/protexy/icons/BiLwEGhOv1EUnb8FqA8ZzcGg.svg",
  "ai-powered-threat-detection-system": "/images/protexy/icons/hEdInb3mCJe8MyL1oTSA35AmZY.svg",
  "end-to-end-data-encryption-service": "/images/protexy/icons/oo6hlxxs5ORxgDtM2c7wv6fLKd4.svg",
  "intelligent-network-firewall-protection": "/images/protexy/icons/GSAZyUIhDT2c10NzlOF0UcsT6c.svg",
  "intelligent-threat-monitoring": "/images/protexy/icons/SIb2C40P2SYrdZDpd43ru9IWG2M.svg",
  "rapid-incident-response-management": "/images/protexy/icons/qh9WSzmiZO49WPjU5MLP5yjGNnQ.svg",
};

const serviceCategories: Record<string, string> = {
  "advanced-cloud-security-protection": "Recovery",
  "ai-powered-threat-detection-system": "Detection",
  "end-to-end-data-encryption-service": "Encryption",
  "intelligent-network-firewall-protection": "Defense",
  "intelligent-threat-monitoring": "Prevention",
  "rapid-incident-response-management": "Analysis",
};

const serviceDescriptions: Record<string, string> = {
  "advanced-cloud-security-protection": "Secure cloud environments, applications, and sensitive data",
  "ai-powered-threat-detection-system": "Detect suspicious activity before it becomes a security threat",
  "end-to-end-data-encryption-service": "Protect sensitive information across its entire lifecycle",
  "intelligent-network-firewall-protection": "Comprehensive defense against unauthorized access and attacks",
  "intelligent-threat-monitoring": "Continuous surveillance to identify threats in real time",
  "rapid-incident-response-management": "Contain cyber incidents quickly and reduce disruption",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
              Our services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Security services we provide
            </h1>
            <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-3xl leading-relaxed">
              Comprehensive cybersecurity solutions designed to protect your
              organization from evolving digital threats.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={fadeInUp}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-2xl p-8 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-fedsec-purple/10 flex items-center justify-center shrink-0 group-hover:bg-fedsec-purple group-hover:text-fedsec-white transition-all duration-300">
                      <Image
                        src={serviceIcons[service.slug] || "/images/protexy/icons/BiLwEGhOv1EUnb8FqA8ZzcGg.svg"}
                        alt={serviceCategories[service.slug] || "Service"}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-fedsec-purple mb-2 font-[family-name:var(--font-accent)]">
                        {serviceCategories[service.slug] || "Service"}
                      </span>
                      <h3 className="text-lg font-bold text-fedsec-gray-900 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-fedsec-gray-500 text-sm leading-relaxed">
                        {serviceDescriptions[service.slug] || service.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
