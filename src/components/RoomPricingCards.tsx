"use client";

import { BookingForm } from "@/components/BookingForm";
import { offers } from "@/lib/offers";
import { pricingMeta } from "@/lib/site-content";
import { getRetreatBySlug } from "@/lib/retreats";
import { BedDouble, BedSingle, Check, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

/** Three Lucide-style single beds in a row — larger scale so all three read clearly. */
function TripleBedsIcon({ className }: { className?: string }) {
  const bed = (
    <>
      <path
        vectorEffect="nonScalingStroke"
        strokeWidth={1.85}
        d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
      />
      <path
        vectorEffect="nonScalingStroke"
        strokeWidth={1.85}
        d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
      />
      <path vectorEffect="nonScalingStroke" strokeWidth={1.85} d="M3 18h18" />
    </>
  );
  /* One bed ≈ 18 units wide at 1:1; scale 0.58 + tight gaps → fills wide viewBox */
  const s = 0.58;
  const step = 18 * s + 0.85;
  return (
    <svg
      viewBox="0 0 36 15"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <g transform={`translate(0.35,0.85) scale(${s})`}>{bed}</g>
      <g transform={`translate(${0.35 + step},0.85) scale(${s})`}>{bed}</g>
      <g transform={`translate(${0.35 + 2 * step},0.85) scale(${s})`}>{bed}</g>
    </svg>
  );
}

const ROOM_LABELS: Record<string, string> = {
  "private-room": "Single room · private",
  "twin-room": "Double room · twin share",
  "triple-room": "Triple room · shared",
};

function RoomTypeIcon({ offerId, className }: { offerId: string; className?: string }) {
  const cn = className ?? "";
  if (offerId === "triple-room") {
    return <TripleBedsIcon className={cn} />;
  }
  if (offerId === "twin-room") {
    return <BedDouble className={cn} strokeWidth={1.35} />;
  }
  return <BedSingle className={cn} strokeWidth={1.35} />;
}

export function RoomPricingCards() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const titleId = useId();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState(offers[0]!.id);
  const [bookingInitialMessage, setBookingInitialMessage] = useState("");

  useEffect(() => {
    const o = searchParams.get("offer");
    const retreatSlug = searchParams.get("retreat");
    const retreat = retreatSlug ? getRetreatBySlug(retreatSlug) : undefined;
    if (o && offers.some((x) => x.id === o)) {
      setSelectedOfferId(o);
      setBookingInitialMessage(
        retreat ? `I'm interested in: ${retreat.title} (${retreat.dateLabel}).` : ""
      );
      setModalOpen(true);
    }
  }, [searchParams]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setBookingInitialMessage("");
    router.replace("/booking", { scroll: false });
  }, [router]);

  const openModal = useCallback((offerId: string) => {
    setSelectedOfferId(offerId);
    setBookingInitialMessage("");
    setModalOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, closeModal]);

  return (
    <>
      <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 xl:grid-cols-3 xl:gap-8 2xl:gap-10 md:items-stretch">
        {offers.map((offer, index) => {
          const featured = offer.id === "twin-room";
          const shortLabel = ROOM_LABELS[offer.id] ?? "Room";
          const isLast = index === offers.length - 1;
          return (
            <article
              key={offer.id}
              className={`booking-price-card group relative flex flex-col overflow-hidden rounded-[1.75rem] border bg-gradient-to-b from-surface-elevated via-parchment/95 to-sand/30 shadow-[0_20px_50px_-28px_rgba(36,28,23,0.18)] md:min-h-[24rem] ${
                isLast
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:col-span-1 xl:mx-0 xl:max-w-none"
                  : ""
              } ${
                featured
                  ? "booking-price-card--featured border-gold-logo/45 shadow-[0_28px_60px_-22px_rgba(197,125,90,0.22)] ring-2 ring-gold-logo/25 md:z-[1]"
                  : "border-white/70 ring-1 ring-white/40"
              }`}
            >
              <div
                className={`booking-price-card__accent h-1 w-full shrink-0 bg-gradient-to-r from-terracotta-glow via-gold-logo to-terracotta-deep ${
                  featured ? "opacity-100" : "opacity-75"
                }`}
                aria-hidden
              />
              <div
                className="booking-price-card__glow booking-price-card__glow--a pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full bg-gradient-to-bl from-gold-logo/12 via-terracotta/8 to-transparent opacity-80 blur-3xl"
                aria-hidden
              />
              <div
                className="booking-price-card__glow booking-price-card__glow--b pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-gradient-to-tr from-terracotta/10 to-transparent opacity-70 blur-3xl"
                aria-hidden
              />

              {featured ? (
                <div className="absolute right-4 top-5 z-[2] sm:right-5 sm:top-6">
                  <span className="rounded-full bg-gradient-to-r from-terracotta to-terracotta-deep px-3 py-1.5 font-body text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-terracotta/25">
                    Most popular
                  </span>
                </div>
              ) : null}

              <div className="relative z-[1] flex flex-1 flex-col px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
                <p className="font-body text-[10px] font-semibold tracking-[0.28em] text-terracotta/90 uppercase">Room type</p>
                <div className="mt-4 flex items-start gap-4 sm:gap-5">
                  <div
                    className={`booking-price-card__icon-shell flex shrink-0 items-center justify-center rounded-2xl border border-gold-logo/30 bg-gradient-to-br from-terracotta/12 via-parchment to-gold-logo/10 text-terracotta shadow-sm group-hover:border-terracotta/40 ${
                      offer.id === "triple-room"
                        ? "h-[5rem] w-[min(100%,7.25rem)] min-h-[5rem] min-w-[6.75rem] px-1.5 sm:h-[5.25rem] sm:w-[7.5rem] sm:min-w-[7.5rem]"
                        : "h-[4.5rem] w-[4.5rem] sm:h-[4.75rem] sm:w-[4.75rem]"
                    }`}
                    aria-hidden
                  >
                    <RoomTypeIcon
                      offerId={offer.id}
                      className={
                        offer.id === "triple-room"
                          ? "h-[4.25rem] w-full max-w-[6.75rem] sm:h-[4.5rem] sm:max-w-[7.25rem]"
                          : "h-10 w-10 sm:h-11 sm:w-11"
                      }
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-heading text-[1.65rem] font-medium leading-tight tracking-tight text-ink sm:text-[1.85rem]">
                      {offer.title}
                    </h3>
                    <p className="mt-2 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-muted/90">
                      {shortLabel}
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-border-subtle/80 pt-7 sm:mt-8">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Early bird</p>
                  <p className="mt-1 font-heading text-[clamp(2.25rem,5.5vw,2.85rem)] font-medium leading-none tabular-nums tracking-tight text-ink">
                    {offer.earlyBird}
                  </p>
                  <p className="mt-2 font-body text-xs font-light text-muted">Per person · limited spots</p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-dashed border-border-subtle/90 pt-5">
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Regular</span>
                    <span className="font-heading text-xl font-medium tabular-nums text-muted">{offer.regular}</span>
                  </div>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5" role="list">
                  {offer.highlights.map((h) => (
                    <li key={h} className="flex gap-3 font-body text-[14px] leading-snug text-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta/12 text-terracotta">
                        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span className="text-ink/90">{h}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-body text-xs text-muted">
                  <span className="font-semibold text-ink">{offer.spots}</span> spots ·{" "}
                  {offer.spotsNote ?? "Limited availability"}
                </p>

                <p className="mt-4 rounded-xl border border-gold-logo/25 bg-gradient-to-r from-parchment/90 to-sand/40 px-3.5 py-3 text-center font-body text-[12px] font-medium leading-snug text-ink/90 sm:text-[13px]">
                  {pricingMeta.depositSecureSpot}
                </p>

                <button
                  type="button"
                  onClick={() => openModal(offer.id)}
                  className="btn-cta-primary mt-5 inline-flex w-full items-center justify-center rounded-xl py-3.5 font-body text-[10px] font-semibold tracking-[0.22em] text-white uppercase"
                >
                  Book now
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {modalOpen ? (
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
            aria-labelledby={titleId}
            className="relative z-[101] flex min-h-0 min-w-0 w-full flex-1 flex-col overflow-hidden bg-parchment sm:max-h-[min(92vh,900px)] sm:max-w-2xl sm:flex-none sm:overflow-y-auto sm:rounded-[1.375rem] sm:border sm:border-gold-logo/20 sm:shadow-[0_24px_64px_-24px_rgba(36,28,23,0.2)]"
          >
            <p id={titleId} className="sr-only">
              Complete your booking — we&apos;ll open WhatsApp with your details so you can send the message in one tap.
            </p>

            {/* Mobile: full-screen chrome + close */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border-subtle/90 bg-parchment px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:hidden">
              <p className="min-w-0 flex-1 font-heading text-[1.05rem] font-medium leading-tight tracking-tight text-ink">
                Complete your booking
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
                  <p className="font-heading text-xl font-medium leading-snug tracking-tight text-ink">
                    Complete your booking
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    We’ll open WhatsApp with your details so you can send the message in one tap.
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
                We’ll open WhatsApp with your details so you can send the message in one tap.
              </p>

              <div className="booking-modal-form min-w-0 rounded-xl border border-border-subtle/90 bg-surface-elevated/95 p-4 sm:p-6">
                <BookingForm
                  key={`${selectedOfferId}-${bookingInitialMessage.slice(0, 48)}`}
                  initialOfferId={selectedOfferId}
                  initialMessage={bookingInitialMessage}
                  lockOffer
                  onSuccessNavigate={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
