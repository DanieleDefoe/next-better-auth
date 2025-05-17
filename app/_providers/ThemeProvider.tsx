"use client";

import { createContext, PropsWithChildren, useState } from "react";

const ThemeContext = createContext<"light" | "dark">("light");

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return <ThemeContext value={theme}>{children}</ThemeContext>;
}
