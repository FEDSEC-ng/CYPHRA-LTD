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
import { ArrowRight, FolderOpen, Info } from "lucide-react";
import Tremble from "@/components/ui/Tremble";

type CaseStudy = {
  name: string;
  industry: string;
  location: string;
  plain: string;
  image: string;
  slug: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Tesla OData Wildcards to Employee Directory",
    industry: "Automotive",
    location: "$2,000 bounty",
    plain:
      "A search feature on a supplier portal let an outsider page through Tesla's internal staff directory, phone numbers and all.",
    image: "/images/disclosures/tesla-odata.png",
    slug: "tesla-odata-wildcards",
  },
  {
    name: "Supabase Auth Bypass to Admin",
    industry: "Technology",
    location: "$1,800 bounty",
    plain:
      "Signing up with a partner email was enough to get a working session, and one form field let anyone claim to be an admin.",
    image: "/images/disclosures/supabase-auth.png",
    slug: "supabase-auth-bypass",
  },
  {
    name: "Luxury SSO Chain to Broken Access",
    industry: "Retail",
    location: "Paid per environment",
    plain:
      "A public settings file handed over the keys, and the login flow never checked who was actually signing in.",
    image: "/images/disclosures/luxury-sso.jpg",
    slug: "luxury-sso-chain",
  },
  {
    name: "Payment Replay to Free Compute",
    industry: "Developer Tools",
    location: "GHSA credited",
    plain:
      "Replaying an old payment created new credits, like a receipt that works every time you show it.",
    image: "/images/disclosures/case-payment-code.jpg",
    slug: "codesandbox-payment-replay",
  },
  {
    name: "Polyglot Upload to Stored Scripts",
    industry: "Technology",
    location: "P3 S3 triage",
    plain:
      "One file could pass as a harmless archive and still run code when the browser opened it.",
    image: "/images/disclosures/case-filetransfer.jpg",
    slug: "polyglot-upload-stored-xss",
  },
  {
    name: "Share Flow Restriction Bypass",
    industry: "Social Media",
    location: "Under review",
    plain:
      "A private account blocked direct messages, but sharing a post quietly delivered one anyway.",
    image: "/images/disclosures/case-dm-bypass.jpg",
    slug: "dm-restriction-bypass",
  },
];

/**
 * CaseStudiesFolderStack - "Real Findings. Real Bounties."
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
 *  - while later folders enter, folder i recedes step-by-step - shifts up,
 *    scales down, dims - its folder-tab edge peeking at the top of the pile
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
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
          Case File {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <Link
        href={`/case-studies/${cs.slug}`}
        className="group relative block overflow-hidden rounded-2xl rounded-tl-none border border-white/10 bg-fedsec-gray-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]"
      >
        <div className="grid h-[520px] grid-cols-1 md:h-[560px] md:grid-cols-[1fr_1.05fr]">
          {/* copy */}
          <div className="order-2 flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12 md:order-1">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em]">
              <span className="text-fedsec-pink">{cs.industry}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-white/70">{cs.location}</span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-fedsec-white sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)]">
              {cs.name}
            </h3>
            <div className="rounded-xl border border-fedsec-purple/20 bg-fedsec-purple/[0.08] p-4">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-fedsec-pink font-[family-name:var(--font-accent)]">
                <Info size={12} /> In plain terms
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base font-[family-name:var(--font-body)]">
                {cs.plain}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3 font-[family-name:var(--font-accent)]">
              <span className="border-b border-fedsec-pink/60 pb-0.5">See case study</span>
              <ArrowRight size={15} className="text-fedsec-pink" />
            </span>
          </div>
          {/* visual */}
          <div className="relative order-1 h-40 md:order-2 md:h-full">
            <Image
              src={cs.image}
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

function MobileCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-44">
        <Image
          src={cs.image}
          alt={cs.name}
          fill
          sizes="92vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          Case {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="text-fedsec-pink">{cs.industry}</span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span className="text-fedsec-gray-500">{cs.location}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
          {cs.name}
        </h3>
        <p className="mt-3 rounded-xl bg-fedsec-purple/[0.06] p-3 text-sm leading-relaxed text-fedsec-gray-700 font-[family-name:var(--font-body)]">
          <span className="font-bold text-fedsec-purple">In plain terms: </span>
          {cs.plain}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)]">
          See case study <ArrowRight size={14} />
        </span>
      </div>
    </Link>
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
  const seg = 0.95 / total;
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    let idx = 0;
    for (let i = 0; i < total; i++) {
      const seated = i === 0 ? 0 : i * seg;
      if (v >= seated - 0.001) idx = i;
    }
    setActive(idx);
  });

  return (
    <section id="full-stories" className="scroll-mt-24 relative bg-fedsec-white text-fedsec-gray-900">
      {/* heading - normal flow above the pinned stack */}
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6 md:pt-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="section-tag">The Full Stories</span>
            <Tremble className="mt-4">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl lg:text-[56px] font-[family-name:var(--font-heading)]">
                We Let the Work <span className="gradient-text">Speak for Itself</span>
              </h2>
            </Tremble>
            <p className="mt-4 max-w-xl text-sm text-fedsec-gray-500 sm:text-base font-[family-name:var(--font-body)]">
              Six files. Each one starts with a plain explanation of what went
              wrong, then the technical detail underneath.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple transition-all hover:gap-3 font-[family-name:var(--font-accent)] md:mt-0"
          >
            See all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* mobile - plain stacked cards, no pinned scroll */}
      <div className="space-y-5 px-4 pb-16 sm:px-6 md:hidden">
        {caseStudies.map((cs, i) => (
          <MobileCard key={cs.slug} cs={cs} index={i} />
        ))}
      </div>

      {/* desktop - pinned stack */}
      <div
        ref={pinRef}
        style={{ height: `${total * 54 + 12}vh` }}
        className="relative hidden md:block"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* subtle light grid on white */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-fedsec-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-fedsec-white to-transparent" />

          {/* counter */}
          <div className="pointer-events-none absolute left-1/2 top-[10%] -translate-x-1/2 text-center">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-fedsec-gray-900/35">
              Unwrapping case {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {caseStudies.map((cs, i) => (
            <FolderCard key={cs.slug} cs={cs} index={i} total={total} progress={progress} />
          ))}

          {/* progress rail and continue cue */}
          <div className="absolute bottom-[5vh] left-1/2 flex w-[min(420px,70vw)] -translate-x-1/2 flex-col items-center gap-2">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-fedsec-gray-900/10">
              <motion.div
                style={{ scaleX: barScale }}
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-fedsec-purple via-fedsec-pink to-fedsec-emerald"
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-fedsec-gray-900/35">
              Keep scrolling for more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
