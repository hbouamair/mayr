"use client";

import { IconWhatsAppGlyph } from "@/components/icons/SocialGlyphs";
import { SITE_BRAND_NAME } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const DEFAULT_MESSAGE = `Hello! I'm interested in ${SITE_BRAND_NAME}.`;

/**
 * Bottom-right stack: optional back-to-top (after scroll) + WhatsApp CTA.
 * Icon-only WhatsApp on very small widths; pill with label from `sm` up.
 */
export function SiteFloatingDock() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const href = getWhatsAppLink(DEFAULT_MESSAGE);

  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-[45] flex flex-col items-end gap-2.5 sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:right-[max(1.5rem,env(safe-area-inset-right,0px))] sm:gap-3">
      {showBackTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-logo/35 bg-parchment/95 text-ink shadow-lg shadow-ink/10 backdrop-blur-md transition-all duration-300 hover:border-terracotta/40 hover:bg-surface-elevated hover:text-terracotta hover:shadow-xl hover:shadow-terracotta/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:h-12 sm:w-12"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab group pointer-events-auto flex min-h-12 max-w-[min(100vw-2rem,20rem)] items-center justify-center gap-0 rounded-full border border-white/25 bg-gradient-to-r from-terracotta-glow to-terracotta-deep text-white shadow-[0_10px_36px_-8px_rgba(166,75,42,0.55),0_2px_0_rgba(255,255,255,0.12)_inset] ring-1 ring-white/15 transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(166,75,42,0.6)] hover:brightness-[1.03] active:translate-y-0 active:brightness-[0.98] max-[380px]:h-12 max-[380px]:w-12 max-[380px]:p-0 sm:min-h-0 sm:justify-start sm:gap-3 sm:rounded-2xl sm:py-3.5 sm:pl-3.5 sm:pr-5"
        aria-label={`Chat on WhatsApp — ${SITE_BRAND_NAME}`}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white/22 sm:h-10 sm:w-10 sm:rounded-full">
          <IconWhatsAppGlyph className="h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6" />
        </span>
        <span className="hidden min-w-0 pr-1 font-body text-[11px] font-semibold leading-tight tracking-[0.12em] uppercase sm:inline sm:pr-0.5 sm:text-xs sm:tracking-[0.14em]">
          Book your retreat
        </span>
      </a>
    </div>
  );
}
