"use server";

import { signIn } from "auth";
import { FormState, SignupFormSchema } from "./_lib/definitions";
import { AuthError, User } from "next-auth";
import { redirect } from "next/navigation";
import sql from "./db";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "./_lib/session";

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const [user] = await sql<User[]>`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING *
    `;

    await createSession(user.id!);

    redirect("/dashboard");
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

export async function logout() {
  await deleteSession();
  redirect("/login");
}
