"use client";

import { SITE_EMAIL } from "@/lib/site";

export function NewsletterBox({ className = "" }: { className?: string }) {
  const subject = encodeURIComponent("Newsletter subscription");
  const body = encodeURIComponent("Please add me to your newsletter.\n\nName:\nEmail:");
  const href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-border-subtle bg-white/50 p-5 backdrop-blur-sm sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8 ${className}`.trim()}
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-lg font-medium tracking-tight text-ink">Subscribe to our newsletter</h3>
        <p className="mt-1 text-sm text-muted">We will only use your email to share retreat updates.</p>
      </div>
      <a
        href={href}
        className="inline-flex shrink-0 justify-center rounded-full border border-gold-logo/30 bg-parchment/95 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-terracotta/40 hover:bg-surface-elevated md:mt-0"
      >
        Subscribe via email
      </a>
    </div>
  );
}
