"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { RetreatListing } from "@/lib/retreats";

type HomeRetreatCalendarCarouselProps = {
  listings: readonly RetreatListing[];
};

function useCarouselIndex(scrollRef: React.RefObject<HTMLDivElement | null>, n: number) {
  const [index, setIndex] = useState(0);
  const raf = useRef<number | null>(null);

  const syncFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || n === 0) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    const rootRect = el.getBoundingClientRect();
    const children = el.querySelectorAll<HTMLElement>("[data-carousel-slide]");
    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const mid = rect.left - rootRect.left + el.scrollLeft + rect.width / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  }, [n, scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (raf.current != null) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(syncFromScroll);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    syncFromScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [scrollRef, syncFromScroll, n]);

  return index;
}

function SlideCard({
  r,
  active,
  i,
  total,
}: {
  r: RetreatListing;
  active: boolean;
  i: number;
  total: number;
}) {
  return (
    <article
      className={`home-carousel-slide shrink-0 transition-[transform,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        active
          ? "home-carousel-slide--active z-[1] scale-[1.015] opacity-100"
          : "z-0 scale-[0.97] opacity-[0.72] sm:opacity-80"
      }`}
      style={{ willChange: active ? "transform" : "auto" }}
    >
      <Link
        href={`/rooms/${r.slug}`}
        className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/60 bg-gradient-to-b from-white/90 via-parchment/95 to-sand/40 shadow-[0_16px_44px_-26px_rgba(36,28,23,0.26)] ring-1 ring-gold-logo/15 transition-shadow duration-500 hover:shadow-[0_24px_52px_-28px_rgba(36,28,23,0.33)] hover:ring-gold-logo/25"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,color-mix(in_srgb,var(--gold-logo)_12%,transparent),transparent_65%)] opacity-90" aria-hidden />
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-deep/25">
          <Image
            src={r.coverImage}
            alt={r.title}
            fill
            quality={100}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:transition-none"
            sizes="(max-width: 640px) 28vw, (max-width: 1024px) 22vw, 18vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
          <div className="absolute left-2 top-2 flex items-center gap-2 sm:left-2.5 sm:top-2.5">
            <span className="rounded-full border border-white/30 bg-ink/40 px-2 py-0.5 font-body text-[8px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-md sm:text-[9px]">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <p className="absolute bottom-2 left-2 right-2 font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-white/95 drop-shadow line-clamp-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 sm:text-[10px]">
            {r.focus}
          </p>
        </div>
        <div className="relative flex flex-1 flex-col px-3 pb-3 pt-2 sm:px-3.5 sm:pb-3.5 sm:pt-2.5">
          <h3 className="font-heading text-[0.88rem] font-medium leading-snug tracking-tight text-ink line-clamp-2 transition-colors duration-300 group-hover:text-terracotta sm:text-[0.92rem]">
            {r.title}
          </h3>
          <p className="mt-1.5 font-body text-[10px] tabular-nums leading-snug text-muted line-clamp-2 sm:text-[11px]">{r.dateLabel}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-body text-[8px] font-semibold uppercase tracking-[0.2em] text-terracotta sm:pt-2.5 sm:text-[9px]">
            View program
            <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}

const AUTOPLAY_INTERVAL_MS = 5500;

export function HomeRetreatCalendarCarousel({ listings }: HomeRetreatCalendarCarouselProps) {
  const n = listings.length;
  const scrollRef = useRef<HTMLDivElement>(null);
  const index = useCarouselIndex(scrollRef, n);
  const indexRef = useRef(0);
  indexRef.current = index;
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const root = scrollRef.current;
      if (!root) return;
      const slide = root.querySelectorAll<HTMLElement>("[data-carousel-slide]")[i];
      if (!slide) return;
      const rootRect = root.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const slideLeftInRoot =
        slideRect.left - rootRect.left + root.scrollLeft;
      const target =
        slideLeftInRoot - (root.clientWidth - slideRect.width) / 2;
      root.scrollTo({ left: Math.max(0, target), behavior });
    },
    []
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      if (n <= 0) return;
      const next = (indexRef.current + dir + n) % n;
      scrollToIndex(next);
    },
    [n, scrollToIndex]
  );

  useEffect(() => {
    if (n <= 1 || pauseAutoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      go(1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [n, go, pauseAutoplay]);

  const progress = useMemo(() => (n <= 1 ? 100 : ((index + 1) / n) * 100), [index, n]);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => scrollToIndex(index, "auto"));
    ro.observe(root);
    return () => ro.disconnect();
  }, [index, scrollToIndex]);

  if (n === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPauseAutoplay(true)}
      onMouseLeave={() => setPauseAutoplay(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-parchment/95 to-transparent sm:w-14 md:from-[color-mix(in_srgb,var(--parchment)_92%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-parchment/95 to-transparent sm:w-14 md:from-[color-mix(in_srgb,var(--parchment)_92%,transparent)]"
        aria-hidden
      />

      <div
        ref={scrollRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Retreat programs"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
        className="home-carousel-track relative z-[1] flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible py-4 pl-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta/35 sm:gap-5 sm:pl-6 sm:pr-6 md:gap-6 md:py-6 [&::-webkit-scrollbar]:hidden"
      >
        {listings.map((r, i) => (
          <div
            key={r.id}
            data-carousel-slide
            className="home-carousel-card-enter flex-[0_0_calc(28%-0.33rem)] snap-center sm:flex-[0_0_calc(28%-0.42rem)] md:flex-[0_0_calc(28%-0.45rem)]"
            style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
          >
            <SlideCard r={r} active={i === index} i={i} total={n} />
          </div>
        ))}
      </div>

      <div className="relative z-[3] mt-8 flex flex-col items-center gap-5 md:mt-10">
        <div className="flex w-full max-w-lg items-center justify-center gap-3 px-2 sm:gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle/80 bg-white/80 text-ink shadow-sm backdrop-blur-sm transition hover:border-terracotta/40 hover:bg-white hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta/40 sm:h-12 sm:w-12"
            aria-label="Previous program"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </button>

          <div className="relative h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-border-subtle/70">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-terracotta via-amber-700/90 to-gold-logo transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle/80 bg-white/80 text-ink shadow-sm backdrop-blur-sm transition hover:border-terracotta/40 hover:bg-white hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta/40 sm:h-12 sm:w-12"
            aria-label="Next program"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Choose program">
          {listings.map((r, i) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${r.title}`}
              onClick={() => {
                scrollToIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-[400ms] ease-out motion-reduce:transition-none ${
                i === index
                  ? "w-9 bg-gradient-to-r from-terracotta to-gold-logo shadow-[0_0_16px_-3px_rgba(166,75,42,0.45)]"
                  : "w-2 bg-border-subtle/90 hover:bg-terracotta/40"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="off">
        Program {index + 1} of {n}: {listings[index]?.title}
      </p>
    </div>
  );
}
