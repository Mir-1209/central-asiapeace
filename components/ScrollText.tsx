"use client";

import { useEffect, useRef } from "react";

/**
 * Large paragraph whose words light up one by one as the reader scrolls.
 * Falls back to fully visible text for reduced-motion users and no-JS.
 */
export default function ScrollText({ text, highlight = [] }: { text: string; highlight?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const norm = (w: string) => w.toLowerCase().replace(/[^a-z-]/g, "");
  const hl = new Set(highlight.map(norm));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-w]"));
    el.classList.add("is-live");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when paragraph top reaches 85% of viewport, 1 when bottom reaches 55%
      const start = vh * 0.85;
      const end = vh * 0.55;
      const total = rect.height + (start - end);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / total));
      const lit = Math.round(progress * spans.length);
      spans.forEach((s, i) => s.classList.toggle("on", i < lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className="scroll-text">
      {words.map((w, i) => {
        return (
          <span key={i} data-w="" className={hl.has(norm(w)) ? "hl" : undefined}>
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}
