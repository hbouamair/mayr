import Image from "next/image";
import type { TeamMember } from "@/lib/site-content";

const OFFSETS = ["", "lg:translate-y-10"] as const;

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TeamShowcase({ members }: { members: TeamMember[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14" role="list">
      {members.map((member, i) => (
        <li key={member.name} className={`${OFFSETS[i] ?? ""} transition-transform duration-500`}>
          <article className="card-2026 flex h-full flex-col p-6 sm:p-7">
            <span className="card-2026__noise" aria-hidden />
            <div className="relative z-[1] mx-auto w-full max-w-[13rem]">
              <div
                className={`team-portrait-frame ring-1 ring-gold-logo/35 ring-offset-2 ring-offset-parchment ${
                  member.image ? "" : "flex items-center justify-center"
                }`}
              >
                {member.image ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 13rem"
                    className="object-cover"
                    priority={i === 1}
                  />
                ) : (
                  <span className="font-heading text-4xl font-medium text-ink/25" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
            </div>
            <div className="relative z-[1] mt-8 text-center sm:mt-9">
              <p className="font-body text-[10px] font-semibold tracking-[0.28em] text-terracotta/85 uppercase">{member.role}</p>
              <h2 className="mt-2 font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">{member.name}</h2>
              <div className="mx-auto mt-4 max-w-prose text-left">
                {member.bio
                  .split(/\n\n+/)
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((para, pi) => (
                    <p key={`${member.name}-${pi}`} className="font-body text-sm leading-relaxed text-muted first:mt-0 mt-4">
                      {para}
                    </p>
                  ))}
              </div>
            </div>
            <div className="relative z-[1] mt-8 flex flex-1 flex-col justify-end gap-4">
              <div className="mx-auto h-px w-12 bg-gradient-to-r from-transparent via-gold-logo/50 to-transparent" aria-hidden />
              {member.instagramUrl ? (
                <a
                  href={member.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-gold-logo/30 bg-white/50 px-4 py-2.5 font-body text-xs font-semibold text-terracotta backdrop-blur-sm transition hover:border-terracotta/35 hover:bg-white/75 hover:text-terracotta-glow"
                >
                  <InstagramGlyph className="h-5 w-5 shrink-0 text-ink/80" />
                  <span>Instagram</span>
                </a>
              ) : (
                <p className="text-center font-body text-[10px] tracking-[0.2em] text-muted uppercase">Photo coming soon</p>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
