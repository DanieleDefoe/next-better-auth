import "server-only";
import { User } from "./definitions";
import sql from "@/db";
import { getUser } from "@/functions";

function canSeeUsername() {
  return true;
}

function canSeeEmail(viewer: User) {
  return viewer.id === "1";
}

export async function getProfileDTO(slug: string) {
  const data = await sql<User[]>`SELECT * FROM users WHERE id = ${slug}`;

  if (!data.length) return null;

  const user = data.at(0);

  if (!user) return null;

  const currentUser = await getUser(user.id);

  return {
    username: canSeeUsername() ? user.name : null,
    email: canSeeEmail(user) ? user.email : null,
  };
}
