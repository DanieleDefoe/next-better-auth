import "server-only";

import { cache } from "react";
import { decrypt } from "./_lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) redirect("/login");

  return { isAuth: true, userId: session.userId };
});
