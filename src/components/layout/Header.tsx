"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { headerSlideDown } from "@/lib/animations";

function FedsecLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/fedsec-logo-white.png"
        alt="FEDSEC"
        width={36}
        height={36}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={headerSlideDown}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <FedsecLogo />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors font-[family-name:var(--font-accent)] rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 grow-pill !h-10 !min-w-[140px] !text-sm !px-5"
            >
              <span className="pill-label">Get in Touch</span>
              <span className="pill-icon !w-8 !h-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
            className="lg:hidden glass-dark border-t border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors font-medium font-[family-name:var(--font-accent)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="grow-pill !w-full justify-center"
                >
                  <span className="pill-label text-center">Get in Touch</span>
                  <span className="pill-icon !w-8 !h-8">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
