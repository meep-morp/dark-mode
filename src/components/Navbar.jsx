import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { useEffect } from 'react';

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkModeState, setDarkModeState, toggleMode] = useDarkMode();

  useEffect(() => {
    const body = document.querySelector("body")

    if (darkModeState) {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode");
    }

  }, [darkModeState])

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkModeState ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
