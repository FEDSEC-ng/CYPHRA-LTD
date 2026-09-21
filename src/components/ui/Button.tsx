"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "grow-pill";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  showArrow = true,
}: ButtonProps) {
  if (variant === "grow-pill") {
    const pillClass = `grow-pill ${className}`;
    const content = (
      <>
        <span className="pill-label">{children}</span>
        {showArrow && (
          <span className="pill-icon">
            <ArrowRight size={18} />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={pillClass}>
          {content}
        </Link>
      );
    }

    return (
      <button type={type} className={pillClass} onClick={onClick}>
        {content}
      </button>
    );
  }

  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer font-[family-name:var(--font-accent)]";

  const variants = {
    primary:
      "bg-fedsec-purple text-white hover:bg-fedsec-purple-light hover:shadow-[0_0_30px_rgba(102,47,144,0.4)]",
    secondary:
      "bg-fedsec-pink text-white hover:bg-fedsec-pink-light hover:shadow-[0_0_30px_rgba(218,26,93,0.4)]",
    outline:
      "border-[1.5px] border-white/20 text-white hover:border-fedsec-purple hover:bg-fedsec-purple/10",
    ghost:
      "text-white/60 hover:text-white hover:bg-white/5",
    "grow-pill":
      "bg-fedsec-purple text-white hover:bg-fedsec-purple-light",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-sm gap-2.5",
    lg: "px-9 py-4 text-base gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
          {showArrow && variant !== "ghost" && (
            <ArrowRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
          )}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
    >
      {children}
      {showArrow && variant !== "ghost" && (
        <ArrowRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
      )}
    </motion.button>
  );
}
