import { Calendar } from "lucide-react";
import Link from "next/link";
import { EditorialSectionTitle, splitEditorialTitle } from "@/components/EditorialSectionTitle";
import { HomeHeroSlider } from "@/components/HomeHeroSlider";
import { HomeMayrSection } from "@/components/home/HomeMayrSection";
import { HomeProgramsCalendarSection } from "@/components/home/HomeProgramsCalendarSection";
import { HomeTestimonialsReviewsSection } from "@/components/home/HomeTestimonialsReviewsSection";
import {
  heroSubtagline,
  heroTagline,
  homeIntro,
} from "@/lib/site-content";

export default function Home() {
  const contactHeadline = splitEditorialTitle("Contact us");

  return (
    <div className="min-w-0">
      <HomeHeroSlider>
        <div className="flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left">
          <div className="flex min-w-0 items-center justify-center gap-5 sm:justify-start">
            <span className="h-px w-10 shrink-0 bg-white/45 sm:w-12" aria-hidden />
            <p className="min-w-0 font-body text-[11px] font-medium tracking-[0.32em] text-white/85 uppercase sm:text-xs">
              {heroTagline}
            </p>
          </div>
          <h1 className="mt-8 max-w-4xl font-heading text-[clamp(2.2rem,6.2vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-balance text-white">
            Marrakech Alchemy Yoga Retreats
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg font-light tracking-wide text-white/88 sm:text-xl">
            {heroSubtagline}
          </p>
          <p className="mt-6 max-w-2xl whitespace-pre-line font-body text-base font-light leading-[1.75] tracking-wide text-white/75 sm:text-lg">
            {homeIntro}
          </p>
          <div className="mt-12 flex w-full min-w-0 flex-col gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/booking"
              className="btn-cta-hero-light inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-lg px-10 py-3.5 font-body text-[10px] font-semibold tracking-[0.24em] uppercase"
            >
              <Calendar className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
              MAYR Experience
            </Link>
            <Link
              href="/retreat-program#browse-retreats"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-lg border border-white/70 bg-white/5 px-10 py-3.5 font-body text-[10px] font-semibold tracking-[0.24em] text-white uppercase backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Program calendar
            </Link>
          </div>
        </div>
      </HomeHeroSlider>

      <HomeMayrSection />

      <HomeProgramsCalendarSection />

      <HomeTestimonialsReviewsSection />

      <section className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-3xl min-w-0">
          <div className="flex min-w-0 items-center gap-5">
            <span className="lux-rule shrink-0" aria-hidden />
            <p className="font-body text-[10px] font-semibold tracking-[0.32em] text-terracotta/90 uppercase sm:text-[11px]">
              Reach
            </p>
          </div>
          <div className="mt-8">
            <EditorialSectionTitle
              as="h2"
              highlight={contactHeadline.highlight}
              rest={contactHeadline.rest}
            />
          </div>
          <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed tracking-wide text-muted sm:text-base">
            Questions, dates, or a gentle hello — we read every message with care.
          </p>
          <Link
            href="/contact"
            className="btn-cta-primary mt-10 inline-flex min-h-[3rem] items-center justify-center rounded-xl px-10 py-3.5 font-body text-[10px] font-semibold tracking-[0.24em] text-white uppercase ring-1 ring-white/20"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
