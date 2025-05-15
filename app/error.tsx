"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: VoidFunction;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.dir(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-red-500">{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
