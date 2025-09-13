"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Carrega se usuário já tem preferência salva no localStorage
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="px-4 py-2 rounded border"
    >
      {dark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}