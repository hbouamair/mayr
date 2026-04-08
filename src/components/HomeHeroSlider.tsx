"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_BACKGROUND_SLIDES } from "@/lib/hero-backgrounds";

const INTERVAL_MS = 4000;

type HomeHeroSliderProps = {
  children: React.ReactNode;
};

export function HomeHeroSlider({ children }: HomeHeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_BACKGROUND_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section
      className="relative -mt-[var(--main-pt)] flex min-h-[100dvh] flex-col overflow-hidden border-b border-white/10 pt-[var(--main-pt)]"
      aria-label="Homepage hero"
    >
      <div className="absolute inset-0" aria-hidden>
        {HERO_BACKGROUND_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-none ${
              i === index ? "z-[2] opacity-100" : "z-[1] pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Slight global dim so hero copy stays readable over busy photos */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-ink/22" aria-hidden />

      {/* Bottom-heavy scrim: dark at bottom for copy; top stays clear for faces */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/92 via-ink/30 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-ink/35 via-transparent to-ink/28"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto flex min-h-0 w-full min-w-0 max-w-6xl flex-1 flex-col justify-end px-4 pb-16 pt-4 sm:justify-center sm:px-6 sm:pb-20 sm:pt-6 md:pt-8">
        {children}
      </div>
    </section>
  );
}
