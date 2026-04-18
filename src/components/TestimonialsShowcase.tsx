"use client";

import Image from "next/image";
import type { Testimonial } from "@/lib/site-content";

/** Accessibility labels for flag images (ISO alpha-2 → English name) */
const COUNTRY_NAME: Record<string, string> = {
  cn: "China",
  tr: "Turkey",
  us: "United States",
  ca: "Canada",
};

const LAYOUT = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-8",
  "lg:col-span-4",
  "lg:col-span-4 lg:-mt-6",
  "lg:col-span-4 lg:mt-6",
  "lg:col-span-6",
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
    <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-5" role="list">
      {items.map((t, i) => (
        <li key={`${t.name}-${i}`} className={`min-w-0 sm:col-span-1 ${LAYOUT[i] ?? "lg:col-span-4"}`}>
          <figure className={`card-2026 ${ACCENTS[i % ACCENTS.length]} flex h-full flex-col p-4 sm:p-5`}>
            <span className="card-2026__noise" aria-hidden />
            <span className="card-2026__glow-orb" aria-hidden />
            <span className="card-2026__quote-deco" aria-hidden>
              “
            </span>
            <blockquote
              lang={t.quoteLang}
              className="relative z-[1] whitespace-pre-line pt-4 font-body text-[13px] leading-[1.62] text-ink/92 sm:text-[14px]"
            >
              {t.quote}
            </blockquote>
            <figcaption className="relative z-[1] mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border-subtle/80 pt-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-terracotta to-gold-logo" aria-hidden />
              <span className="font-heading text-[13px] font-medium tracking-tight text-ink">
                {t.name}
              </span>
              <span className="relative inline-flex h-[15px] w-[22px] shrink-0 overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/12">
                <Image
                  src={`https://flagcdn.com/w40/${t.countryCode}.png`}
                  alt={`${COUNTRY_NAME[t.countryCode] ?? t.countryCode} flag`}
                  width={22}
                  height={15}
                  className="object-cover"
                  sizes="22px"
                />
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
