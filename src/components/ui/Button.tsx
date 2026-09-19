"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer font-[family-name:var(--font-accent)]";

  const variants = {
    primary:
      "bg-fedsec-purple text-fedsec-white hover:bg-fedsec-purple-light hover:shadow-[0_0_20px_rgba(102,47,144,0.4)]",
    secondary:
      "bg-fedsec-pink text-fedsec-white hover:bg-fedsec-pink-light hover:shadow-[0_0_20px_rgba(221,26,93,0.4)]",
    outline:
      "border-2 border-fedsec-purple text-fedsec-purple hover:bg-fedsec-purple hover:text-fedsec-white",
    ghost:
      "text-fedsec-purple hover:bg-fedsec-purple/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
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
    </motion.button>
  );
}
