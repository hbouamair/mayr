import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EditorialSectionTitle, splitEditorialTitle } from "@/components/EditorialSectionTitle";
import { HomeHeroSlider } from "@/components/HomeHeroSlider";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { FoodSection } from "@/components/FoodSection";
import { TestimonialsShowcase } from "@/components/TestimonialsShowcase";
import {
  accommodationGalleryImages,
  accommodationParagraphs,
  heroTagline,
  heroSubtagline,
  homeIntro,
  roomTypesHighlight,
  services,
  testimonials,
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
          <p className="mt-6 max-w-2xl font-body text-base font-light leading-[1.75] tracking-wide text-white/75 sm:text-lg">
            {homeIntro}
          </p>
          <div className="mt-12 flex w-full min-w-0 flex-col gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/booking"
              className="btn-cta-hero-light inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-lg px-10 py-3.5 font-body text-[10px] font-semibold tracking-[0.24em] uppercase"
            >
              <Calendar className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
              Book your retreat
            </Link>
            <Link
              href="/retreat-program"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-lg border border-white/70 bg-white/5 px-10 py-3.5 font-body text-[10px] font-semibold tracking-[0.24em] text-white uppercase backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Explore now
            </Link>
          </div>
        </div>
      </HomeHeroSlider>

      <section className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionIntro
          surface="plain"
          eyebrow="What we offer"
          title="Our services"
          description="Movement, sound, culture, and rest — woven into each day of your stay."
        />
        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:gap-8" role="list">
          {services.map((s, i) => (
            <ServiceCard key={s.title} item={s} index={i} />
          ))}
        </ul>
      </section>

      <section className="border-t border-border-subtle bg-parchment/60 bg-noise-soft">
        <div className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionIntro
            surface="plain"
            eyebrow="Stay"
            title="Accommodation"
            description="From Atlas stillness to Medina energy — two landscapes, one journey."
          />
          <div className="mt-12 space-y-6 font-body text-base leading-[1.8] text-muted lg:mt-14">
            {accommodationParagraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 48)} className="max-w-3xl">
                {p}
              </p>
            ))}
          </div>
          <div className="card-2026 card-2026--accent-gold mt-10 max-w-2xl p-6 sm:p-7">
            <span className="card-2026__noise" aria-hidden />
            <p className="relative z-[1] font-body text-base font-medium leading-relaxed text-ink">{roomTypesHighlight}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
            {accommodationGalleryImages.map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/50 bg-white/20 shadow-[0_20px_50px_-24px_rgba(36,28,23,0.18)] ring-1 ring-gold-logo/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-12 inline-flex items-center gap-2 font-body text-[10px] font-semibold tracking-[0.22em] text-terracotta uppercase underline decoration-gold-logo/30 underline-offset-[8px] transition-colors hover:text-terracotta-glow"
          >
            Read more about us
          </Link>
        </div>
      </section>

      <FoodSection />

      <section className="border-t border-border-subtle">
        <div className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionIntro
            surface="plain"
            eyebrow="Voices"
            title="Testimonials"
            description="Kind words from guests — shared anonymously, with gratitude."
          />
          <div className="mt-14 lg:mt-16">
            <TestimonialsShowcase items={testimonials} />
          </div>
        </div>
      </section>

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
