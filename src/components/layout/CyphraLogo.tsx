"use client";

import Link from "next/link";
import Image from "next/image";

type CyphraLogoProps = {
  className?: string;
  /**
   * "white" - light logo for dark/black backgrounds (header, footer).
   * "black" - dark logo for light/white backgrounds.
   * @default "white"
   */
  variant?: "white" | "black";
};

/**
 * CyphraLogo - brand image wordmark.
 * - white variant: /images/cyphra-logo-white.png (for black backgrounds)
 * - black variant: /images/cyphra-logo-black.png (for white backgrounds)
 */
export default function CyphraLogo({
  className = "",
  variant = "white",
}: CyphraLogoProps) {
  const src =
    variant === "black"
      ? "/images/cyphra-logo-black.png"
      : "/images/cyphra-logo-white.png";

  return (
    <Link
      href="/"
      aria-label="CYPHRA home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={src}
        alt="CYPHRA - Know Your Risk"
        width={variant === "black" ? 513 : 516}
        height={variant === "black" ? 141 : 186}
        className="h-8 w-auto md:h-9"
        priority
      />
    </Link>
  );
}
