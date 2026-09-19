"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Teams", href: "/team" },
  { label: "Case study", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-fedsec-gray-900 text-fedsec-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand + Email */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/fedsec-logo-white.png"
                alt="FEDSEC"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-fedsec-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-[family-name:var(--font-accent)]">
              AI-powered cybersecurity solutions built to secure modern digital
              environments
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-fedsec-gray-800 border border-fedsec-gray-700 rounded-lg text-sm text-fedsec-white placeholder:text-fedsec-gray-500 focus:border-fedsec-purple focus:ring-1 focus:ring-fedsec-purple outline-none transition-all font-[family-name:var(--font-accent)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-fedsec-purple text-fedsec-white rounded-lg text-sm font-semibold hover:bg-fedsec-purple-light transition-colors font-[family-name:var(--font-accent)]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-fedsec-gray-300 font-[family-name:var(--font-accent)]">
                  Pages
                </h4>
                <ul className="space-y-3">
                  {footerNav.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-fedsec-gray-400 hover:text-fedsec-purple transition-colors font-[family-name:var(--font-accent)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-fedsec-gray-300 font-[family-name:var(--font-accent)]">
                  &nbsp;
                </h4>
                <ul className="space-y-3">
                  {footerNav.slice(4).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-fedsec-gray-400 hover:text-fedsec-purple transition-colors font-[family-name:var(--font-accent)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-fedsec-gray-300 font-[family-name:var(--font-accent)]">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-fedsec-gray-400 hover:text-fedsec-purple transition-colors font-[family-name:var(--font-accent)]"
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-fedsec-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fedsec-gray-500 font-[family-name:var(--font-accent)]">
            &copy; {new Date().getFullYear()} FEDSEC. All rights reserved.
          </p>
          <p className="text-xs text-fedsec-gray-600 font-[family-name:var(--font-accent)]">
            Built on the principle of trust. Professionalism, confidentiality,
            continuous learning, and responsible security practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
