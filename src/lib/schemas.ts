import { z } from "zod";

export const detailsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50),
  bio: z.string().max(150, "Bio cannot exceed 150 characters").optional(),
  phone: z.string().regex(/^\+?[0-9 ]{10,17}$/, "Invalid phone format").optional().or(z.literal("")),
});

export const usernameSchema = z.object({
  userName: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(30)
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, _, and - allowed"),
});

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[0-9]/, "Must contain a number"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type DetailsFormValues = z.infer<typeof detailsSchema>;
export type UsernameFormValues = z.infer<typeof usernameSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;