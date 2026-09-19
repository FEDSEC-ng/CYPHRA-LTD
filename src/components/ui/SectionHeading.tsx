"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`inline-block mb-4 text-sm font-semibold uppercase tracking-widest font-[family-name:var(--font-accent)] ${
            light ? "text-fedsec-pink" : "text-fedsec-purple"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-normal font-[family-name:var(--font-heading)] leading-tight mb-4 ${
          light ? "text-fedsec-white" : "text-fedsec-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-fedsec-gray-300" : "text-fedsec-gray-500"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
