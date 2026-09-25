"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/**
 * Tremble — socialander-style subtle shake that plays each time the element
 * enters the viewport. Implemented purely with framer variants (no effect
 * state), so it re-triggers on every entry and reverses safely.
 */
const shake: Variants = {
  rest: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  shake: {
    x: [0, -1.6, 1.6, -1.1, 1.1, -0.5, 0],
    y: [0, 1, -1, -1.4, 1.4, 0.4, 0],
    rotate: [0, -0.35, 0.32, -0.26, 0.26, -0.1, 0],
    transition: { duration: 0.7, ease: "easeInOut", times: [0, 0.15, 0.3, 0.45, 0.6, 0.78, 1] },
  },
};

export default function Tremble({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={shake}
        initial="rest"
        animate={inView ? "shake" : "rest"}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
