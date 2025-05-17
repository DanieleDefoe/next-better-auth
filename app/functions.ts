"use server";
import "server-only";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { UserSchema, UsersSchema } from "./_dtos/user";
import { cache } from "react";
import { PostSchema, PostsSchema } from "./_dtos/post";

const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export async function createPost(_: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const values = Object.fromEntries(formData.entries());

  const { data, error } = await CreatePostSchema.safeParseAsync(values);

  if (error) {
    return { error: error.flatten().fieldErrors };
  }

  console.log(data);

  // await sql`INSERT INTO posts (title, content) VALUES ${data.title}, ${data.content}`
  revalidatePath("/");
  redirect("/");
}

export const getUsers = cache(async (id?: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`,
  );

  const data = await response.json();

  const parsedUsers = await UsersSchema.safeParseAsync(data);
  const parsedUser = await UserSchema.safeParseAsync(data);

  if (parsedUser.success) {
    return parsedUser.data;
  }

  if (parsedUsers.success) {
    return parsedUsers.data;
  }

  throw new Error("Failed to parse users");
});

export const getPost = cache(async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const data = await response.json();

  const parsedPost = await PostSchema.safeParseAsync(data);

  if (parsedPost.success) {
    return parsedPost.data;
  }

  throw new Error("Failed to parse post");
});
