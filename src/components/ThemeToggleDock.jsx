import React from 'react';
import './Dock.css'; // Ensure this path is correct
import { Moon, Sun } from 'react-feather'; // Import icons from react-feather
import { useTheme } from './ThemeContext'; // Corrected import path

const ThemeToggleDock = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-dock" onClick={toggleTheme}>
      {theme === 'dark' ? <Moon className="theme-icon" /> : <Sun className="theme-icon" />}
    </div>
  );
};

export default ThemeToggleDock;