import type { Metadata } from "next";
import { Suspense } from "react";
import { RoomPricingCards } from "@/components/RoomPricingCards";
import { SectionIntro } from "@/components/SectionIntro";
import { pricingIncludes, pricingMeta } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Book your Spot",
  description: "Choose your room at Marrakech Alchemy Yoga Retreats — book via WhatsApp in a few steps.",
};

function CardsFallback() {
  return (
    <div className="grid animate-pulse gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card-2026 h-80 rounded-[1.375rem] bg-parchment/50" />
      ))}
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="mx-auto min-w-0 w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Hello"
        title="Book your spot"
        description={
          <>
            <span className="font-semibold text-ink">{pricingMeta.totalSpots} spots</span> across this retreat —{" "}
            {pricingMeta.spotsPrivate} private · {pricingMeta.spotsTwin} twin · {pricingMeta.spotsTriple} triple.
          </>
        }
      />

      <section className="mt-12 sm:mt-14 lg:mt-16" aria-labelledby="booking-included-heading">
        <div className="card-2026 relative overflow-hidden p-6 sm:p-8 lg:p-9">
          <span className="card-2026__noise" aria-hidden />
          <div
            className="pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full bg-gradient-to-br from-terracotta/10 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative z-[1]">
            <p className="font-body text-[10px] font-semibold tracking-[0.28em] text-terracotta/90 uppercase">Your stay</p>
            <h2 id="booking-included-heading" className="mt-2 font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">
              What&apos;s included
            </h2>
            <p className="mt-2 max-w-2xl font-body text-sm font-light leading-relaxed text-muted">
              Everything below is part of the retreat — so you know what you&apos;re booking before you choose a room.
            </p>
            <ul className="checklist-2026 mt-8 border-0 bg-transparent p-0 font-body text-[15px] leading-relaxed text-muted sm:columns-2 sm:gap-x-10 sm:[column-gap:2.5rem]">
              {pricingIncludes.map((line) => (
                <li key={line} className="break-inside-avoid pb-3 sm:pb-3">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-14" aria-label="Room types and pricing">
        <Suspense fallback={<CardsFallback />}>
          <RoomPricingCards />
        </Suspense>
      </section>
    </div>
  );
}
