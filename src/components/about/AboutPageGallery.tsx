import Image from "next/image";
import type { AboutPageGalleryImage } from "@/lib/site-content";

type AboutPageGalleryProps = {
  images: readonly AboutPageGalleryImage[];
};

const figureBase =
  "group relative overflow-hidden rounded-[1.35rem] border border-white/40 bg-ink/5 ring-1 ring-gold-logo/12";

/**
 * Editorial layout for /about. Data: `aboutPageGalleryImages` in site-content.
 * - 1 image: full-width hero band
 * - 2 images: two equal columns
 * - 3+ images: bento (large left + two stacked right), optional 4th as wide band
 */
export function AboutPageGallery({ images }: AboutPageGalleryProps) {
  if (images.length === 0) return null;

  const [a, b, c, wide] = images;

  if (images.length === 1) {
    return (
      <figure className={`${figureBase} relative aspect-[21/10] min-h-[200px] shadow-[0_24px_60px_-36px_rgba(36,28,23,0.35)] sm:aspect-[2.2/1]`}>
        <Image
          src={a.src}
          alt={a.alt}
          fill
          quality={100}
          sizes="100vw"
          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-ink/5" aria-hidden />
      </figure>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {[a, b].map((img) => (
          <figure
            key={img.src}
            className={`${figureBase} relative min-h-[220px] shadow-[0_20px_52px_-34px_rgba(36,28,23,0.32)] sm:min-h-[260px]`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="min-w-0 space-y-4 sm:space-y-5">
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        <figure
          className={`${figureBase} relative min-h-[240px] shadow-[0_24px_60px_-36px_rgba(36,28,23,0.35)] lg:col-span-7 lg:row-span-2 lg:min-h-[min(420px,52vh)]`}
        >
          <Image
            src={a.src}
            alt={a.alt}
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" aria-hidden />
        </figure>

        {b ? (
          <figure
            className={`${figureBase} relative min-h-[200px] shadow-[0_18px_48px_-32px_rgba(36,28,23,0.28)] lg:col-span-5 lg:row-start-1`}
          >
            <Image
              src={b.src}
              alt={b.alt}
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />
          </figure>
        ) : null}

        {c ? (
          <figure
            className={`${figureBase} relative min-h-[200px] shadow-[0_18px_48px_-32px_rgba(36,28,23,0.28)] lg:col-span-5 lg:row-start-2`}
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />
          </figure>
        ) : null}
      </div>

      {wide ? (
        <figure
          className={`${figureBase} relative aspect-[21/9] min-h-[180px] w-full shadow-[0_20px_56px_-36px_rgba(36,28,23,0.3)] sm:aspect-[2.4/1] sm:min-h-[220px]`}
        >
          <Image
            src={wide.src}
            alt={wide.alt}
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 72vw"
            className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-ink/15" aria-hidden />
        </figure>
      ) : null}
    </div>
  );
}
