import { PostForm } from "@/_components/post-form";
import UsersList from "@/_components/users-list";
import { UsersSchema } from "@/_dtos/user";
import Link from "next/link";
import { Suspense } from "react";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const parsedUsers = await UsersSchema.safeParseAsync(data);

  if (!parsedUsers.success) {
    throw new Error("Failed to parse users");
  }

  return parsedUsers.data;
};

export default function Blog() {
  const usersPromise = getUsers();

  return (
    <div>
      <h2>Blog</h2>
      <Link href="/blog/my-first-blog-post">blog 1</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>

      <PostForm />
    </div>
  );
}
