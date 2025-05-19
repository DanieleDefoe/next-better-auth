"use client";

import { authenticate } from "@/actions";
import Form from "next/form";
import Link from "next/link";
import { useActionState } from "react";

export default function SigninForm() {
  const [state, formAction, pending] = useActionState(authenticate, undefined);

  return (
    <Form action={formAction}>
      {state?.error && <p className="text-red-500">{state.error}</p>}

      <fieldset>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </fieldset>

      <button type="submit" disabled={pending}>
        {pending ? "Signing in..." : "Sign in"}
      </button>

      <p>
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </Form>
  );
}
