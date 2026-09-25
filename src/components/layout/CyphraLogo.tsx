"use client";

import Link from "next/link";

/**
 * CyphraLogo — interim typographic wordmark.
 * Real CYPHRA logo assets pending upload; swap for <Image> when provided.
 */
export default function CyphraLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="CYPHRA home"
      className={`inline-flex shrink-0 items-baseline font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-white md:text-2xl ${className}`}
    >
      CYPHRA<span className="text-fedsec-pink">.</span>
    </Link>
  );
}
