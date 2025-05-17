import { Dispatch } from "react";

import { SetStateAction } from "react";

interface Props {
  isLiked: boolean;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
}

export default function LikeButton({ isLiked, setIsLiked }: Props) {
  return (
    <button
      onClick={() => {
        setIsLiked((prev) => !prev);
      }}
    >
      {isLiked ? "Unlike" : "Like"}
    </button>
  );
}
