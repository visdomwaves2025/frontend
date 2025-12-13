import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // reuse existing navbar styles

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="pro-navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link className="nav-logo" to="/home">
          Visdom Waves
        </Link>

        {/* Mobile Toggle */}
        <div className="menu-wrapper">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li><Link to="/parent">Parents</Link></li>
          <li><Link to="/patent">Patents</Link></li>
          <li><Link to="/student">Students</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* Account Dropdown */}
          <li className={`nav-auth dropdown-auth ${dropdownOpen ? "open" : ""}`}>
            <span className="auth-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Account <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>▾</span>
            </span>

            <div className="auth-dropdown">
              <Link to="/loginpage" onClick={() => setDropdownOpen(false)}>Login</Link>
              <Link to="/signuppage" onClick={() => setDropdownOpen(false)}>Sign Up</Link>
            </div>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
