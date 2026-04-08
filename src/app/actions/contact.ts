"use server";

import { Resend } from "resend";
import { parseContactFormData } from "@/lib/contact-schema";
import { SITE_EMAIL } from "@/lib/site";

export type ContactResult =
  | { ok: true; emailSent: boolean }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const parsed = parseContactFormData(formData);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      ok: false,
      error: flat.formErrors[0] ?? "Please check the form.",
      fieldErrors: flat.fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, message } = parsed.data;
  const textBody = [
    "New contact form message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
    "",
    `Submitted (UTC): ${new Date().toISOString()}`,
  ].join("\n");

  const htmlBody = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#111">${textBody
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")}</pre>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL ?? SITE_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL ?? "MAYR Contact <onboarding@resend.dev>";

  let emailSent = false;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[MAYR Contact] ${name}`,
        text: textBody,
        html: htmlBody,
      });
      emailSent = true;
    } catch (e) {
      console.error("Resend contact error:", e);
    }
  }

  return { ok: true, emailSent };
}
