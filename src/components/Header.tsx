"use client";

import { Calendar, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SITE_BRAND_NAME, SITE_LOGO_MARK } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/retreat-program", label: "Retreat Program" },
  { href: "/team", label: "Our Team" },
  { href: "/booking", label: "Book your Spot" },
  { href: "/contact", label: "Contact" },
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
      className={`relative px-3 py-2.5 font-body text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 sm:px-3.5 xl:px-4 ${
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
          <div className="relative flex min-h-[3.55rem] items-center justify-end gap-2 py-2.5 pl-[5.35rem] pr-2 sm:min-h-[3.7rem] sm:pl-[6rem] sm:pr-4 sm:py-3 md:pl-[6.5rem] lg:min-h-[3.85rem] lg:justify-between lg:pl-[7.25rem] lg:pr-5 xl:min-h-[4rem] xl:pl-[7.75rem]">
            <Link
              href="/"
              className={`group/logo absolute left-2 top-1/2 z-10 w-[4.65rem] -translate-y-1/2 shrink-0 transition-opacity duration-300 hover:opacity-90 sm:left-2.5 sm:w-[5.25rem] md:left-3 md:w-[5.75rem] lg:left-4 lg:w-[6.25rem] xl:w-[6.75rem] ${
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

            <div className="hidden flex-1 items-center justify-center gap-0 lg:flex xl:gap-0.5">
              {NAV.map((item) => (
                <NavLink key={item.href} href={item.href} tone={navTone}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link
                href="/booking"
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

      {/* Full-viewport mobile menu — wide editorial surface (2026) */}
      <div
        id={menuId}
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-labelledby={`${menuId}-title`}
      >
        <div
          className={`relative flex h-[100dvh] max-h-[100dvh] min-h-0 w-full flex-col overflow-hidden border-b border-white/25 bg-gradient-to-br from-parchment via-[#faf6ef] to-sand/50 pt-[max(0.5rem,env(safe-area-inset-top,0px))] pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] shadow-[0_24px_80px_-32px_rgba(36,28,23,0.35)] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200 motion-reduce:transition-opacity sm:pl-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.5rem,env(safe-area-inset-right,0px))] ${
            mobileOpen ? "opacity-100 motion-safe:translate-y-0" : "opacity-0 motion-safe:translate-y-3"
          }`}
        >
          <div
            className="pointer-events-none absolute -left-1/4 top-0 h-[55vh] w-[120%] bg-gradient-to-br from-terracotta/8 via-gold-logo/6 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tl from-gold-logo/18 via-terracotta/10 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,color-mix(in_srgb,var(--gold-logo)_12%,transparent),transparent_55%)]"
            aria-hidden
          />
          <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.045]" aria-hidden />

          <div className="relative z-[1] flex shrink-0 items-end justify-between gap-3 pb-5 pt-3 sm:gap-4 sm:pb-6 sm:pt-4">
            <div className="min-w-0 flex-1">
              <p
                id={`${menuId}-title`}
                className="font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-terracotta/85 sm:text-[11px]"
              >
                Navigate
              </p>
              <p className="mt-1 font-heading text-[clamp(1.35rem,5.5vw,1.85rem)] font-medium leading-[1.05] tracking-tight text-ink">
                <span className="text-gradient-brand">Marrakech</span>
                <span className="block text-ink">Alchemy</span>
              </p>
            </div>
            <button
              type="button"
              className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-surface-elevated/75 text-ink shadow-sm backdrop-blur-md transition-[background-color,transform] active:scale-[0.97] active:bg-ink/5"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>

          <div className="relative z-[1] min-h-0 flex-1 overflow-y-auto overscroll-y-contain pb-2 pt-2 [-webkit-overflow-scrolling:touch] sm:pb-4 sm:pt-3">
            <nav className="w-full" aria-label="Mobile primary">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex w-full items-start gap-3 border-t border-ink/[0.06] py-[1.15rem] text-left transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-opacity first:border-t-0 first:pt-1 sm:gap-4 sm:py-[1.3rem] sm:first:pt-2 ${
                    mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${70 + i * 45}ms` : "0ms" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    className="mt-[0.35em] h-[1.35em] w-0.5 shrink-0 rounded-full bg-gradient-to-b from-gold-logo/50 via-terracotta/45 to-gold-logo/25 opacity-50 transition-[opacity,transform] motion-safe:group-active:scale-y-110 motion-safe:group-active:opacity-100"
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 font-heading text-[clamp(1.2rem,4.5vw,1.65rem)] font-medium leading-tight tracking-tight text-ink transition-colors group-active:text-terracotta">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="relative z-[1] shrink-0 border-t border-white/35 bg-gradient-to-t from-surface-elevated/90 via-parchment/80 to-transparent pt-5 backdrop-blur-xl sm:pt-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
            <Link
              href="/booking"
              className="btn-brand-pill flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-terracotta-glow to-terracotta-deep py-3.5 font-body text-[11px] font-semibold tracking-[0.22em] text-white uppercase shadow-[0_16px_40px_-12px_rgba(166,75,42,0.45)] ring-1 ring-white/20 active:opacity-95 sm:text-xs"
              onClick={() => setMobileOpen(false)}
            >
              <Calendar className="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
              Book your retreat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
