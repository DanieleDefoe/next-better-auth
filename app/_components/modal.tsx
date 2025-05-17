"use client";
import "client-only";

import { PropsWithChildren, useEffect, useState } from "react";

export default function Modal({ children }: PropsWithChildren) {
  const [state] = useState(window.localStorage.getItem("state"));

  useEffect(() => {
    window.localStorage.setItem("state", state ?? "");
  }, [state]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        <h1>Modal</h1>
      </div>
      {children}
    </div>
  );
}
