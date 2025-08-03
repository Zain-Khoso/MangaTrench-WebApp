'use client';

// Lib Imports.
import { useState, useEffect } from 'react';

// Assets.
import { MdSunny } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';

// This component is used throughout the app to toggle between dark and light mode.
export default function ThemeToggler() {
  const [dark, setDark] = useState(false);

  const handleClick = function () {
    setDark((value) => {
      const newValue = !value;

      localStorage.setItem('isDark', JSON.stringify(newValue));
      document.body.classList.toggle('dark', newValue);

      return newValue;
    });
  };

  useEffect(() => {
    if (!window.localStorage) return;

    const darkModeString = localStorage.getItem('isDark');

    if (!darkModeString) return;

    const darkMode = JSON.parse(darkModeString);

    setDark(darkMode);

    document.body.classList.toggle('dark', darkMode);
  }, []);

  return dark ? (
    <MdSunny size={24} className="cursor-pointer fill-white stroke-white" onClick={handleClick} />
  ) : (
    <LuMoon size={24} className="cursor-pointer fill-white stroke-white" onClick={handleClick} />
  );
}
