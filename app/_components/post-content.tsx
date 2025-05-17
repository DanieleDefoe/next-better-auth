"use client";

import { Post } from "@/_dtos/post";
import LikeButton from "./like-button";
import { use, useState } from "react";

interface Props {
  postPromise: Promise<Post>;
}

export default function PostContent({ postPromise }: Props) {
  const post = use(postPromise);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.body}</p>

      <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
    </div>
  );
}
