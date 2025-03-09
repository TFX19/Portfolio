"use client";

import { useEffect, useState } from "react";

const themes = ["light", "dark", "dracula", "cupcake"]; 

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "cupcake";
    }
    return "cupcake";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        🌗 Theme
      </div>
      <ul className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-40 z-50">
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => setTheme(t)}>{t}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
