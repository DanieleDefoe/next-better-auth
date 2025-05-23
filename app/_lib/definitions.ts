import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    })
    .trim(),
});

export const SigninFormSchema = z.object({
  email: SignupFormSchema.shape.email,
  password: SignupFormSchema.shape.password,
});
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export interface SessionPayload {
  userId: string;
  expiresAt: Date;
}
