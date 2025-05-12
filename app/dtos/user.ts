import { z } from "zod";

export const UsersSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    website: z.string(),
  }),
);

export type Users = z.infer<typeof UsersSchema>;
export type User = Users[number];
