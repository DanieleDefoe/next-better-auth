import PostsList from "@/_components/posts-list";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  return (
    <div>
      BlogPost {slug} <PostsList />
    </div>
  );
}
