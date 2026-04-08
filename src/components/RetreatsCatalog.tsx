"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  retreatFocuses,
  retreatLanguages,
  retreatListings,
  retreatMonths,
  retreatPlaceOptions,
  retreatStatusFilters,
  type RetreatListing,
  type RetreatStatus,
} from "@/lib/retreats";

function statusLabel(s: RetreatStatus): string {
  switch (s) {
    case "full":
      return "Fully booked";
    case "few_spots":
      return "Few spots";
    case "new":
      return "New";
    default:
      return "Open";
  }
}

function statusPillClass(s: RetreatStatus): string {
  switch (s) {
    case "full":
      return "border border-border-subtle bg-sand-deep/50 text-muted";
    case "few_spots":
      return "border border-terracotta/30 bg-terracotta/12 text-terracotta";
    case "new":
      return "border border-gold-logo/35 bg-gold-logo/15 text-ink";
    default:
      return "border border-gold-logo/25 bg-parchment/90 text-ink";
  }
}

const selectClass =
  "input-brand w-full rounded-xl border-border-subtle bg-surface-elevated px-3 py-2.5 font-body text-sm text-ink shadow-sm";

export function RetreatsCatalog() {
  const [language, setLanguage] = useState<string>("all");
  const [place, setPlace] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");
  const [focus, setFocus] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  const filtered = useMemo(() => {
    return retreatListings.filter((r) => {
      if (language !== "all" && r.language !== language) return false;
      if (place !== "all" && r.placeKey !== place) return false;
      if (month !== "all" && r.monthKey !== month) return false;
      if (focus !== "all" && r.focus !== focus) return false;
      if (status !== "all" && r.status !== status) return false;
      return true;
    });
  }, [language, place, month, focus, status]);

  return (
    <div className="relative min-w-0 px-4 pb-24 pt-8 sm:px-6 lg:pb-32">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="card-2026 relative mb-10 overflow-hidden p-4 sm:mb-12 sm:p-5">
          <span className="card-2026__noise" aria-hidden />
          <div className="relative z-[1]">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-terracotta/90">
                  Refine
                </p>
                <p className="font-heading text-lg font-medium text-ink">Find your week</p>
              </div>
              <p className="font-body text-sm tabular-nums text-muted">
                {filtered.length} {filtered.length === 1 ? "retreat" : "retreats"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <label className="flex flex-col gap-1">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Language
                </span>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className={selectClass}>
                  {retreatLanguages.map((l) => (
                    <option key={l} value={l}>
                      {l === "all" ? "All languages" : l}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Place</span>
                <select value={place} onChange={(e) => setPlace(e.target.value)} className={selectClass}>
                  {retreatPlaceOptions.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Month</span>
                <select value={month} onChange={(e) => setMonth(e.target.value)} className={selectClass}>
                  {retreatMonths.map((m) => (
                    <option key={m.key} value={m.key}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Focus</span>
                <select value={focus} onChange={(e) => setFocus(e.target.value)} className={selectClass}>
                  {retreatFocuses.map((f) => (
                    <option key={f} value={f}>
                      {f === "all" ? "All focuses" : f}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Availability
                </span>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectClass}>
                  {retreatStatusFilters.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border-subtle bg-parchment/60 py-16 text-center font-body text-muted">
            No retreats match these filters. Try widening your selection.
          </p>
        ) : (
          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
            role="list"
          >
            {filtered.map((r) => (
              <li key={r.id} className="min-w-0">
                <RetreatGridCard r={r} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function RetreatGridCard({ r }: { r: RetreatListing }) {
  const detailHref = `/rooms/${r.slug}`;
  return (
    <Link
      href={detailHref}
      className="group/card relative flex h-full min-h-[100%] flex-col overflow-hidden rounded-[1.35rem] border border-border-subtle/90 bg-gradient-to-b from-surface-elevated via-parchment/95 to-sand/25 shadow-[0_2px_0_0_rgba(255,255,255,0.45)_inset,0_18px_48px_-32px_rgba(36,28,23,0.22)] outline-none ring-terracotta/25 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:border-gold-logo/40 hover:shadow-[0_2px_0_0_rgba(255,255,255,0.5)_inset,0_28px_56px_-28px_rgba(36,28,23,0.18),0_0_0_1px_rgba(197,125,90,0.08)] motion-safe:hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
    >
      <span
        className="pointer-events-none absolute -right-20 top-24 h-44 w-44 rounded-full bg-gradient-to-bl from-gold-logo/14 via-terracotta/8 to-transparent blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-gradient-to-tr from-terracotta/10 to-transparent blur-3xl opacity-80"
        aria-hidden
      />
      <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />

      <div className="relative z-[1] aspect-[4/3] w-full overflow-hidden">
        <Image
          src={r.coverImage}
          alt={`${r.title} — ${r.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-[transform,filter] duration-700 ease-out motion-safe:group-hover/card:scale-[1.045] motion-safe:group-hover/card:brightness-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent opacity-90"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-parchment/95 via-parchment/20 to-transparent" aria-hidden />
        <div className="absolute left-3.5 top-3.5 z-[2] flex max-w-[calc(100%-1.75rem)] flex-wrap gap-1.5">
          <span className="rounded-full border border-white/25 bg-ink/35 px-2.5 py-1 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {r.language}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ring-1 ring-white/25 ${statusPillClass(r.status)}`}
          >
            {statusLabel(r.status)}
          </span>
        </div>
        <p className="absolute bottom-3.5 left-3.5 right-3.5 z-[2] font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold-logo drop-shadow-sm">
          {r.focus}
        </p>
      </div>

      <div className="relative z-[1] flex flex-1 flex-col px-5 pb-5 pt-4">
        <h2 className="font-heading text-[1.15rem] font-medium leading-snug tracking-tight text-ink sm:text-[1.2rem]">
          <span className="transition-colors duration-300 group-hover/card:text-terracotta">{r.title}</span>
        </h2>
        <p className="mt-2 font-body text-sm font-medium text-terracotta">{r.dateLabel}</p>
        <p className="mt-1 font-body text-sm leading-relaxed text-muted">{r.location}</p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border-subtle/70 pt-4">
          <p className="min-w-0 flex-1 font-body text-[11px] leading-relaxed text-muted">
            Gallery, full story & how to reserve →
          </p>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle/80 bg-parchment/80 text-terracotta shadow-sm transition-[background-color,transform,border-color] duration-300 motion-safe:group-hover/card:border-terracotta/35 motion-safe:group-hover/card:bg-terracotta/10 motion-safe:group-hover/card:translate-x-0.5">
            <ChevronRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
