"use client";

import { Calendar, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SITE_BRAND_NAME, SITE_LOGO_MARK, SITE_SECTION_KICKER } from "@/lib/site";

const NAV = [
  { href: "/about", label: "About us" },
  { href: "/retreat-program", label: "Our Programs" },
  { href: "/booking", label: "MAYR Experience" },
  { href: "/team", label: "Our Fellows" },
  { href: "/yoga-studio", label: "Our Yoga Studio" },
  { href: "/contact", label: "Contact us" },
] as const;

function NavLink({
  href,
  children,
  tone,
}: {
  href: string;
  children: React.ReactNode;
  tone: "onHero" | "default";
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const onHero = tone === "onHero";
  return (
    <Link
      href={href}
      className={`relative whitespace-nowrap px-2.5 py-2 font-body text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 sm:px-3 lg:py-2.5 xl:px-3.5 ${
        onHero
          ? active
            ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]"
            : "text-white/82 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] hover:text-white"
          : active
            ? "text-ink"
            : "text-ink/72 hover:text-ink"
      } group/nav`}
    >
      {children}
      <span
        className={`absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover/nav:w-3/4 ${
          onHero
            ? `bg-gradient-to-r from-parchment/95 to-gold-bright/90 ${active ? "w-3/4" : ""}`
            : `bg-gradient-to-r from-gold-logo to-terracotta ${active ? "w-3/4" : ""}`
        }`}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isHome = pathname === "/";
  const navOnHero = isHome && !scrolled;
  const navTone = navOnHero ? "onHero" : "default";

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-700 sm:px-6 ${
          loaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "pt-2 md:pt-3" : "pt-5 md:pt-6 lg:pt-7"}`}
      >
        <nav
          aria-label="Primary"
          className={`zelij-nav-ribbon mx-auto w-full max-w-6xl overflow-visible rounded-2xl transition-all duration-500 ${
            navOnHero
              ? "border border-white/22 bg-ink/22 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-[14px] backdrop-saturate-[125%]"
              : scrolled
                ? "glass-nav-merged--scrolled"
                : "glass-nav-merged"
          }`}
        >
          <div className="relative flex min-h-[3.75rem] items-center justify-end gap-2 py-2.5 pl-[6.35rem] pr-2 sm:min-h-[4rem] sm:pl-[7.1rem] sm:pr-4 sm:py-3 md:pl-[7.75rem] lg:min-h-[4.15rem] lg:justify-between lg:pl-[8.6rem] lg:pr-5 xl:min-h-[4.35rem] xl:pl-[9.35rem]">
            <Link
              href="/"
              className={`group/logo absolute left-2 top-1/2 z-10 w-[5.6rem] -translate-y-1/2 shrink-0 transition-opacity duration-300 hover:opacity-90 sm:left-2.5 sm:w-[6.35rem] md:left-3 md:w-[6.9rem] lg:left-4 lg:w-[7.5rem] xl:w-[8.25rem] ${
                navOnHero ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={SITE_LOGO_MARK}
                  alt={SITE_BRAND_NAME}
                  width={512}
                  height={512}
                  className="h-full w-full object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:flex xl:gap-x-1">
              {NAV.map((item) => (
                <NavLink key={item.href} href={item.href} tone={navTone}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link
                href="/retreat-program#browse-retreats"
                className="btn-brand-pill group/cta relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-terracotta-glow to-terracotta-deep px-6 py-2.5 font-body text-[11px] font-semibold tracking-[0.2em] text-white uppercase shadow-md shadow-terracotta/15 ring-1 ring-white/15 xl:px-7"
              >
                <Calendar className="relative z-10 h-3.5 w-3.5 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                <span className="relative z-10">Book your retreat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta to-terracotta-deep opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100" />
              </Link>
            </div>

            <button
              type="button"
              className={`relative flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl transition-colors active:bg-white/10 lg:hidden ${
                navOnHero ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]" : "text-ink active:bg-ink/5"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <div className="relative h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "scale-x-0 opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-viewport mobile menu — must stack above fixed header (z-50) */}
      <div
        id={menuId}
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-labelledby={`${menuId}-title`}
      >
        <div
          className={`relative flex h-[100dvh] max-h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-parchment pt-[max(0.75rem,env(safe-area-inset-top,0px))] pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] shadow-[0_24px_80px_-32px_rgba(36,28,23,0.35)] ring-1 ring-ink/[0.06] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200 motion-reduce:transition-opacity sm:pl-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.5rem,env(safe-area-inset-right,0px))] ${
            mobileOpen ? "opacity-100 motion-safe:translate-y-0" : "opacity-0 motion-safe:translate-y-3"
          }`}
        >
          {/* Subtle depth only — keep panel readable (no page bleed-through) */}
          <div
            className="pointer-events-none absolute -left-1/4 top-0 h-[40vh] w-[120%] bg-gradient-to-br from-terracotta/[0.06] via-gold-logo/[0.04] to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-gradient-to-tl from-gold-logo/10 via-terracotta/6 to-transparent blur-3xl"
            aria-hidden
          />
          <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden />

          <div className="relative z-[1] flex shrink-0 items-start justify-between gap-3 pb-9 pt-1 sm:items-end sm:pb-10 sm:pt-2">
            <div className="min-w-0 flex-1 pr-2">
              <p
                id={`${menuId}-title`}
                className="font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-terracotta/85 sm:text-[11px]"
              >
                {SITE_SECTION_KICKER}
              </p>
              <p className="mt-1 font-heading text-[clamp(1.25rem,5vw,1.65rem)] font-medium leading-[1.08] tracking-tight text-ink">
                <span className="text-gradient-brand">Marrakech</span>
                <span className="block text-ink">Alchemy</span>
              </p>
            </div>
            <button
              type="button"
              className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-surface-elevated text-ink shadow-sm transition-[background-color,transform] active:scale-[0.97] active:bg-ink/5"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>

          {/* Scroll: nav + CTA with mt-auto so short menus don’t leave a dead zone */}
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch]">
            <nav className="w-full shrink-0 pt-5 sm:pt-6" aria-label="Mobile primary">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex w-full items-center gap-3 border-t border-ink/[0.08] py-5 text-left transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-opacity first:border-t-0 first:pt-0 sm:gap-4 sm:py-[1.35rem] ${
                    mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${70 + i * 45}ms` : "0ms" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    className="h-6 w-0.5 shrink-0 self-center rounded-full bg-gradient-to-b from-gold-logo/55 via-terracotta/50 to-gold-logo/30 opacity-70 transition-[opacity,transform] motion-safe:group-active:scale-y-110 motion-safe:group-active:opacity-100"
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 font-heading text-[clamp(1.05rem,4vw,1.4rem)] font-medium leading-snug tracking-tight text-ink transition-colors group-active:text-terracotta">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto shrink-0 border-t border-border-subtle/90 bg-parchment/95 pt-4 pb-[max(1.1rem,env(safe-area-inset-bottom,0px))]">
              <Link
                href="/retreat-program#browse-retreats"
                className="btn-brand-pill flex min-h-[3rem] w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-terracotta-glow to-terracotta-deep py-3 font-body text-[11px] font-semibold tracking-[0.22em] text-white uppercase shadow-[0_16px_40px_-12px_rgba(166,75,42,0.45)] ring-1 ring-white/20 active:opacity-95 sm:min-h-[3.15rem] sm:text-xs"
                onClick={() => setMobileOpen(false)}
              >
                <Calendar className="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                Book your retreat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
