import React from 'react';

const Navbar = ({darkModeState, toggleMode}) => {

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={(event) => {window.location.assign("/")}}>Crypto Tracker</h1>
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
