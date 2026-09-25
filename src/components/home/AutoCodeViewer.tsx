"use client";

import { useEffect, useState } from "react";
import { toneClass, type CodeLine } from "./LiveCode";

/**
 * AutoCodeViewer — rectangle "mini autocode" editor window.
 * Types a code file character-by-character into a syntax-tinted editor with
 * line numbers, IDE chrome, and a status bar, then holds and loops.
 * Respects prefers-reduced-motion (renders the full file statically).
 */
export default function AutoCodeViewer({
  file,
  lines,
  status,
  className = "",
}: {
  file: string;
  lines: CodeLine[];
  status?: string;
  className?: string;
}) {
  const [pos, setPos] = useState({ li: 0, ci: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const raf = requestAnimationFrame(() =>
        setPos({ li: lines.length, ci: 0 }),
      );
      return () => cancelAnimationFrame(raf);
    }

    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const line = lines[li];
      if (!line) {
        // finished the file — hold, then restart
        timer = setTimeout(() => {
          li = 0;
          ci = 0;
          setPos({ li: 0, ci: 0 });
          timer = setTimeout(step, 600);
        }, 3600);
        return;
      }
      if (ci < line.text.length) {
        ci += 2;
        setPos({ li, ci });
        timer = setTimeout(step, 14 + Math.random() * 22);
      } else {
        li += 1;
        ci = 0;
        setPos({ li, ci: 0 });
        timer = setTimeout(step, line.text.trim() === "" ? 40 : 150);
      }
    };

    timer = setTimeout(step, 500);
    return () => clearTimeout(timer);
  }, [lines]);

  const done = lines.slice(0, pos.li);
  const current = lines[pos.li];
  const active = current ? current.text.slice(0, pos.ci) : "";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0a12] shadow-[0_0_50px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* editor chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-fedsec-pink/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-fedsec-emerald/80" />
        <span className="ml-3 rounded-md bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-white/60">
          {file}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-fedsec-emerald">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fedsec-emerald opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fedsec-emerald" />
          </span>
          live
        </span>
      </div>

      {/* code body */}
      <div className="min-h-0 flex-1 overflow-hidden p-4 font-mono text-[11px] leading-[1.8] sm:text-xs">
        {done.map((l, i) => (
          <div key={i} className="flex whitespace-pre">
            <span className="w-7 shrink-0 select-none pr-3 text-right text-white/15">{i + 1}</span>
            <span className={toneClass[l.tone ?? "dim"]}>{l.text || " "}</span>
          </div>
        ))}
        {current && (
          <div className="flex whitespace-pre">
            <span className="w-7 shrink-0 select-none pr-3 text-right text-white/15">
              {pos.li + 1}
            </span>
            <span className={toneClass[current.tone ?? "dim"]}>
              {active}
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse rounded-[1px] bg-fedsec-pink" />
            </span>
          </div>
        )}
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
          {status}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-fedsec-purple-light">
          cyphra · authorized
        </span>
      </div>
    </div>
  );
}
