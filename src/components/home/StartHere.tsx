"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, FileSearch, MessageCircle } from "lucide-react";

const paths = [
  {
    step: "01",
    title: "See what we do",
    description: "Every service explained in plain language, no security background needed.",
    href: "/services",
    icon: Compass,
  },
  {
    step: "02",
    title: "Check the proof",
    description: "Real reports, what they meant, and what changed afterwards.",
    href: "/case-studies",
    icon: FileSearch,
  },
  {
    step: "03",
    title: "Start a conversation",
    description: "Ask a question or describe a worry. No obligation.",
    href: "/contact",
    icon: MessageCircle,
  },
];

export default function StartHere() {
  return (
    <section className="relative bg-fedsec-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-[260px] shrink-0"
          >
            <span className="section-tag">New Here?</span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed font-[family-name:var(--font-body)]">
              You do not need a security background to read this site. Pick a path.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
            {paths.map((path, i) => (
              <motion.div
                key={path.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link
                  href={path.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-fedsec-purple/40 hover:bg-white/[0.05]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fedsec-purple/15 text-fedsec-purple">
                    <path.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {path.step}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-sm font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
                      {path.title}
                      <ArrowRight
                        size={13}
                        className="text-fedsec-pink transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-white/55 font-[family-name:var(--font-body)]">
                      {path.description}
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
