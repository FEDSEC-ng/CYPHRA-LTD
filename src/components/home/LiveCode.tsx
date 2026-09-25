"use client";

import { useEffect, useState } from "react";

export type CodeLine = {
  text: string;
  tone?: "attack" | "net" | "ok" | "warn" | "dim";
};

const toneClass: Record<NonNullable<CodeLine["tone"]>, string> = {
  attack: "text-fedsec-pink",
  net: "text-sky-400",
  ok: "text-fedsec-emerald",
  warn: "text-amber-400",
  dim: "text-white/45",
};

/**
 * LiveCode — self-typing terminal output used inside the process wheel and
 * the red/blue/GRC tab panel. Reveals lines one by one, holds with a blinking
 * cursor, then loops. Re-syncs whenever `lines` changes.
 */
export default function LiveCode({
  lines,
  title = "cyphra@ops:~",
  interval = 1100,
  className = "",
}: {
  lines: CodeLine[];
  title?: string;
  interval?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [prevLines, setPrevLines] = useState(lines);
  if (prevLines !== lines) {
    // React-endorsed render-time adjustment when the stream content changes.
    setPrevLines(lines);
    setCount(0);
  }

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => (c >= lines.length + 3 ? 0 : c + 1));
    }, interval);
    return () => clearInterval(t);
  }, [lines, interval]);

  const visible = lines.slice(0, Math.min(count, lines.length));
  const settled = count > lines.length;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-black/75 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-fedsec-pink/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-fedsec-emerald/80" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          {title}
        </span>
      </div>
      <div className="p-3 font-mono text-[11px] leading-[1.75]">
        {visible.map((l, i) => (
          <div key={`${i}-${l.text.slice(0, 8)}`} className={toneClass[l.tone ?? "dim"]}>
            <span className="mr-2 text-fedsec-purple-light">$</span>
            {l.text}
          </div>
        ))}
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-fedsec-purple-light">$</span>
          <span
            className={`inline-block h-3 w-[7px] animate-pulse rounded-[1px] ${
              settled ? "bg-fedsec-emerald" : "bg-fedsec-pink"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
