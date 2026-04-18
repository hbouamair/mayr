import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import {
  IconFacebookGlyph,
  IconInstagramGlyph,
  IconMailGlyph,
  IconTikTokGlyph,
  IconWhatsAppGlyph,
} from "@/components/icons/SocialGlyphs";
import { FACEBOOK_URL, INSTAGRAM_URL, SITE_EMAIL, SITE_PHONE_DISPLAY, TIKTOK_URL, WHATSAPP_LINK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Marrakech Alchemy Yoga Retreats — send a message or reach us by email, WhatsApp, and social.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Hello"
        title="Contact us"
        description="Send a message with the form, or reach us through the channels beside it — we read everything with care."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="contact-panel-2026 relative overflow-hidden rounded-[1.5rem] p-6 sm:rounded-[1.65rem] sm:p-8 lg:p-9">
            <span className="contact-panel-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
            <div
              className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-terracotta/12 to-transparent blur-2xl"
              aria-hidden
            />
            <h2 className="relative z-[1] font-body text-[10px] font-semibold tracking-[0.28em] text-muted uppercase">
              Write to us
            </h2>
            <p className="relative z-[1] mt-2 max-w-md font-body text-sm text-muted">
              Share your question, dates, or a note — fields marked by the browser are required.
            </p>
            <div className="relative z-[1] mt-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <aside className="min-w-0 lg:col-span-5">
          <div className="contact-aside-2026 relative h-full overflow-hidden rounded-[1.5rem] border border-gold-logo/20 p-6 sm:rounded-[1.65rem] sm:p-8">
            <span className="contact-panel-2026__noise pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden />
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 translate-x-1/4 translate-y-1/4 rounded-full bg-gold-logo/12 blur-2xl"
              aria-hidden
            />
            <h2 className="relative z-[1] font-body text-[10px] font-semibold tracking-[0.28em] text-muted uppercase">
              Or reach out
            </h2>
            <ul className="relative z-[1] mt-7 space-y-6 font-body sm:mt-8 sm:space-y-7">
              <li className="contact-aside-2026__row">
                <a href={`mailto:${SITE_EMAIL}`} className="contact-aside-2026__channel">
                  <span className="contact-aside-2026__icon" aria-hidden>
                    <IconMailGlyph />
                  </span>
                  <span className="contact-aside-2026__channel-body">
                    <span className="contact-aside-2026__kicker">Email</span>
                    <span className="contact-aside-2026__value break-all">{SITE_EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="contact-aside-2026__row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-aside-2026__channel"
                >
                  <span className="contact-aside-2026__icon" aria-hidden>
                    <IconWhatsAppGlyph />
                  </span>
                  <span className="contact-aside-2026__channel-body">
                    <span className="contact-aside-2026__kicker">WhatsApp</span>
                    <span className="contact-aside-2026__value contact-aside-2026__value--accent">{SITE_PHONE_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li className="contact-aside-2026__row">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-aside-2026__channel"
                >
                  <span className="contact-aside-2026__icon" aria-hidden>
                    <IconFacebookGlyph />
                  </span>
                  <span className="contact-aside-2026__channel-body">
                    <span className="contact-aside-2026__kicker">Facebook</span>
                    <span className="contact-aside-2026__value contact-aside-2026__value--accent">Marrakech Alchemy</span>
                  </span>
                </a>
              </li>
              <li className="contact-aside-2026__row">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-aside-2026__channel"
                >
                  <span className="contact-aside-2026__icon" aria-hidden>
                    <IconInstagramGlyph />
                  </span>
                  <span className="contact-aside-2026__channel-body">
                    <span className="contact-aside-2026__kicker">Instagram</span>
                    <span className="contact-aside-2026__value contact-aside-2026__value--accent">
                      @marrakechalchemyyogarereats
                    </span>
                  </span>
                </a>
              </li>
              <li className="contact-aside-2026__row">
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="contact-aside-2026__channel">
                  <span className="contact-aside-2026__icon" aria-hidden>
                    <IconTikTokGlyph />
                  </span>
                  <span className="contact-aside-2026__channel-body">
                    <span className="contact-aside-2026__kicker">TikTok</span>
                    <span className="contact-aside-2026__value contact-aside-2026__value--accent">@m_a_y_r</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
