"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
