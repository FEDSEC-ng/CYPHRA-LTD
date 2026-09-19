"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { headerSlideDown } from "@/lib/animations";
import Button from "@/components/ui/Button";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-fedsec-white/95 backdrop-blur-md shadow-sm border-b border-fedsec-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={
                scrolled
                  ? "/images/fedsec-logo-black.png"
                  : "/images/fedsec-logo-white.png"
              }
              alt="FEDSEC"
              width={120}
              height={40}
              style={{ height: "auto" }}
              className="h-8 md:h-10"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-fedsec-purple font-[family-name:var(--font-accent)] ${
                  scrolled
                    ? "text-fedsec-gray-700"
                    : "text-fedsec-white/80 hover:text-fedsec-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-fedsec-gray-900 hover:bg-fedsec-gray-100"
                : "text-fedsec-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-fedsec-white border-t border-fedsec-gray-200"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-fedsec-gray-700 hover:text-fedsec-purple hover:bg-fedsec-purple/5 rounded-lg transition-colors font-medium font-[family-name:var(--font-accent)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Button href="/contact" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
