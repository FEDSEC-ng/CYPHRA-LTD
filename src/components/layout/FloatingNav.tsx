"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/70 text-white/70 shadow-lg backdrop-blur transition-colors hover:border-fedsec-purple/50 hover:text-white"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {!onContact && (
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-fedsec-purple px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_30px_rgba(102,47,144,0.4)] transition-colors hover:bg-fedsec-purple-light font-[family-name:var(--font-accent)] sm:text-sm"
        >
          <MessageCircle size={15} />
          Talk to us
        </Link>
      )}
    </div>
  );
}
