"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";
import type { PricingTier } from "@/lib/retreat-detail-content";
import { EARLY_BIRD_MIN_DAYS_BEFORE_START, isEarlyBirdEligible } from "@/lib/retreat-early-bird";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Props = {
  tier: PricingTier;
  retreatTitle: string;
  retreatDates: string;
  retreatLocation: string;
  retreatStartIso: string;
  onClose: () => void;
};

export function BookSpotWhatsAppModal({
  tier,
  retreatTitle,
  retreatDates,
  retreatLocation,
  retreatStartIso,
  onClose,
}: Props) {
  const titleId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const useEarlyBird = isEarlyBirdEligible(retreatStartIso, new Date());

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const buildMessage = useCallback(() => {
    const selectedEur = useEarlyBird ? tier.earlyBirdEur : tier.normalEur;
    const rateLabel = useEarlyBird ? "Early bird" : "Regular price";
    const ruleNote = useEarlyBird
      ? `Applied rate: Early bird — booking is more than ${EARLY_BIRD_MIN_DAYS_BEFORE_START} days before the retreat start.`
      : `Applied rate: Regular — booking is ${EARLY_BIRD_MIN_DAYS_BEFORE_START} days or less before the retreat start.`;
    const lines = [
      "Hello Marrakech Alchemy Yoga Retreats,",
      "",
      "I would like to book my spot:",
      "",
      `Retreat: ${retreatTitle}`,
      `Dates: ${retreatDates}`,
      `Location: ${retreatLocation}`,
      "",
      `Room: ${tier.roomLabel}`,
      `${ruleNote}`,
      `Quoted total: ${rateLabel} — ${selectedEur.toLocaleString("en-US")} €`,
      `(Reference: Early bird ${tier.earlyBirdEur.toLocaleString("en-US")} € · Regular ${tier.normalEur.toLocaleString("en-US")} €)`,
      "",
      "My details:",
      `Name: ${name.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : "Email: —",
      phone.trim() ? `Phone: ${phone.trim()}` : "Phone: —",
      "",
      notes.trim() ? `Notes:\n${notes.trim()}` : "",
      "",
      "Thank you!",
    ];
    return lines.filter(Boolean).join("\n");
  }, [email, name, notes, phone, retreatDates, retreatLocation, retreatTitle, tier, useEarlyBird]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setError("Please add an email or phone number so we can reach you.");
      return;
    }
    const url = getWhatsAppLink(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const selectedAmount = useEarlyBird ? tier.earlyBirdEur : tier.normalEur;
  const rateLabel = useEarlyBird ? "Early bird" : "Regular price";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-parchment sm:flex sm:items-center sm:justify-center sm:bg-transparent sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 hidden bg-ink/45 backdrop-blur-[2px] sm:block"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] flex min-h-0 min-w-0 w-full flex-1 flex-col overflow-hidden bg-parchment sm:max-h-[min(92vh,880px)] sm:max-w-lg sm:flex-none sm:overflow-y-auto sm:rounded-[1.375rem] sm:border sm:border-gold-logo/20 sm:shadow-[0_24px_64px_-24px_rgba(36,28,23,0.2)]"
      >
        <h2 id={titleId} className="sr-only">
          Book your spot — confirm room and rate
        </h2>
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border-subtle/90 bg-parchment px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:hidden">
          <p className="min-w-0 flex-1 font-heading text-[1.05rem] font-medium leading-tight tracking-tight text-ink">
            Book your spot
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-white/80 text-ink shadow-sm transition active:bg-white active:text-terracotta"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] pt-4 sm:px-8 sm:pb-8 sm:pt-8">
          <div className="mb-5 hidden items-start justify-between gap-3 sm:flex">
            <div className="min-w-0 pr-2">
              <p className="font-heading text-xl font-medium leading-snug tracking-tight text-ink">Book your spot</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                Your rate is set from today&apos;s date vs the retreat start — we&apos;ll open WhatsApp with this message
                ready to send.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-white/60 p-2 text-ink transition hover:bg-white hover:text-terracotta"
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <div className="mb-6 rounded-xl border border-gold-logo/25 bg-gradient-to-br from-parchment/95 to-sand/80 p-4 sm:p-5">
            <p className="font-body text-[10px] font-semibold tracking-[0.24em] text-terracotta/90 uppercase">Your selection</p>
            <p className="mt-2 font-heading text-lg font-medium tracking-tight text-ink">{retreatTitle}</p>
            <p className="mt-1 font-body text-sm text-muted">{retreatDates}</p>
            <p className="mt-0.5 font-body text-sm text-muted">{retreatLocation}</p>
            <p className="mt-3 font-body text-sm font-medium text-ink">
              Room: <span className="text-terracotta">{tier.roomLabel}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="rounded-xl border border-gold-logo/25 bg-surface-elevated/90 p-4 sm:p-5">
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Your rate (automatic)</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink">
                {useEarlyBird ? (
                  <>
                    <strong className="font-medium text-terracotta">Early bird</strong> applies because you are booking
                    more than {EARLY_BIRD_MIN_DAYS_BEFORE_START} days before the first day of the retreat.
                  </>
                ) : (
                  <>
                    <strong className="font-medium text-ink">Regular price</strong> applies because you are booking{" "}
                    {EARLY_BIRD_MIN_DAYS_BEFORE_START} days or less before the first day of the retreat.
                  </>
                )}
              </p>
            </div>

            <div className="rounded-xl border border-gold-logo/20 bg-terracotta/[0.06] px-4 py-3">
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Quoted total</p>
              <p className="mt-1 font-heading text-2xl font-medium tabular-nums text-ink">
                {selectedAmount.toLocaleString("en-US")} €
                <span className="ml-2 font-body text-sm font-normal text-muted">({rateLabel})</span>
              </p>
            </div>

            <div>
              <label htmlFor="book-name" className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Full name <span className="text-terracotta">*</span>
              </label>
              <input
                id="book-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                className="input-brand mt-1.5 w-full rounded-xl border-border-subtle bg-surface-elevated px-3 py-2.5 font-body text-sm text-ink shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="book-email" className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Email
              </label>
              <input
                id="book-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="input-brand mt-1.5 w-full rounded-xl border-border-subtle bg-surface-elevated px-3 py-2.5 font-body text-sm text-ink shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="book-phone" className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Phone / WhatsApp
              </label>
              <input
                id="book-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                placeholder="+212 …"
                className="input-brand mt-1.5 w-full rounded-xl border-border-subtle bg-surface-elevated px-3 py-2.5 font-body text-sm text-ink shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="book-notes" className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Notes (optional)
              </label>
              <textarea
                id="book-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="input-brand mt-1.5 w-full resize-y rounded-xl border-border-subtle bg-surface-elevated px-3 py-2.5 font-body text-sm text-ink shadow-sm"
              />
            </div>

            {error ? (
              <p className="rounded-lg border border-terracotta/30 bg-terracotta/10 px-3 py-2 font-body text-sm text-terracotta-deep" role="alert">
                {error}
              </p>
            ) : null}

            <p className="font-body text-xs leading-relaxed text-muted">
              <span className="text-ink">*</span> Name required. Add email or phone so we can reply. Submit opens WhatsApp with your message — please send it to complete the request.
            </p>

            <button
              type="submit"
              className="btn-cta-primary w-full min-h-[3rem] rounded-xl px-6 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
            >
              Submit &amp; open WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
