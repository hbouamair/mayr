import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { SITE_SECTION_KICKER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Marrakech Alchemy Yoga Retreats collects, uses, and protects your personal information.",
};

const EMAIL = "Marrakech.alchemy@gmail.com";

export default function PrivacyPage() {
  return (
    <article className="mx-auto min-w-0 max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow={SITE_SECTION_KICKER}
        title="Privacy Policy"
        description="At Marrakech Alchemy Yoga Retreats, your privacy and trust are important to us. This policy outlines how we collect, use, and protect your personal information when you visit our website, communicate with us, or book a retreat."
        descriptionClassName="max-w-none"
      />

      <section className="mt-14">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">1. What We Collect</h2>
        <p className="mt-4 text-muted">When you interact with our website or book a retreat, we may collect:</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
          <li>Your name, email address, and phone number</li>
          <li>Payment and billing information</li>
          <li>Travel details (such as arrival times or dietary preferences)</li>
          <li>Health information you voluntarily share to help us support your experience</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">2. How We Use Your Information</h2>
        <p className="mt-4 text-muted">We use your personal information to:</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
          <li>Confirm your booking and communicate important retreat information</li>
          <li>Process payments securely</li>
          <li>Tailor your retreat experience (e.g., room preference, food needs, wellness considerations)</li>
          <li>Send you updates, newsletters, or special offers (you can unsubscribe at any time)</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">3. How We Protect Your Data</h2>
        <p className="mt-4 text-muted">
          We take your privacy seriously. Your data is stored securely and only accessed by trusted members of our team.
          We do not sell, trade, or share your personal information with third parties, except when necessary to complete
          your booking (e.g., accommodation partners).
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">4. Your Rights</h2>
        <p className="mt-4 text-muted">You have the right to:</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
          <li>Access the personal data we hold about you</li>
          <li>Request corrections or updates to your information</li>
          <li>Ask us to delete your data from our records</li>
        </ul>
        <p className="mt-4 text-muted">
          To make a request, simply email us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-terracotta-glow underline decoration-terracotta/30 underline-offset-[5px] transition-colors hover:text-terracotta-deep"
          >
            {EMAIL}
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">5. Cookies & Website Use</h2>
        <p className="mt-4 text-muted">
          Our website may use cookies to enhance your browsing experience. These are small text files that help us
          understand how our website is being used so we can improve it. You can disable cookies in your browser
          settings at any time.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">6. Updates to This Policy</h2>
        <p className="mt-4 text-muted">
          We may update this policy from time to time to reflect changes in how we operate or legal requirements. All
          updates will be posted on this page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">7. Contact Us</h2>
        <p className="mt-4 text-muted">
          If you have any questions or concerns about how we handle your information, please don’t hesitate to contact
          us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-terracotta-glow underline decoration-terracotta/30 underline-offset-[5px] transition-colors hover:text-terracotta-deep"
          >
            {EMAIL}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
