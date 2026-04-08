"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";

type Item = { src: string; alt: string };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

type FoodGalleryCarouselProps = {
  items: Item[];
  /** Editorial frame + filmstrip — matches 2026 food section */
  variant?: "default" | "editorial";
};

export function FoodGalleryCarousel({ items, variant = "default" }: FoodGalleryCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();
  const n = items.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  useEffect(() => {
    if (n <= 1 || paused || reducedMotion) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % n), 5500);
    return () => window.clearInterval(t);
  }, [n, paused, reducedMotion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (n === 0) return null;

  const durationClass = reducedMotion ? "duration-0" : "duration-700";
  const isEditorial = variant === "editorial";

  const viewer = (
    <>
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-20 rounded-[inherit] bg-gradient-to-b to-transparent ${
            isEditorial ? "h-20 from-parchment/95 sm:h-24" : "h-16 from-parchment/90 sm:h-20"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 rounded-[inherit] bg-gradient-to-t to-transparent ${
            isEditorial ? "h-28 from-ink/30 via-ink/5 sm:h-32" : "h-24 from-ink/25 sm:h-28"
          }`}
        />

        <div
          className={`relative overflow-hidden shadow-[0_32px_64px_-28px_rgba(36,28,23,0.42)] ${
            isEditorial
              ? "aspect-[4/3] rounded-[1.2rem] ring-1 ring-white/70 sm:aspect-[16/11] sm:rounded-[1.35rem]"
              : "aspect-[4/3] rounded-[1.15rem] ring-1 ring-gold-logo/20 sm:aspect-[16/10] sm:rounded-[1.25rem]"
          }`}
        >
          {items.map((item, i) => (
            <div
              key={item.src}
              className={`absolute inset-0 ${durationClass} ease-out ${i === index ? "z-10 opacity-100" : "z-0 opacity-0"}`}
              aria-hidden={i !== index}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={isEditorial ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                className={`object-cover ${isEditorial ? "scale-[1.02]" : ""}`}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-4 flex items-center justify-between gap-3 ${isEditorial ? "px-0.5 sm:px-1" : "px-1 sm:px-2"}`}>
        <button
          type="button"
          onClick={() => go(-1)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-ink shadow-sm backdrop-blur-md transition hover:border-gold-logo/40 hover:bg-white/80 hover:text-terracotta ${
            isEditorial
              ? "border-white/80 bg-white/70"
              : "border-white/70 bg-white/55"
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-gradient-to-r from-terracotta to-gold-logo"
                  : "w-2 bg-border-subtle hover:bg-gold-logo/40"
              }`}
              aria-label={`Go to image ${i + 1} of ${n}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-ink shadow-sm backdrop-blur-md transition hover:border-gold-logo/40 hover:bg-white/80 hover:text-terracotta ${
            isEditorial ? "border-white/80 bg-white/70" : "border-white/70 bg-white/55"
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {isEditorial ? (
        <div className="food-filmstrip mt-5 flex gap-2 overflow-x-auto pb-1 pt-0.5 [scrollbar-width:thin]">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`food-filmstrip__thumb relative h-16 w-[5.5rem] shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-[4.5rem] sm:w-24 ${
                i === index
                  ? "border-terracotta opacity-100 shadow-md shadow-terracotta/15 ring-2 ring-gold-logo/30"
                  : "border-transparent opacity-55 hover:opacity-90"
              }`}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            >
              <Image src={item.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      <p
        className={`text-center font-body text-[10px] font-medium tracking-[0.2em] text-muted uppercase ${
          isEditorial ? "mt-4" : "mt-3"
        }`}
      >
        {index + 1} <span className="text-gold-logo/80">/</span> {n}
      </p>
    </>
  );

  const inner = (
    <div
      className="relative z-[1]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {viewer}
    </div>
  );

  return (
    <div role="region" aria-roledescription="carousel" aria-labelledby={labelId}>
      <p id={labelId} className="sr-only">
        Food and dining photo gallery
      </p>

      {isEditorial ? (
        <div className="food-carousel-editorial relative">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-logo/25 via-terracotta/10 to-transparent opacity-70 blur-2xl"
            aria-hidden
          />
          <div className="rounded-[1.6rem] bg-gradient-to-br from-white/90 via-gold-logo/25 to-terracotta/20 p-[2px] shadow-[0_40px_80px_-36px_rgba(36,28,23,0.55)]">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-parchment/50 p-3 backdrop-blur-md sm:p-4">
              <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />
              {inner}
            </div>
          </div>
          <p className="mt-3 font-body text-[10px] font-semibold tracking-[0.28em] text-muted uppercase sm:text-[11px]">
            Visual story
          </p>
        </div>
      ) : (
        <div className="card-2026 p-3 sm:p-4">
          <span className="card-2026__noise" aria-hidden />
          {inner}
        </div>
      )}
    </div>
  );
}
