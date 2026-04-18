import type { ReactNode } from "react";
import {
  EditorialSectionTitle,
  splitEditorialTitle,
  type EditorialHeadingLevel,
} from "@/components/EditorialSectionTitle";

type SectionIntroProps = {
  eyebrow?: string;
  /** Used for auto-split (first word / rest) when overrides omitted */
  title: string;
  /** Override gradient line */
  titleHighlight?: string;
  /** Override second line (ink) */
  titleRest?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Same card style as About page hero */
  titleAs?: EditorialHeadingLevel;
  /**
   * `plain` — original home layout: no panel, max-w-3xl + md description.
   * `card` — page-hero-glow panel (legacy inner pages).
   * `contact` — same hero band as Contact (mesh, orbs, sheen, lux-rule row, editorial title).
   */
  surface?: "card" | "plain" | "contact";
  /** Passed to EditorialSectionTitle — `page` is smaller and spans the hero width */
  titleScale?: "hero" | "page";
  /** Appended to description wrapper (e.g. wider max-width) */
  descriptionClassName?: string;
  /** Passed to EditorialSectionTitle (e.g. whitespace-nowrap for a single-line headline) */
  titleClassName?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  titleHighlight,
  titleRest,
  description,
  align = "left",
  titleAs = "h2",
  surface = "card",
  titleScale = "hero",
  descriptionClassName = "",
  titleClassName = "",
}: SectionIntroProps) {
  const isCenter = align === "center";
  const auto = splitEditorialTitle(title);
  const highlight = titleHighlight ?? auto.highlight;
  const rest = titleRest !== undefined ? titleRest : auto.rest;

  const eyebrowRowCardPlain = (
    <div className={`flex items-center gap-5 ${isCenter ? "justify-center" : ""}`}>
      <span className="lux-rule shrink-0" aria-hidden />
      {eyebrow ? (
        <p className="font-body text-[10px] font-semibold tracking-[0.32em] text-terracotta/90 uppercase sm:text-[11px]">
          {eyebrow}
        </p>
      ) : null}
    </div>
  );

  const eyebrowRowContact = (
    <div className={`flex flex-wrap items-center gap-4 sm:gap-5 ${isCenter ? "justify-center" : ""}`}>
      <span className="lux-rule shrink-0" aria-hidden />
      {eyebrow ? (
        <p className="font-body text-[10px] font-semibold tracking-[0.32em] text-terracotta/90 uppercase sm:text-[11px]">
          {eyebrow}
        </p>
      ) : null}
      {!isCenter ? (
        <span
          className="hidden h-px flex-1 bg-gradient-to-r from-gold-logo/25 to-transparent sm:block sm:max-w-[6rem]"
          aria-hidden
        />
      ) : null}
    </div>
  );

  const titleBlock = (
    <div className={surface === "contact" ? "mt-7 sm:mt-8" : "mt-8"}>
      <EditorialSectionTitle
        as={titleAs}
        highlight={highlight}
        rest={rest}
        align={align}
        scale={titleScale}
        className={titleClassName}
      />
    </div>
  );

  const descMaxDefault =
    descriptionClassName.trim() !== ""
      ? ""
      : surface === "plain"
        ? "max-w-md"
        : surface === "contact"
          ? "max-w-lg"
          : "max-w-3xl";

  const descBlock =
    description != null && description !== "" ? (
      <div
        className={`mt-6 font-body text-sm font-light leading-relaxed tracking-wide text-muted sm:text-base ${isCenter ? "mx-auto" : ""} ${descMaxDefault} ${descriptionClassName}`.trim()}
      >
        {description}
      </div>
    ) : null;

  if (surface === "plain") {
    return (
      <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrowRowCardPlain}
        {titleBlock}
        {descBlock}
      </div>
    );
  }

  if (surface === "contact") {
    return (
      <header
        className={`contact-hero-2026 zelij-hero-rosettes relative mb-12 overflow-hidden rounded-[1.65rem] border border-border-subtle sm:mb-14 lg:mb-16 ${
          isCenter ? "text-center" : ""
        }`}
      >
        <div className="contact-hero-2026__mesh pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="contact-hero-2026__orb contact-hero-2026__orb--a pointer-events-none absolute -right-24 -top-28 h-[22rem] w-[22rem] rounded-full bg-gradient-to-bl from-terracotta/20 via-gold-logo/10 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="contact-hero-2026__orb contact-hero-2026__orb--b pointer-events-none absolute -bottom-32 -left-20 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-gold-logo/18 via-terracotta/8 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="contact-hero-2026__sheen pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent"
          aria-hidden
        />
        <div className="relative z-[1] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          {eyebrowRowContact}
          {titleBlock}
          {descBlock}
        </div>
      </header>
    );
  }

  return (
    <div className={isCenter ? "mx-auto w-full max-w-4xl text-center" : "w-full max-w-4xl"}>
      <div className={`page-hero-glow relative px-8 py-10 sm:px-12 sm:py-12 ${isCenter ? "text-center" : ""}`}>
        <div className={`relative z-[2] w-full max-w-4xl ${isCenter ? "mx-auto" : ""}`}>
          {eyebrowRowCardPlain}
          {titleBlock}
          {descBlock}
        </div>
      </div>
    </div>
  );
}
