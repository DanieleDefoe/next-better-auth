import PostsList from "@/_components/posts-list";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): Array<BlogPostProps["params"]> {
  return [
    {
      slug: "my-first-blog-post",
    },
    {
      slug: "my-second-blog-post",
    },
    {
      slug: "my-third-blog-post",
    },
  ];
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  return (
    <div>
      BlogPost {slug} <PostsList />
    </div>
  );
}
