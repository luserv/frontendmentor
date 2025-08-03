'use client';

import IconSun from "./images/icon-sun.svg";
import IconMoon from "./images/icon-moon.svg";
import { useTodo } from './TodoContext';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTodo();

  return (
    <div className="relative cursor-pointer" onClick={toggleDarkMode}>
      {darkMode ? (
        <IconSun className="w-6 h-6" />
      ) : (
        <IconMoon className="w-6 h-6" />
      )}
    </div>
  );
}