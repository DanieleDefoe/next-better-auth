import { cookies, headers } from "next/headers";
import { connection } from "next/server";
import { Suspense } from "react";
import StaticComponent from "./static";

export const experimental_ppr = true;

function FallbackComponent() {
  return <div>Loading...</div>;
}

async function DynamicComponent({
  searchParams,
}: {
  searchParams: Promise<URLSearchParams>;
}) {
  await connection();
  const cookie = await cookies();
  const header = await headers();
  const queryParams = await searchParams;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Dynamic Component</h1>
      <p>This is a dynamic component</p>
      <p>Cookie: {cookie.get("name")?.value}</p>
      <p>Header: {header.get("x-custom-header")}</p>
      <p>Query Params: {queryParams.toString()}</p>
    </div>
  );
}

export default function PartialPreRendering({
  searchParams,
}: {
  searchParams: Promise<URLSearchParams>;
}) {
  return (
    <div>
      <StaticComponent />
      <Suspense fallback={<FallbackComponent />}>
        <DynamicComponent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
