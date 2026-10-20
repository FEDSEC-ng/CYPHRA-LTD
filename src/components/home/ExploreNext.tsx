"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, ClipboardList, Layers, MessageCircle } from "lucide-react";

const nextSteps = [
  {
    title: "How we work",
    description: "Four steps from first look to fixes in place.",
    href: "#how-we-work",
    icon: ClipboardList,
  },
  {
    title: "What we do",
    description: "Six services explained without the jargon.",
    href: "/services",
    icon: Layers,
  },
  {
    title: "Talk to us",
    description: "Ask a question or describe a concern.",
    href: "/contact",
    icon: MessageCircle,
  },
];

export default function ExploreNext() {
  return (
    <section className="relative overflow-hidden bg-fedsec-black py-16 md:py-20">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 blob-purple opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-tag">Keep Going</span>
          <h2 className="mt-4 text-2xl font-bold text-fedsec-white sm:text-3xl md:text-4xl font-[family-name:var(--font-heading)] tracking-tight">
            That is the proof. <span className="gradient-text">Here is the rest.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base font-[family-name:var(--font-body)]">
            You have seen the work. Next, see how we approach an engagement, or
            start a conversation about your own systems.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {nextSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={step.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-fedsec-purple/40 hover:bg-white/[0.05]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fedsec-purple/15 text-fedsec-purple">
                  <step.icon size={18} />
                </span>
                <span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-fedsec-white font-[family-name:var(--font-heading)]">
                    {step.title}
                    <ArrowRight
                      size={13}
                      className="text-fedsec-pink transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/55 font-[family-name:var(--font-body)]">
                    {step.description}
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-pink transition-all hover:gap-3 font-[family-name:var(--font-accent)]"
          >
            See all six case studies <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition-colors hover:text-white font-[family-name:var(--font-accent)]"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
