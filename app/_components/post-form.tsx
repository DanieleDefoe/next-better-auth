"use client";

import { createPost } from "@/functions";
import { useActionState } from "react";

export function PostForm() {
  const [state, formAction, pending] = useActionState(createPost, {
    error: {},
  });

  return (
    <form action={formAction}>
      <input name="title" />
      {state.error.title && <p>{state.error.title}</p>}
      <input name="content" />
      {state.error.content && <p>{state.error.content}</p>}
      <button>Create</button>
      {pending && <h1 className="text-2xl font-bold">Creating...</h1>}
    </form>
  );
}
