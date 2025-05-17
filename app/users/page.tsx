import Carousel from "@/_components/gallery";
import { UsersSchema } from "@/_dtos/user";

import { getUsers } from "@/functions";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();
  const parsedUsers = await UsersSchema.safeParseAsync(users);

  return (
    <ul>
      {parsedUsers.data?.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}

      <Carousel />
    </ul>
  );
}
