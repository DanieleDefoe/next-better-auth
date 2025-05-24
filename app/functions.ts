import "server-only";

import sql from "./db";
import type { User } from "./_lib/definitions";

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await sql<User[]>`
      SELECT * 
      FROM users 
      WHERE email = ${email}
    `;
    return user[0];
  } catch {
    throw new Error("Failed to fetch user");
  }
}
