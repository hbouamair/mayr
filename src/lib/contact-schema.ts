import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().min(10, "Please write a short message (at least 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function parseContactFormData(formData: FormData) {
  return contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
}
