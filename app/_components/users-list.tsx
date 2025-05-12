"use client";

import { Users } from "@/dtos/user";

import { use } from "react";

interface UsersListProps {
  usersPromise: Promise<Users>;
}

export default function UsersList({ usersPromise }: UsersListProps) {
  const users = use(usersPromise);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
