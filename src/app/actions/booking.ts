"use server";

import { Resend } from "resend";
import {
  buildBookingEmailHtml,
  buildBookingEmailSubject,
  buildBookingEmailText,
  buildBookingWhatsAppMessage,
} from "@/lib/booking-templates";
import { parseBookingFormData } from "@/lib/booking-schema";
import { SITE_EMAIL } from "@/lib/site";

export type BookingResult =
  | { ok: true; emailSent: boolean; whatsappMessage: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitBooking(formData: FormData): Promise<BookingResult> {
  const parsed = parseBookingFormData(formData);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      ok: false,
      error: flat.formErrors[0] ?? "Please check the form.",
      fieldErrors: flat.fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data;
  const submittedAt = new Date().toISOString();
  const whatsappMessage = buildBookingWhatsAppMessage(data);
  const textBody = buildBookingEmailText(data, submittedAt);
  const htmlBody = buildBookingEmailHtml(data, submittedAt);
  const subject = buildBookingEmailSubject(data);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL ?? SITE_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL ?? "MAYR Bookings <onboarding@resend.dev>";

  let emailSent = false;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: data.email,
        subject,
        text: textBody,
        html: htmlBody,
      });
      emailSent = true;
    } catch (e) {
      console.error("Resend error:", e);
    }
  }

  return { ok: true, emailSent, whatsappMessage };
}
