import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
        <h1>Mcookie</h1>
      </div>
      <ul className="Navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/onboarding">Onboarding</a></li>
        <li><a href="/herozone">Hero Zone</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
