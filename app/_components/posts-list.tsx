"use client";

import { Posts } from "@/_dtos/post";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function PostsList() {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<Posts>("https://jsonplaceholder.typicode.com/posts", fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error || !posts) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
