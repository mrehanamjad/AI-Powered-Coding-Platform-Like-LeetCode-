import { z } from "zod";

const registerationSchema = z
  .object({
    name: z
      .string()
      .min(4, "Name must be at least 4 characters")
      .max(40, "Name must be at most 40 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterationType = z.infer<typeof registerationSchema>;
export default registerationSchema;
