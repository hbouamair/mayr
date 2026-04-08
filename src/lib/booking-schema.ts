import { z } from "zod";
import { isValidOfferId } from "./offers";

export const bookingFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().optional(),
  offerId: z
    .string()
    .min(1, "Please select an offer.")
    .refine((id) => isValidOfferId(id), "Please select a valid offer."),
  message: z.string().trim().optional(),
  acceptedTerms: z.boolean().refine((v) => v === true, {
    message: "Please confirm you have read and agree to the Terms & Conditions.",
  }),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function parseBookingFormData(formData: FormData) {
  const accepted = formData.get("acceptedTerms");
  return bookingFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    offerId: formData.get("offerId"),
    message: formData.get("message") || undefined,
    acceptedTerms: accepted === "on" || accepted === "true",
  });
}
