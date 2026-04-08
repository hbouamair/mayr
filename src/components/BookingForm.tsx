"use client";

import { submitBooking } from "@/app/actions/booking";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getOfferById, offers } from "@/lib/offers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export type BookingFormProps = {
  initialOfferId: string;
  initialMessage?: string;
  /** Hide offer selector — room is fixed (e.g. modal from a specific card) */
  lockOffer?: boolean;
  /** After submit: open WhatsApp and run this (e.g. close modal). Skips thank-you screen. */
  onSuccessNavigate?: () => void;
};

export function BookingForm({ initialOfferId, initialMessage = "", lockOffer = false, onSuccessNavigate }: BookingFormProps) {
  const router = useRouter();
  const [offerId, setOfferId] = useState(initialOfferId);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [success, setSuccess] = useState<{
    emailSent: boolean;
    whatsappMessage: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const lockedOffer = lockOffer ? getOfferById(initialOfferId) : undefined;

  function resetSuccess() {
    setSuccess(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setFieldErrors({});

    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitBooking(formData);
      if (!result.ok) {
        setError(result.error);
        if (result.fieldErrors) setFieldErrors(result.fieldErrors);
        return;
      }

      window.open(getWhatsAppLink(result.whatsappMessage), "_blank", "noopener,noreferrer");
      form.reset();
      setOfferId(lockOffer ? initialOfferId : offers[0]!.id);

      if (onSuccessNavigate) {
        onSuccessNavigate();
        return;
      }

      setSuccess({
        emailSent: result.emailSent,
        whatsappMessage: result.whatsappMessage,
      });
      router.replace("/booking", { scroll: false });
    });
  }

  if (success && !onSuccessNavigate) {
    return (
      <div className="card-2026 p-8 text-ink">
        <h2 className="font-heading text-xl font-medium tracking-tight text-ink">Thank you</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {success.emailSent
            ? "We’ve emailed your details to our team. WhatsApp should open in a new tab with your message ready to send — please tap send to confirm with us."
            : "WhatsApp should open in a new tab with your message ready to send. (Email notification is optional — add RESEND_API_KEY to enable.)"}
        </p>
        <p className="mt-4 text-sm text-muted">
          If WhatsApp didn’t open,{" "}
          <a
            href={getWhatsAppLink(success.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta underline underline-offset-[5px] decoration-terracotta/35 hover:text-terracotta-glow"
          >
            tap here to open WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            resetSuccess();
            setError(null);
          }}
          className="btn-cta-secondary mt-8 rounded-xl px-5 py-2.5 font-body text-[10px] font-semibold tracking-[0.18em] uppercase"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <p
          className="rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-ink"
          role="alert"
        >
          {error}
        </p>
      )}

      {lockOffer && lockedOffer ? (
        <div>
          <p className="mb-2 font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">Room</p>
          <div className="rounded-xl border border-border-subtle bg-parchment/80 px-4 py-3 font-heading text-base font-medium text-ink">
            {lockedOffer.title}
          </div>
          <input type="hidden" name="offerId" value={initialOfferId} />
        </div>
      ) : (
        <div>
          <label htmlFor="offerId" className="mb-2 block font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">
            Offer
          </label>
          <select
            id="offerId"
            name="offerId"
            value={offerId}
            onChange={(e) => setOfferId(e.target.value)}
            className="input-brand w-full rounded-xl px-4 py-3 text-base text-ink placeholder:text-muted/60"
            required
          >
            {offers.map((o) => (
              <option key={o.id} value={o.id}>
                {o.title} — {o.priceLabel}
              </option>
            ))}
          </select>
          {fieldErrors.offerId?.[0] && (
            <p className="mt-1 text-sm text-terracotta-glow">{fieldErrors.offerId[0]}</p>
          )}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={lockOffer ? "modal-name" : "name"} className="mb-2 block font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">
            Name
          </label>
          <input
            id={lockOffer ? "modal-name" : "name"}
            name="name"
            type="text"
            autoComplete="name"
            required
            className="input-brand w-full rounded-xl px-4 py-3 text-base text-ink placeholder:text-muted/60"
            placeholder="Your full name"
          />
          {fieldErrors.name?.[0] && <p className="mt-1 text-sm text-terracotta-glow">{fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor={lockOffer ? "modal-email" : "email"} className="mb-2 block font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">
            Email
          </label>
          <input
            id={lockOffer ? "modal-email" : "email"}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input-brand w-full rounded-xl px-4 py-3 text-base text-ink placeholder:text-muted/60"
            placeholder="you@example.com"
          />
          {fieldErrors.email?.[0] && <p className="mt-1 text-sm text-terracotta-glow">{fieldErrors.email[0]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={lockOffer ? "modal-phone" : "phone"} className="mb-2 block font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">
          Phone <span className="font-normal normal-case tracking-normal text-muted/80">(optional)</span>
        </label>
        <input
          id={lockOffer ? "modal-phone" : "phone"}
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input-brand w-full rounded-xl px-4 py-3 text-base text-ink placeholder:text-muted/60"
          placeholder="+1 …"
        />
      </div>

      <div>
        <label htmlFor={lockOffer ? "modal-message" : "message"} className="mb-2 block font-body text-xs font-medium tracking-[0.12em] text-muted uppercase">
          Message <span className="font-normal normal-case tracking-normal text-muted/80">(optional)</span>
        </label>
        <textarea
          id={lockOffer ? "modal-message" : "message"}
          name="message"
          rows={4}
          defaultValue={initialMessage || undefined}
          className="input-brand w-full resize-y rounded-xl px-4 py-3 text-base text-ink placeholder:text-muted/60"
          placeholder="Dietary needs, travel questions, or preferred dates…"
        />
      </div>

      <div className="rounded-xl border border-border-subtle bg-parchment/90 p-5 backdrop-blur-sm">
        <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            name="acceptedTerms"
            className="mt-1 h-4 w-4 shrink-0 rounded border-border-strong text-terracotta focus:ring-terracotta/40"
          />
          <span>
            I confirm that I have read and agree to the{" "}
            <Link href="/terms" className="text-terracotta font-medium underline underline-offset-[5px] hover:text-terracotta-glow" target="_blank">
              Terms & Conditions
            </Link>{" "}
            of Marrakech Alchemy Yoga Retreats, including the booking, cancellation, and rescheduling policies.
          </span>
        </label>
        {fieldErrors.acceptedTerms?.[0] && (
          <p className="mt-2 text-sm text-terracotta-glow">{fieldErrors.acceptedTerms[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-cta-primary w-full rounded-2xl py-4 font-body text-xs font-semibold tracking-[0.2em] text-white uppercase disabled:opacity-60 sm:w-auto sm:px-12"
      >
        {isPending ? "Sending…" : onSuccessNavigate ? "Submit & open WhatsApp" : "Submit inquiry"}
      </button>
    </form>
  );
}
