import React from 'react';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        <h1>Disc Manager</h1>
      </div>
    </nav>
  );
};

export default NavBar;