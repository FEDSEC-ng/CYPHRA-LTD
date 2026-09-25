"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * CyphraLogo — official brand lockup from /public/images.
 * White variant for dark surfaces (header, footer).
 */
export default function CyphraLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="CYPHRA — Know Your Risk"
      className={`relative inline-block shrink-0 ${className}`}
    >
      <Image
        src="/images/fedsec-logo-white.png"
        alt="CYPHRA — Know Your Risk"
        width={506}
        height={149}
        priority
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
