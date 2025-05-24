"use client";

import { register } from "@/actions";
import Form from "next/form";
import Link from "next/link";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(register, undefined);

  return (
    <Form action={formAction}>
      {state?.error && <p className="text-red-500">{state.error}</p>}

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
              <li key={error}>
                <p className="text-red-500">- {error}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button disabled={pending} type="submit">
        Sign up
      </button>

      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </Form>
  );
}
