"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FolderOpen } from "lucide-react";
import Tremble from "@/components/ui/Tremble";

type CaseStudy = {
  name: string;
  industry: string;
  location: string;
  description: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "SOC Build-Out, Zero to Detection",
    industry: "Financial Services",
    location: "Nigeria",
    description:
      "Designed and built a bank's SOC from scratch — SIEM/SOAR platforms and 200+ detection use cases mapped to MITRE ATT&CK.",
  },
  {
    name: "Web & API Security Assessment",
    industry: "Technology",
    location: "United Kingdom",
    description:
      "Full-stack security assessment of a SaaS platform, uncovering business-logic flaws and critical API vulnerabilities.",
  },
  {
    name: "ISO 27001 Compliance Program",
    industry: "Healthcare",
    location: "Germany",
    description:
      "GRC advisory establishing auditable security governance, controls, and documentation toward certification.",
  },
  {
    name: "Enterprise Network Hardening",
    industry: "Enterprise",
    location: "Nigeria",
    description:
      "Zero-trust architecture review, firewall segmentation, and continuous monitoring across a corporate estate.",
  },
  {
    name: "E-Commerce Platform Protection",
    industry: "E-Commerce",
    location: "United States",
    description:
      "Application, API, and cloud infrastructure security for a high-traffic retail platform.",
  },
  {
    name: "Government Cybersecurity Framework",
    industry: "Government",
    location: "Ghana",
    description:
      "SOC advisory and security operations setup for a national digital transformation initiative.",
  },
];

/**
 * CaseStudiesFolderStack — "Real Clients. Real Results."
 *
 * A pinned, scroll-driven folder stack. Every visual state is a pure function
 * of scrollYProgress (no discrete card state, no whileInView on cards), so the
 * cycle is exactly reversible: scrolling back unwraps each folder, grows the
 * previous one back to full size, and clears the stack before arriving.
 *
 * Choreography (n folders):
 *  - folder 0 is already seated in front at progress 0
 *  - folder i (i>0) waits beneath the seated folder (bottom edge peeking),
 *    then slides up and covers it during its enter window
 *  - while later folders enter, folder i recedes step-by-step — shifts up,
 *    scales down, dims — its folder-tab edge peeking at the top of the pile
 *  - z-order flips at the start of each enter so the incoming folder covers
 *    the pile as it slides up (and drops back beneath on the way in reverse)
 */
function FolderCard({
  cs,
  index,
  total,
  progress,
}: {
  cs: CaseStudy;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 0.95 / total;
  // Folder 0 starts seated; folder i>0 enters during the tail of its segment.
  const enterStart = index === 0 ? 0 : (index - 1) * seg + seg * 0.28;
  const enterEnd = index === 0 ? 0.0001 : (index - 1) * seg + seg;

  // Keyframe times: seat window, then each later folder's seat moment.
  const times: number[] = [enterStart, enterEnd];
  for (let j = index + 1; j < total; j++) {
    times.push(j * seg);
  }

  const WAIT_Y = 64;
  const RECEDE_Y = -22;

  const yOut: number[] = index === 0 ? [0, 0] : [WAIT_Y, 0];
  const scaleOut: number[] = index === 0 ? [1, 1] : [0.955, 1];
  const brightOut: number[] = index === 0 ? [1, 1] : [0.55, 1];
  const opacityOut: number[] = [1, 1];

  for (let d = 1; d < times.length - 1; d++) {
    yOut.push(RECEDE_Y * d);
    scaleOut.push(Math.max(1 - 0.045 * d, 0.78));
    brightOut.push(Math.max(1 - 0.3 * d, 0.28));
    opacityOut.push(d > 3 ? 0.85 : 1);
  }

  const y = useTransform(progress, times, yOut);
  const scale = useTransform(progress, times, scaleOut);
  const brightness = useTransform(progress, times, brightOut);
  const opacity = useTransform(progress, times, opacityOut);
  const filter = useMotionTemplate`brightness(${brightness})`;

  // Layering: entered folders stack front-ward (100 + i); a waiting folder
  // sits beneath the pile (z = i) and flips to the front as it starts sliding.
  const zTimes = index === 0 ? [0, 1] : [enterStart, Math.min(enterStart + 0.012, enterEnd), enterEnd];
  const zOut = index === 0 ? [100, 100] : [index, 100 + index, 100 + index];
  const zIndex = useTransform(progress, zTimes, zOut);

  return (
    <motion.div
      style={{ y, scale, opacity, filter, zIndex }}
      className="absolute left-1/2 top-1/2 w-[min(940px,92vw)] -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      {/* folder tab */}
      <div className="relative ml-6 flex h-9 w-48 items-center gap-2 rounded-t-xl border border-b-0 border-white/10 bg-fedsec-gray-800 px-4">
        <FolderOpen size={13} className="text-fedsec-pink" />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Case File {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <Link
        href="/case-studies"
        className="group relative block overflow-hidden rounded-2xl rounded-tl-none border border-white/10 bg-fedsec-gray-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]"
      >
        <div className="grid h-[560px] grid-cols-1 md:h-[540px] md:grid-cols-[1fr_1.05fr]">
          {/* copy */}
          <div className="order-2 flex flex-col justify-center gap-4 p-7 sm:p-10 md:order-1">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em]">
              <span className="text-fedsec-pink">{cs.industry}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-white/40">{cs.location}</span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-fedsec-white sm:text-3xl font-[family-name:var(--font-heading)]">
              {cs.name}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-white/50 sm:text-base font-[family-name:var(--font-body)] line-clamp-4">
              {cs.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3 font-[family-name:var(--font-accent)]">
              <span className="border-b border-fedsec-pink/60 pb-0.5">See case study</span>
              <ArrowRight size={15} className="text-fedsec-pink" />
            </span>
          </div>
          {/* visual */}
          <div className="relative order-1 h-40 md:order-2 md:h-full">
            <Image
              src={`/images/protexy/cases/case${(index % 6) + 1}.png`}
              alt={cs.name}
              fill
              sizes="(max-width: 768px) 92vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-fedsec-purple/35 via-transparent to-fedsec-pink/20 mix-blend-screen" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-fedsec-gray-900 via-fedsec-gray-900/20 to-transparent md:block" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesFolderStack() {
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.5 });
  const barScale = useTransform(progress, [0, 1], [0.02, 1]);

  const total = caseStudies.length;
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    let idx = 0;
    for (let i = 0; i < total; i++) {
      const seated = i === 0 ? 0 : i * seg;
      if (v >= seated - 0.001) idx = i;
    }
    setActive(idx);
  });
  const seg = 0.95 / total;

  return (
    <section className="relative bg-fedsec-white text-fedsec-gray-900">
      {/* heading — normal flow above the pinned stack */}
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6 md:pt-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="section-tag">Real Clients. Real Results.</span>
            <Tremble className="mt-4">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl lg:text-[56px] font-[family-name:var(--font-heading)]">
                We Let the Work <span className="gradient-text">Speak for Itself</span>
              </h2>
            </Tremble>
          </div>
          <Link
            href="/case-studies"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple transition-all hover:gap-3 font-[family-name:var(--font-accent)] md:mt-0"
          >
            See all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* pinned stack */}
      <div ref={pinRef} style={{ height: `${total * 88 + 12}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* subtle light grid on white */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-fedsec-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-fedsec-white to-transparent" />

          {/* counter */}
          <div className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 text-center">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-fedsec-gray-900/35">
              Unwrapping case {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {caseStudies.map((cs, i) => (
            <FolderCard key={cs.name} cs={cs} index={i} total={total} progress={progress} />
          ))}

          {/* progress rail */}
          <div className="absolute bottom-[7vh] left-1/2 h-[3px] w-[min(420px,70vw)] -translate-x-1/2 overflow-hidden rounded-full bg-fedsec-gray-900/10">
            <motion.div
              style={{ scaleX: barScale }}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-fedsec-purple via-fedsec-pink to-fedsec-emerald"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
