import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { TestimonialsShowcase } from "@/components/TestimonialsShowcase";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";
import { testimonials } from "@/lib/site-content";

export function HomeTestimonialsReviewsSection() {
  return (
    <section className="border-t border-border-subtle bg-parchment/50 bg-noise-soft">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionIntro
          surface="plain"
          eyebrow="Voices"
          title="Testimonials & reviews"
          description="Kind words from guests — and your ratings on Google."
        />
        <div className="mt-14 lg:mt-16">
          <TestimonialsShowcase items={testimonials} />
        </div>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:mt-14 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-secondary inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] uppercase"
          >
            Open Google reviews
            <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
