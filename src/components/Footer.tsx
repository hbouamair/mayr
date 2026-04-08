import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsletterBox } from "@/components/NewsletterBox";
import { INSTAGRAM_URL, SITE_BRAND_NAME, SITE_EMAIL, SITE_LOGO_MARK, TIKTOK_URL, WHATSAPP_LINK } from "@/lib/site";

/** Marco-style “Classes” column — core retreat journeys */
const FOOTER_RETREAT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/retreat-program", label: "Retreat program" },
  { href: "/retreat-program#browse-retreats", label: "Retreat dates" },
  { href: "/booking", label: "Book your spot" },
] as const;

/** “Company” column */
const FOOTER_COMPANY_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact" },
] as const;

/** “Support” column */
const FOOTER_SUPPORT_LINKS = [
  { href: "/contact", label: "Help center" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms & conditions" },
] as const;

function FooterLinkColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="footer-ms-col-title">{title}</h2>
      <ul className="footer-ms-list space-y-0.5" role="list">
        {children}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer-ms mt-auto">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-11 lg:py-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand — same role as Marco & Sara name + tagline */}
          <div className="min-w-0 lg:col-span-4">
            <Link
              href="/"
              className="footer-ms-brand-lockup group/footer-brand inline-flex max-w-full flex-wrap items-center gap-3 transition-opacity hover:opacity-90"
            >
              <span className="relative flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center sm:h-24 sm:w-24 md:h-[6.75rem] md:w-[6.75rem]">
                <Image
                  src={SITE_LOGO_MARK}
                  alt=""
                  width={384}
                  height={384}
                  className="h-full w-full object-contain object-left"
                />
              </span>
              <span className="footer-ms-brand-name font-heading text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
                {SITE_BRAND_NAME}
              </span>
            </Link>
            <p className="footer-ms-brand-tagline mt-3 max-w-sm">
              Immersive yoga and restoration in Morocco — Atlas calm, Medina soul, and the warmth of Moroccan
              hospitality.
            </p>
            <Link
              href="/booking"
              className="footer-ms-cta btn-brand-pill mt-4 inline-flex min-h-[2.25rem] items-center justify-center rounded-lg bg-gradient-to-r from-terracotta-glow to-terracotta-deep px-5 py-2 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase shadow-md shadow-terracotta/20 ring-1 ring-white/15"
            >
              Book your retreat
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-6 lg:col-span-8 lg:gap-6">
            <FooterLinkColumn title="Retreat">
              {FOOTER_RETREAT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-ms-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterLinkColumn>

            <FooterLinkColumn title="Company">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-ms-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterLinkColumn>

            <FooterLinkColumn title="Support">
              {FOOTER_SUPPORT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-ms-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="footer-ms-link break-all">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} className="footer-ms-link" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} className="footer-ms-link" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} className="footer-ms-link" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            </FooterLinkColumn>
          </div>
        </div>

        <div className="footer-ms-newsletter mt-8 lg:mt-9">
          <NewsletterBox className="footer-ms-newsletter-inner !gap-3 border-gold-logo/20 bg-surface-elevated/70 !p-3.5 sm:!p-4 md:!gap-5" />
        </div>

        <div className="footer-ms-bottom mt-7 flex flex-col items-center justify-between gap-3 border-t border-border-subtle pt-5 sm:flex-row sm:items-center">
          <p className="text-center font-body text-[12px] text-muted sm:text-left">
            © {new Date().getFullYear()} Marrakech Alchemy Yoga Retreats. All rights reserved.
          </p>
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-muted/90">
            Marrakech · Atlas · Medina
          </p>
        </div>
      </div>
    </footer>
  );
}
