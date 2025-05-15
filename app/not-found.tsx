import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <Link href="/blog">Go to home</Link>
    </div>
  );
}
