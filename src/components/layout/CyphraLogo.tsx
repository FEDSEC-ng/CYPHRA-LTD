"use client";

import Link from "next/link";
import Image from "next/image";

type CyphraLogoProps = {
  className?: string;
  /**
   * "auto" follows the device color scheme (dark logo on light screens,
   * light logo when the device is in dark mode).
   * "white" / "black" force one logo for fixed backgrounds.
   * @default "auto"
   */
  variant?: "white" | "black" | "auto";
};

/**
 * CyphraLogo — brand image wordmark.
 * - /images/cyphra-logo-white.png for dark backgrounds
 * - /images/cyphra-logo-black.png for light backgrounds
 */
export default function CyphraLogo({
  className = "",
  variant = "auto",
}: CyphraLogoProps) {
  if (variant !== "auto") {
    const forced = variant === "black";
    return (
      <Link
        href="/"
        aria-label="CYPHRA home"
        className={`inline-flex shrink-0 items-center ${className}`}
      >
        <Image
          src={forced ? "/images/cyphra-logo-black.png" : "/images/cyphra-logo-white.png"}
          alt="CYPHRA: Know Your Risk"
          width={forced ? 513 : 516}
          height={forced ? 141 : 186}
          className="h-8 w-auto md:h-9"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="CYPHRA home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/images/cyphra-logo-black.png"
        alt="CYPHRA: Know Your Risk"
        width={513}
        height={141}
        className="h-8 w-auto md:h-9 dark:hidden"
        priority
      />
      <Image
        src="/images/cyphra-logo-white.png"
        alt=""
        aria-hidden="true"
        width={516}
        height={186}
        className="hidden h-8 w-auto md:h-9 dark:block"
        priority
      />
    </Link>
  );
}
