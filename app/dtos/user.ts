import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
});

export const UsersSchema = z.array(UserSchema);

export type Users = z.infer<typeof UsersSchema>;
export type User = z.infer<typeof UserSchema>;
