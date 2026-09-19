"use client";

import { motion } from "framer-motion";

interface WordByWordRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function WordByWordReveal({
  text,
  className = "",
  tag = "h1",
}: WordByWordRevealProps) {
  const words = text.split(" ");

  const Tag = tag;

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.001, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 200,
            mass: 1,
            delay: i * 0.06,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
