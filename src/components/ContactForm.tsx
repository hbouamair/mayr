"use client";

import { useState, useTransition } from "react";
import { submitContact } from "@/app/actions/contact";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]> | undefined>();

  return (
    <form
      className="contact-form-2026 space-y-5"
      action={(fd) => {
        setMessage(null);
        setFieldErrors(undefined);
        startTransition(async () => {
          const result = await submitContact(fd);
          if (!result.ok) {
            setMessage(result.error);
            setFieldErrors(result.fieldErrors);
            return;
          }
          setMessage(
            result.emailSent
              ? "Thank you — your message has been sent."
              : "Thank you — we received your message. We will reply shortly."
          );
        });
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="group contact-field-2026">
          <label htmlFor="contact-name" className="contact-field-2026__label">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="contact-field-2026__input"
            aria-invalid={Boolean(fieldErrors?.name?.[0])}
            aria-describedby={fieldErrors?.name?.[0] ? "contact-name-error" : undefined}
          />
          {fieldErrors?.name?.[0] ? (
            <p id="contact-name-error" className="contact-field-2026__error" role="alert">
              {fieldErrors.name[0]}
            </p>
          ) : null}
        </div>

        <div className="group contact-field-2026">
          <label htmlFor="contact-email" className="contact-field-2026__label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-field-2026__input"
            aria-invalid={Boolean(fieldErrors?.email?.[0])}
            aria-describedby={fieldErrors?.email?.[0] ? "contact-email-error" : undefined}
          />
          {fieldErrors?.email?.[0] ? (
            <p id="contact-email-error" className="contact-field-2026__error" role="alert">
              {fieldErrors.email[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div className="group contact-field-2026 contact-field-2026--tall">
        <label htmlFor="contact-message" className="contact-field-2026__label">
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className="contact-field-2026__input contact-field-2026__textarea resize-y"
          aria-invalid={Boolean(fieldErrors?.message?.[0])}
          aria-describedby={fieldErrors?.message?.[0] ? "contact-message-error" : undefined}
        />
        {fieldErrors?.message?.[0] ? (
          <p id="contact-message-error" className="contact-field-2026__error" role="alert">
            {fieldErrors.message[0]}
          </p>
        ) : null}
      </div>

      {message ? (
        <p
          className={`contact-form-2026__banner rounded-xl border px-4 py-3 font-body text-sm ${
            message.startsWith("Thank you")
              ? "border-gold-logo/30 bg-gradient-to-r from-terracotta/[0.06] via-parchment/80 to-gold-logo/[0.08] text-ink"
              : "border-red-200 bg-red-50/90 text-red-800"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="contact-form-2026__submit inline-flex min-h-[3rem] w-full items-center justify-center rounded-xl px-10 font-body text-[10px] font-semibold tracking-[0.22em] text-white uppercase shadow-lg shadow-terracotta/20 transition disabled:opacity-55 sm:w-auto"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <p className="font-body text-[11px] leading-relaxed text-muted sm:max-w-[14rem] sm:text-right">
          We usually reply within a day or two — thank you for your patience.
        </p>
      </div>
    </form>
  );
}
