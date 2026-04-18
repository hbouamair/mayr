"use client";

import { BookingForm } from "@/components/BookingForm";
import {
  retreatCalendar2026,
  retreatCalendar2026Intro,
  retreatCalendarWeekBookingPrefill,
  type RetreatCalendar2026Entry,
} from "@/lib/site-content";
import { retreatListingDateHeadline, retreatMonthDisplayName } from "@/lib/retreats";
import { MapPin, X } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";

export function RetreatsCalendar2026() {
  const dialogTitleId = useId();
  const [modalEntry, setModalEntry] = useState<RetreatCalendar2026Entry | null>(null);

  const closeModal = useCallback(() => setModalEntry(null), []);

  useEffect(() => {
    document.body.style.overflow = modalEntry ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalEntry]);

  useEffect(() => {
    if (!modalEntry) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalEntry, closeModal]);

  const calendarBookingPrefill = modalEntry ? retreatCalendarWeekBookingPrefill(modalEntry) : null;

  return (
    <section
      id="calendar-2026"
      className="relative scroll-mt-[calc(var(--main-pt)+1rem)] border-t border-border-subtle bg-gradient-to-b from-parchment/40 via-sand/30 to-parchment/50"
      aria-labelledby="calendar-2026-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_srgb,var(--gold-logo)_10%,transparent),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <header className="max-w-3xl">
          <div className="flex items-center gap-5">
            <span className="lux-rule shrink-0" aria-hidden />
            <p className="font-body text-[10px] font-semibold tracking-[0.32em] text-terracotta/90 uppercase sm:text-[11px]">
              Season
            </p>
          </div>
          <h2
            id="calendar-2026-heading"
            className="mt-6 font-heading text-[clamp(1.65rem,3.8vw,2.35rem)] font-medium leading-[1.12] tracking-tight text-ink"
          >
            <span className="text-gradient-brand">Calendar</span>{" "}
            <span className="text-ink">retreats</span>
          </h2>
          <p className="mt-5 font-body text-base font-light leading-[1.75] tracking-wide text-muted sm:text-[17px]">
            {retreatCalendar2026Intro.description}
          </p>
        </header>

        <div className="relative mt-14 lg:mt-20">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-1/2 z-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-terracotta/45 to-transparent md:block"
            aria-hidden
          />

          <ol className="relative z-[1] space-y-14 md:space-y-20">
            {retreatCalendar2026.map((entry, index) => (
              <li key={entry.id}>
                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] md:items-center md:gap-x-4 lg:gap-x-6">
                  <article className="relative order-2 border-l-2 border-terracotta/25 pl-5 md:order-1 md:border-l-0 md:pl-0 md:pr-6 md:text-right lg:pr-10">
                    <div className="card-2026 card-2026--accent-gold w-full max-w-xl rounded-[1.25rem] p-6 text-left shadow-[0_18px_48px_-28px_rgba(36,28,23,0.22)] ring-1 ring-gold-logo/12 md:ml-auto md:text-right">
                      <span className="card-2026__noise" aria-hidden />
                      <p className="relative z-[1] mb-3 font-body text-[10px] font-semibold tracking-[0.28em] text-terracotta/85 uppercase">
                        {retreatMonthDisplayName(entry.monthKey)} 2026
                      </p>
                      <h3 className="relative z-[1] font-heading text-xl font-medium tracking-tight text-terracotta sm:text-[1.35rem]">
                        {entry.title}
                      </h3>
                      <p className="relative z-[1] mt-4 font-body text-[15px] font-light leading-[1.8] text-muted sm:text-base">
                        {entry.summary}
                      </p>
                      <p className="relative z-[1] mt-5 md:flex md:justify-end">
                        <button
                          type="button"
                          onClick={() => setModalEntry(entry)}
                          className="inline-flex font-body text-[10px] font-semibold tracking-[0.22em] text-terracotta uppercase underline decoration-gold-logo/35 underline-offset-[6px] transition-colors hover:text-terracotta-glow"
                        >
                          Book this week
                        </button>
                      </p>
                    </div>
                  </article>

                  <div className="relative order-1 hidden min-h-[1px] justify-center md:order-2 md:flex">
                    <div
                      className="absolute top-1/2 left-1/2 z-[2] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-terracotta/80 bg-parchment shadow-[0_0_0_6px_color-mix(in_srgb,var(--sand)_90%,transparent),0_4px_14px_-4px_rgba(36,28,23,0.25)]"
                      aria-hidden
                    />
                  </div>

                  <div className="order-3 flex md:items-center md:pl-4 lg:pl-10">
                    <div className="inline-flex w-full max-w-xs items-center gap-2.5 rounded-2xl border border-white/70 bg-surface-elevated/95 px-4 py-3.5 shadow-[0_12px_36px_-16px_rgba(36,28,23,0.18)] ring-1 ring-ink/[0.04] backdrop-blur-sm md:max-w-none">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                        <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden />
                      </span>
                      <div className="min-w-0 text-left">
                        <p className="font-body text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                          Dates
                        </p>
                        <p className="mt-0.5 font-body text-sm font-medium leading-snug text-ink sm:text-[15px]">
                          {retreatListingDateHeadline(entry.dateLabel)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {index < retreatCalendar2026.length - 1 ? (
                  <div
                    className="mx-auto mt-10 h-10 w-px bg-gradient-to-b from-terracotta/35 to-terracotta/10 md:hidden"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {modalEntry ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-parchment sm:flex sm:items-center sm:justify-center sm:bg-transparent sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 hidden bg-ink/45 backdrop-blur-[2px] sm:block"
            aria-label="Close booking dialog"
            onClick={closeModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative z-[101] flex min-h-0 min-w-0 w-full flex-1 flex-col overflow-hidden bg-parchment sm:max-h-[min(92vh,900px)] sm:max-w-2xl sm:flex-none sm:overflow-y-auto sm:rounded-[1.375rem] sm:border sm:border-gold-logo/20 sm:shadow-[0_24px_64px_-24px_rgba(36,28,23,0.2)]"
          >
            <p id={dialogTitleId} className="sr-only">
              Book {retreatMonthDisplayName(modalEntry.monthKey)} 2026 week —{" "}
              {retreatListingDateHeadline(modalEntry.dateLabel)}. WhatsApp opens with your details after you submit.
            </p>

            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border-subtle/90 bg-parchment px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:hidden">
              <p className="min-w-0 flex-1 font-heading text-[1.05rem] font-medium leading-tight tracking-tight text-ink">
                Book this week
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-white/80 text-ink shadow-sm transition active:bg-white active:text-terracotta"
                aria-label="Close booking"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] pt-4 [-webkit-overflow-scrolling:touch] sm:flex-none sm:overflow-visible sm:px-8 sm:pb-8 sm:pt-8">
              <div className="mb-5 hidden min-w-0 items-start justify-between gap-3 sm:mb-6 sm:flex sm:gap-4">
                <div className="min-w-0 flex-1 pr-1">
                  <p className="font-heading text-xl font-medium leading-snug tracking-tight text-ink">Book this week</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    Review the dates below, choose your room, then submit — we&apos;ll open WhatsApp with your message,
                    same as on the main booking page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-white/60 p-2 text-ink transition hover:bg-white hover:text-terracotta"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>

              <p className="mb-4 font-body text-sm leading-relaxed text-muted sm:hidden">
                Choose your room and submit — WhatsApp opens with your details ready to send.
              </p>

              <div className="mb-6 min-w-0 rounded-xl border border-gold-logo/25 bg-gradient-to-br from-parchment/95 to-sand/80 p-4 sm:p-5">
                <p className="font-body text-[10px] font-semibold tracking-[0.24em] text-terracotta/90 uppercase">
                  Your week · {retreatMonthDisplayName(modalEntry.monthKey)} 2026
                </p>
                <p className="mt-2 flex items-center gap-2 font-heading text-lg font-medium tracking-tight text-ink">
                  <MapPin className="h-4 w-4 shrink-0 text-terracotta" strokeWidth={2} aria-hidden />
                  {retreatListingDateHeadline(modalEntry.dateLabel)}
                </p>
                <h3 className="mt-3 font-heading text-base font-medium text-terracotta sm:text-[1.05rem]">
                  {modalEntry.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{modalEntry.summary}</p>
              </div>

              <div className="booking-modal-form min-w-0 rounded-xl border border-border-subtle/90 bg-surface-elevated/95 p-4 sm:p-6">
                <BookingForm
                  key={`${modalEntry.id}-${calendarBookingPrefill!.message.slice(0, 40)}`}
                  initialOfferId={calendarBookingPrefill!.offerId}
                  initialMessage={calendarBookingPrefill!.message}
                  lockOffer={false}
                  onSuccessNavigate={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
