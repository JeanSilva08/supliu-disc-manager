import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        <h1>Discografia</h1>
      </div>
    </nav>
  );
};

export default NavBar;