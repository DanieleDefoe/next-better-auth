import { FormState, SignupFormSchema } from "./_lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const validatedFields = await SignupFormSchema.safeParseAsync(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
