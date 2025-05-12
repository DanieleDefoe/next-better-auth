import { PostsSchema } from "@/dtos/post";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await data.json();

  const parsedPosts = await PostsSchema.safeParseAsync(json);

  if (!parsedPosts.success) {
    throw new Error("Failed to parse posts");
  }

  const { data: posts } = parsedPosts;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
