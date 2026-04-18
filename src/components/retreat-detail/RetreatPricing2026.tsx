"use client";

import { useState } from "react";
import type { PricingTier, RetreatPricing } from "@/lib/retreat-detail-content";
import { BookSpotWhatsAppModal } from "@/components/retreat-detail/BookSpotWhatsAppModal";

type Props = {
  pricing: RetreatPricing;
  retreatTitle: string;
  retreatDates: string;
  retreatLocation: string;
  /** First day of retreat `YYYY-MM-DD` — used to pick early bird vs regular automatically */
  retreatStartIso: string;
};

export function RetreatPricing2026({
  pricing,
  retreatTitle,
  retreatDates,
  retreatLocation,
  retreatStartIso,
}: Props) {
  const [bookingTier, setBookingTier] = useState<PricingTier | null>(null);

  return (
    <div className="relative min-w-0">
      <div className="pointer-events-none absolute -left-6 top-0 h-32 w-32 rounded-full bg-gold-logo/10 blur-3xl" aria-hidden />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-terracotta/90">Book your spot</p>
            <h2 className="mt-2 font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">2026 rates</h2>
          </div>
          <p className="rounded-full border border-gold-logo/25 bg-parchment/90 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Early bird · {pricing.earlyBirdDeadline}
          </p>
        </div>

        <ul
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          role="list"
        >
          {pricing.tiers.map((tier) => (
            <li key={tier.roomLabel}>
              <div className="group relative flex h-full min-h-[100%] flex-col overflow-hidden rounded-[1.35rem] border border-border-subtle/90 bg-gradient-to-b from-surface-elevated via-parchment/98 to-sand/40 p-5 shadow-[0_2px_0_0_rgba(255,255,255,0.5)_inset,0_20px_50px_-28px_rgba(36,28,23,0.18)] ring-1 ring-gold-logo/10 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_24px_56px_-24px_rgba(36,28,23,0.2)]">
                <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden />
                <div className="relative flex items-start justify-between gap-2">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{tier.roomLabel}</p>
                  <span className="shrink-0 rounded-md bg-terracotta/[0.12] px-2 py-0.5 font-body text-[9px] font-bold tabular-nums text-terracotta">
                    2026
                  </span>
                </div>
                <div className="relative mt-5 space-y-1">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta/90">Early bird</p>
                  <p className="font-heading text-[1.85rem] font-medium tabular-nums leading-none tracking-tight text-ink sm:text-[2rem]">
                    {tier.earlyBirdEur.toLocaleString("en-US")}{" "}
                    <span className="text-lg font-normal text-muted">€</span>
                  </p>
                </div>
                <div className="relative mt-6 border-t border-border-subtle/80 pt-5">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Regular price</p>
                  <p className="mt-1 font-heading text-xl font-medium tabular-nums text-ink-soft/90">
                    {tier.normalEur.toLocaleString("en-US")} €
                  </p>
                </div>
                <div className="relative mt-6 flex flex-1 flex-col justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingTier(tier)}
                    className="btn-cta-primary w-full min-h-[2.75rem] rounded-xl px-4 py-3 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase shadow-md shadow-terracotta/20 transition hover:brightness-[1.03] active:brightness-[0.98]"
                  >
                    Book your spot
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-gold-logo/20 bg-gradient-to-r from-parchment/90 via-sand/30 to-parchment/90 p-5 sm:p-6">
          <p className="font-body text-sm leading-relaxed text-ink">{pricing.depositNote}</p>
        </div>
      </div>

      {bookingTier ? (
        <BookSpotWhatsAppModal
          tier={bookingTier}
          retreatTitle={retreatTitle}
          retreatDates={retreatDates}
          retreatLocation={retreatLocation}
          retreatStartIso={retreatStartIso}
          onClose={() => setBookingTier(null)}
        />
      ) : null}
    </div>
  );
}
