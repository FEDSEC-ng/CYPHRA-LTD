"use client";

import { useEffect, useRef } from "react";

/**
 * PuzzleGradient — fnz-style living gradient field.
 *
 * A black canvas where luminous brand-colored blobs (purple / pink / emerald)
 * drift continuously on their own. Thin rounded "puzzle seams" overlay the
 * field so the gradient reads as interlocking pieces slowly trading colors.
 *
 * Interaction: moving the cursor across the host bends the flow direction
 * toward the mouse movement vector — hover steers the puzzle. When idle
 * (or on leave) the field resumes its autonomous slow rotation.
 *
 * Accessibility / performance:
 *  - prefers-reduced-motion → renders a single static frame
 *  - pauses when scrolled out of view (IntersectionObserver)
 *  - DPR capped at 1.5
 */
const PALETTE: Array<[number, number, number]> = [
  [102, 47, 144],   // fedsec purple
  [218, 26, 93],    // fedsec pink
  [16, 185, 129],   // emerald
  [123, 58, 171],   // purple light
  [232, 69, 122],   // pink light
  [59, 130, 246],   // blue accent
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

type Blob = {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  radial: number;
  colorIdx: number;
};

export default function PuzzleGradient({
  className = "",
  blobCount = 6,
  opacity = 1,
}: {
  className?: string;
  blobCount?: number;
  opacity?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let t = 0;

    // flow state
    let flowAngle = Math.PI / 4;
    let lastMX = -1;
    let lastMY = -1;
    let lastMoveAt = 0;

    let blobs: Blob[] = [];

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const minDim = Math.min(w, h);
      const count = blobCount;
      blobs = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: minDim * (0.34 + Math.random() * 0.3),
        speed: 0.35 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        radial: 0.55 + Math.random() * 0.45,
        colorIdx: i % PALETTE.length,
      }));
    };

    const colorAt = (idx: number): [number, number, number] => {
      const cycle = t / 9; // one palette step every ~9s
      const i0 = ((idx + Math.floor(cycle)) % PALETTE.length + PALETTE.length) % PALETTE.length;
      const i1 = (i0 + 1) % PALETTE.length;
      const f = cycle - Math.floor(cycle);
      const a = PALETTE[i0];
      const b = PALETTE[i1];
      return [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];
    };

    const onMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (!inside) return;
      if (lastMX >= 0) {
        const dx = x - lastMX;
        const dy = y - lastMY;
        if (dx * dx + dy * dy > 4) {
          // hover steers the flow toward the mouse movement direction
          flowAngle = lerpAngle(flowAngle, Math.atan2(dy, dx), 0.08);
          lastMoveAt = t;
        }
      }
      lastMX = x;
      lastMY = y;
    };

    const draw = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "screen";

      const idle = t - lastMoveAt > 1.4;
      if (idle) flowAngle += 0.0016; // self-moving drift
      const speedBoost = idle ? 1 : 1.85;

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];
        const dir = flowAngle + b.phase * 0.35;
        b.x += Math.cos(dir) * b.speed * speedBoost * 0.6;
        b.y += Math.sin(dir) * b.speed * speedBoost * 0.6 + Math.sin(t * 0.4 + b.phase) * 0.35;

        const margin = b.r;
        if (b.x < -margin) b.x = w + margin;
        if (b.x > w + margin) b.x = -margin;
        if (b.y < -margin) b.y = h + margin;
        if (b.y > h + margin) b.y = -margin;

        const [r, g, bl] = colorAt(b.colorIdx);
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `rgba(${r | 0},${g | 0},${bl | 0},${0.52 * opacity})`);
        grad.addColorStop(0.45, `rgba(${r | 0},${g | 0},${bl | 0},${0.2 * opacity})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // puzzle seams — thin rounded tiles over the field
      ctx.globalCompositeOperation = "source-over";
      const tile = Math.max(110, Math.min(w, h) / 5.2);
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      const r2 = 18;
      for (let gy = -r2; gy < h + tile; gy += tile) {
        for (let gx = -r2; gx < w + tile; gx += tile) {
          ctx.beginPath();
          ctx.roundRect(gx + 3, gy + 3, tile - 6, tile - 6, r2);
          ctx.stroke();
        }
      }

      // edge vignette so the field melts into the section
      const vig = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.32,
        w / 2, h / 2, Math.max(w, h) * 0.75,
      );
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);
    };

    const loop = () => {
      if (visible) {
        t += 1 / 60;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) {
      draw(); // single static frame
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => (visible = en.isIntersecting)),
        { threshold: 0 },
      );
      io.observe(host);
      const ro = new ResizeObserver(resize);
      ro.observe(host);
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
      return () => {
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
      };
    }

    // reduced-motion path still needs resize handling without animation
    const roStatic = new ResizeObserver(() => {
      resize();
      draw();
    });
    roStatic.observe(host);
    return () => roStatic.disconnect();
  }, [blobCount, opacity]);

  return (
    <div ref={hostRef} aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
