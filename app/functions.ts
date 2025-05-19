import "server-only";

import sql from "./db";
import type { User } from "./_lib/definitions";
import bcrypt from "bcryptjs";

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email = ${email}`;
    return user[0];
  } catch {
    throw new Error("Failed to fetch user");
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`INSERT INTO users (name, email, password) ${name}, ${email}, ${hashedPassword}`;
  } catch {
    throw new Error("Failed to create user");
  }
}
