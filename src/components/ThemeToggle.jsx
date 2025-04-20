import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize state from localStorage or default to false
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Update the document's class and localStorage when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;