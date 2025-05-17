import LikeButton from "@/_components/like-button";
import PostContent from "@/_components/post-content";
import { getPost } from "@/functions";
import type { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.body.split(" ").slice(0, 10).join(" "),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const postPromise = getPost(slug);

  return (
    <div>
      <h1 className="text-2xl font-bold">Post content</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostContent postPromise={postPromise} />
      </Suspense>
    </div>
  );
}
