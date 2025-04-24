import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  name: z.string().nonempty("Name is required"),
  message: z.string().nonempty("Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
