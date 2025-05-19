import { signup } from "@/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(signup, undefined);

  return (
    <Form action={formAction}>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </fieldset>
      {state?.errors?.name && (
        <p className="text-red-500">{state.errors.name.join(", ")}</p>
      )}

      <fieldset>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </fieldset>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email.join(", ")}</p>
      )}

      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </fieldset>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password?.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}

      <button disabled={pending}>Sign up</button>
    </Form>
  );
}
