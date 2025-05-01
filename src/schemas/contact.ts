import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  message: z.string().nonempty('Message is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
