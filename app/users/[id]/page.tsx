import { UserSchema } from "@/dtos/user";
import { getUsers } from "@/functions";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const user = await getUsers(id);
  const parsedUser = await UserSchema.safeParseAsync(user);

  return {
    title: parsedUser.data?.name,
  };
}

export default async function UserPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const user = await getUsers(id);
  const parsedUser = await UserSchema.safeParseAsync(user);

  return <div>{parsedUser.data?.name}</div>;
}
