import Button from "components/button";
import Image from "next/image";
import PostsList from "./_components/PostsList";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.ok) {
    notFound();
  }

  return (
    <div>
      <header className="border-amber-200 border-2">
        <h1 className="text-2xl font-bold">Home page</h1>
        <Button
          onClick={async () => {
            "use server";

            console.log("clicked");
          }}
        >
          Click me
        </Button>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>

      <Image
        src="https://avatars.mds.yandex.net/i?id=49131a45135ac1324114ca3b250ed1f8_l-4012020-images-thumbs&n=13"
        width={900}
        height={900}
        alt="icon"
        blurDataURL="https://avatars.mds.yandex.net/i?id=49131a45135ac1324114ca3b250ed1f8_l-4012020-images-thumbs&n=13"
      />
    </div>
  );
}
