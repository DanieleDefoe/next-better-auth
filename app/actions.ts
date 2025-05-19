"use server";

import { signIn } from "auth";
import { FormState, SignupFormSchema } from "./_lib/definitions";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { createUser } from "./functions";

export async function register(state: FormState, formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const validatedFields = await SignupFormSchema.safeParseAsync(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    await createUser(name, email, password);
    redirect("/login");
  } catch {
    return {
      error: "Failed to create user",
    };
  }
}

export async function authenticate(
  state: { error?: string } | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
    redirect("/dashboard");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials.",
          };
        default:
          return {
            error: "Something went wrong.",
          };
      }
    }
  }
}
