"use client";

import { useEffect, useRef } from "react";

/**
 * ColorSplash — socialander-style mouse-following gradient glow.
 * Two translucent radial glows (purple leads, pink trails slower) that lerp
 * toward the cursor inside the parent section and fade out on leave.
 *
 * Place as a direct child of a `relative` section, BEFORE the content so the
 * glow renders above media layers but the content stays above it (DOM order).
 * `mode="dark"` uses screen blending (glows on video/imagery); `mode="light"`
 * uses multiply blending for white sections.
 */
export default function ColorSplash({ mode = "dark" }: { mode?: "dark" | "light" }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let raf = 0;
    let tx = 0, ty = 0;
    let ax = 0, ay = 0;
    let bx = 0, by = 0;
    let inside = false;
    let started = false;

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      if (inside) {
        tx = x;
        ty = y;
        if (!started) {
          ax = bx = tx;
          ay = by = ty;
          started = true;
        }
      }
    };

    const loop = () => {
      ax += (tx - ax) * 0.12;
      ay += (ty - ay) * 0.12;
      bx += (tx - bx) * 0.055;
      by += (ty - by) * 0.055;
      if (leadRef.current) {
        leadRef.current.style.transform = `translate3d(${ax}px, ${ay}px, 0) translate(-50%, -50%)`;
        leadRef.current.style.opacity = inside ? "1" : "0";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${bx}px, ${by}px, 0) translate(-50%, -50%)`;
        trailRef.current.style.opacity = inside ? "0.9" : "0";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const blend = mode === "dark" ? "screen" : "multiply";

  return (
    <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={leadRef}
        className="absolute left-0 top-0 h-[640px] w-[640px] rounded-full opacity-0 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(102,47,144,0.45) 0%, rgba(102,47,144,0.16) 38%, transparent 68%)",
          filter: "blur(32px)",
          mixBlendMode: blend,
          transition: "opacity 600ms ease",
        }}
      />
      <div
        ref={trailRef}
        className="absolute left-0 top-0 h-[440px] w-[440px] rounded-full opacity-0 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(218,26,93,0.32) 0%, rgba(218,26,93,0.12) 40%, transparent 70%)",
          filter: "blur(38px)",
          mixBlendMode: blend,
          transition: "opacity 700ms ease",
        }}
      />
    </div>
  );
}
