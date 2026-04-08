"use client";

import type { Testimonial } from "@/lib/site-content";

const LAYOUT = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-8",
  "lg:col-span-4",
  "lg:col-span-4 lg:-mt-6",
  "lg:col-span-4 lg:mt-6",
] as const;

/** Same accent rotation as service cards — keeps testimonials visually aligned with other cards */
const ACCENTS = [
  "card-2026--accent-terracotta",
  "card-2026--accent-gold",
  "card-2026--accent-dusk",
  "card-2026--accent-gold",
  "card-2026--accent-terracotta",
] as const;

export function TestimonialsShowcase({ items }: { items: Testimonial[] }) {
  return (
    <ul className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6" role="list">
      {items.map((t, i) => (
        <li key={i} className={`min-w-0 sm:col-span-1 ${LAYOUT[i] ?? "lg:col-span-4"}`}>
          <figure className={`card-2026 ${ACCENTS[i % ACCENTS.length]} flex h-full flex-col p-6 sm:p-7`}>
            <span className="card-2026__noise" aria-hidden />
            <span className="card-2026__glow-orb" aria-hidden />
            <span className="card-2026__quote-deco" aria-hidden>
              “
            </span>
            <blockquote className="relative z-[1] pt-6 font-body text-[15px] leading-[1.75] text-ink/92 sm:text-base">
              {t.quote}
            </blockquote>
            <figcaption className="relative z-[1] mt-5 flex items-center gap-2 border-t border-border-subtle/80 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-terracotta to-gold-logo" aria-hidden />
              <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">Guest voice</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
