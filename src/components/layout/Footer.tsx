"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { SOCIAL_ITEMS } from "@/components/ui/SocialIcons";
import CyphraLogo from "./CyphraLogo";

const serviceLinks = [
  { label: "Vulnerability Assessment & Penetration Testing", href: "/services/vulnerability-assessment-and-penetration-testing" },
  { label: "GRC Advisory", href: "/services/grc-advisory" },
  { label: "Network Security", href: "/services/network-security" },
  { label: "Software Security", href: "/services/software-security" },
  { label: "Security Operations", href: "/services/security-operations" },
  { label: "Incident Response", href: "/services/incident-response" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-fedsec-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <CyphraLogo variant="white" />
            </div>
            <p className="text-base text-white/70 leading-relaxed mb-6 max-w-xs font-[family-name:var(--font-body)]">
              {SITE.description}
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_ITEMS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/70 hover:bg-fedsec-purple hover:text-white transition-all duration-300"
                  aria-label={s.label}
                  title={s.label}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-5 font-[family-name:var(--font-accent)]">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-5 font-[family-name:var(--font-accent)]">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-5 font-[family-name:var(--font-accent)]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[15px] text-white/70 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-[15px] text-white/70 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white/70 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                >
                  {SITE.url}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-white/50 font-[family-name:var(--font-body)]">
              &copy; {new Date().getFullYear()} CYPHRA. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-white/35 font-[family-name:var(--font-body)]">
              {SITE.legalName} · RC {SITE.rcNumber} · Registered in Nigeria
            </p>
          </div>
          <p className="text-xs text-white/45 font-[family-name:var(--font-accent)] tracking-wide">
            Different Expertise. One Collective. Secure by Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
