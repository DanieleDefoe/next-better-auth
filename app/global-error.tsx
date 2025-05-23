"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: VoidFunction;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
