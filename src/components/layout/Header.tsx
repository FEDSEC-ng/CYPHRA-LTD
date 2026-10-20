"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { headerSlideDown } from "@/lib/animations";
import CyphraLogo from "./CyphraLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      variants={headerSlideDown}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <CyphraLogo variant="white" />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors font-[family-name:var(--font-accent)] rounded-lg ${
                    active
                      ? "text-white bg-white/[0.07]"
                      : "text-white/65 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-fedsec-purple via-fedsec-pink to-fedsec-emerald" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 grow-pill !h-10 !min-w-[140px] !text-sm !px-5"
            >
              <span className="pill-label">Talk to us</span>
              <span className="pill-icon !w-8 !h-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-fedsec-purple via-fedsec-pink to-fedsec-emerald"
      />

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
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors font-medium font-[family-name:var(--font-accent)] ${
                      active
                        ? "text-white bg-white/[0.07]"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-fedsec-pink" />}
                  </Link>
                );
              })}
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="grow-pill !w-full justify-center"
                >
                  <span className="pill-label text-center">Talk to us</span>
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
