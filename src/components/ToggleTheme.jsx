import { RiMoonLine, RiSunLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-7 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors rounded-full p-1"
    >
      {isDark ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
    </button>
  );
};

export default ToggleTheme;
