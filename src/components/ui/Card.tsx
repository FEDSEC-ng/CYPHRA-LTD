"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  dark = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className={`rounded-2xl p-6 md:p-8 transition-shadow duration-300 ${
        dark
          ? "bg-fedsec-gray-800 border border-fedsec-gray-700 hover:shadow-lg hover:shadow-fedsec-purple/10"
          : "bg-fedsec-white border border-fedsec-gray-200 hover:shadow-lg hover:shadow-fedsec-purple/10"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
