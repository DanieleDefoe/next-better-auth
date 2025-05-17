import PartialPreRendering from "./_components/partial-pre-rendering";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<URLSearchParams>;
}) {
  return (
    <div>
      <PartialPreRendering searchParams={searchParams} />
    </div>
  );
}
