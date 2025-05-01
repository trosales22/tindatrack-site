import { STORE_TYPES } from 'utils/businessData';
import { z } from 'zod';

export const businessSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  firstname: z.string().nonempty('First name is required'),
  lastname: z.string().nonempty('Last name is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters'),
  name: z.string().nonempty('Business Name is required'),
  type: z.enum([
    STORE_TYPES.RETAIL,
    STORE_TYPES.FOOD_STALL,
    STORE_TYPES.EATERY,
    STORE_TYPES.GROCERY,
    STORE_TYPES.KIOSK,
    STORE_TYPES.MARKET_VENDOR,
    STORE_TYPES.OTHER,
  ]),
});

export type BusinessFormData = z.infer<typeof businessSchema>;
