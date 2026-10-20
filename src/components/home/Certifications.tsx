"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    badge: "/images/certifications/htb-cpts.png",
    alt: "Hack The Box Certified Penetration Testing Specialist badge",
    title: "Penetration Testing",
    code: "CPTS",
    issuer: "Hack The Box",
  },
  {
    badge: "/images/certifications/ine-ecppt.png",
    alt: "INE Certified Professional Penetration Tester badge",
    title: "Professional Pentesting",
    code: "eCPPT",
    issuer: "INE Security",
  },
  {
    badge: "/images/certifications/ine-ewpt.png",
    alt: "INE Web Application Penetration Tester badge",
    title: "Web App Pentesting",
    code: "eWPT",
    issuer: "INE Security",
  },
  {
    badge: "/images/certifications/secops-cap.png",
    alt: "The SecOps Group Certified AppSec Practitioner badge",
    title: "Application Security",
    code: "CAP",
    issuer: "The SecOps Group",
  },
  {
    badge: "/images/certifications/secops-cnsp.png",
    alt: "The SecOps Group Certified Network Security Practitioner badge",
    title: "Network Security",
    code: "CNSP",
    issuer: "The SecOps Group",
  },
  {
    badge: "/images/certifications/isc2-cc.png",
    alt: "ISC2 Certified in Cybersecurity badge",
    title: "Cybersecurity",
    code: "CC",
    issuer: "ISC2",
  },
  {
    badge: "/images/certifications/google-cybersecurity.png",
    alt: "Google Cybersecurity Professional Certificate badge",
    title: "Cybersecurity",
    code: "Professional Certificate",
    issuer: "Google",
  },
  {
    badge: "/images/certifications/google-associate-cloud-engineer.png",
    alt: "Google Cloud Associate Cloud Engineer badge",
    title: "Associate Cloud Engineer",
    code: "ACE",
    issuer: "Google Cloud",
  },
  {
    badge: "/images/certifications/cisco-network-defense.png",
    alt: "Cisco Network Defense badge",
    title: "Network Defense",
    code: "Network Defense",
    issuer: "Cisco Networking Academy",
  },
  {
    badge: "/images/certifications/apisec-acp.png",
    alt: "APIsec Certified Practitioner badge",
    title: "API Security",
    code: "ACP",
    issuer: "APIsec University",
  },
  {
    badge: "/images/certifications/apisec-casa.png",
    alt: "APIsec Certified API Security Analyst badge",
    title: "API Security Analysis",
    code: "CASA",
    issuer: "APIsec University",
  },
  {
    badge: "/images/certifications/google-associate-cloud-engineer.png",
    alt: "Google Cloud Certified Associate Cloud Engineer (Batch)",
    title: "Cloud Engineering (Batch)",
    code: "ACE",
    issuer: "Google Cloud",
  },
];

export default function Certifications({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={`py-16 md:py-20 border-y ${
        dark
          ? "bg-fedsec-black border-white/5"
          : "bg-fedsec-gray-50 border-fedsec-gray-900/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag">Certifications</span>
          <h2
            className={`mt-4 text-2xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-heading)] ${
              dark ? "text-fedsec-white" : "text-fedsec-gray-900"
            }`}
          >
            Credentials Across the Disciplines
          </h2>
          <p
            className={`mt-4 text-base md:text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)] ${
              dark ? "text-white/70" : "text-fedsec-gray-500"
            }`}
          >
            Our team holds current certifications across offensive security,
            application security, cloud, and blue team operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              className={`flex flex-col items-center rounded-2xl border px-4 py-5 text-center ${
                dark
                  ? "bg-white/[0.03] border-white/10"
                  : "bg-fedsec-white border-fedsec-gray-900/10"
              }`}
            >
              <span className="relative block h-20 w-20 md:h-24 md:w-24">
                <Image
                  src={cert.badge}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-contain"
                />
              </span>
              <h3
                className={`mt-4 text-sm font-bold leading-snug font-[family-name:var(--font-heading)] ${
                  dark ? "text-fedsec-white" : "text-fedsec-gray-900"
                }`}
              >
                {cert.title}
              </h3>
              <p
                className={`mt-1 text-[11px] font-semibold uppercase tracking-wide font-[family-name:var(--font-accent)] ${
                  dark ? "text-white/50" : "text-fedsec-gray-500"
                }`}
              >
                {cert.code}
              </p>
              <p
                className={`mt-1 text-xs font-[family-name:var(--font-body)] ${
                  dark ? "text-white/60" : "text-fedsec-gray-500"
                }`}
              >
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
