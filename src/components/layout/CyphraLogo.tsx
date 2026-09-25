"use client";

import Link from "next/link";

/**
 * CyphraLogo — text wordmark pending official CYPHRA logo assets.
 * Swap the wordmark for an <Image> of the official logo when provided.
 */
export default function CyphraLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="CYPHRA home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fedsec-purple to-fedsec-pink font-[family-name:var(--font-heading)] text-sm font-bold text-white">
        C
      </span>
      <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-white">
        CYPHRA<span className="text-fedsec-pink">.</span>
      </span>
    </Link>
  );
}
