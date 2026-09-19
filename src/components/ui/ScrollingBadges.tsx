"use client";

import { motion } from "framer-motion";

interface ScrollingBadgesProps {
  badges: string[];
}

export default function ScrollingBadges({ badges }: ScrollingBadgesProps) {
  const duplicated = [...badges, ...badges, ...badges];

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((badge, i) => (
          <span
            key={i}
            className="inline-flex items-center px-6 py-2 mx-2 rounded-full border border-fedsec-gray-200 bg-fedsec-white text-sm font-medium text-fedsec-gray-600 font-[family-name:var(--font-accent)]"
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
