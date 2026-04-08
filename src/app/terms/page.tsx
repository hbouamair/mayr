import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Booking, cancellation, rescheduling, and liability terms for Marrakech Alchemy Yoga Retreats.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto min-w-0 max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Hello"
        title="Terms & Conditions"
        description="By booking a retreat with Marrakech Alchemy Yoga Retreats, you agree to the following:"
      />

      <section className="mt-14">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">1. Booking & Payment</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            To hold your space on the retreat, we kindly ask for a $500 USD deposit, which allows us to begin preparing
            for your stay.
          </li>
          <li>
            Your spot is fully confirmed once the full payment has been received. The remaining balance can be paid via
            bank transfer within 35 days of the deposit date.
          </li>
          <li>
            To honor the special rates we offer, please note that if the balance is not received within this 35-day
            window, the discounted retreat rate will no longer apply.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">2. Cancellation Policy</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            We understand that life can be unpredictable. While the $500 deposit is non-refundable, it may be
            transferred to a future retreat date or to another guest, depending on availability.
          </li>
          <li>
            If you need to cancel your participation 45 days or more before the retreat, we’re happy to offer a 50%
            refund of the remaining balance (excluding the deposit).
          </li>
          <li>
            For cancellations made less than 45 days before the retreat, we’re unfortunately unable to issue a refund,
            as preparations will already be in full motion to welcome you.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">3. Rescheduling Policy</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            If something comes up and you’re unable to join us, we’ll do our best to accommodate you. Your deposit or
            full payment can be rescheduled once to a future retreat date (subject to availability).
          </li>
          <li>
            You also have the option to transfer your deposit or booking to another person if you are unable to attend.
          </li>
          <li>
            To support smooth planning, we ask that all rescheduling requests be submitted in writing at least 45 days
            before the start of the retreat.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">4. Travel & Health Insurance</h2>
        <p className="mt-4 text-muted">
          We strongly recommend that you obtain travel and health insurance to cover any unexpected delays,
          cancellations, illnesses, or travel disruptions.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">5. Program & Activity Adjustments</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            We do our best to honor the full retreat program as scheduled. However, in the spirit of flow and flexibility,
            we may occasionally need to adjust certain activities due to weather, local conditions, or unforeseen events.
          </li>
          <li>
            Rest assured, any changes will be made with care and intention to preserve the quality of your experience.
            These adjustments will not be considered grounds for a refund.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">6. Health & Liability</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            Your well-being is our top priority. All retreat activities are optional and designed to support you at your
            own pace.
          </li>
          <li>
            In the event of illness or an unexpected health issue, our team will be there to assist, support, and help
            you get the care you need. However, please note that any medical expenses, treatments, or medications remain
            the guest’s responsibility.
          </li>
          <li>
            To ensure we can best support your experience, we kindly ask that you inform us in advance of any physical
            conditions, allergies, or ongoing health concerns we should be aware of. All shared information will be
            treated with care and confidentiality.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-medium tracking-tight text-ink">7. COVID-19 & Force Majeure</h2>
        <ul className="mt-4 list-inside list-disc space-y-3 text-muted">
          <li>
            In the rare event of global travel restrictions, natural disasters, or other unforeseen circumstances
            beyond our control (force majeure), your retreat may need to be postponed for everyone’s safety and
            well-being.
          </li>
          <li>
            If this occurs, your booking will be automatically transferred to a future retreat date of your choice,
            within an 18-month window, based on availability.
          </li>
          <li>
            We appreciate your understanding that in these exceptional situations, refunds are not possible, as many
            costs are paid in advance. However, we remain fully committed to offering flexibility and working closely
            with you to find the best solution.
          </li>
        </ul>
      </section>
    </article>
  );
}
