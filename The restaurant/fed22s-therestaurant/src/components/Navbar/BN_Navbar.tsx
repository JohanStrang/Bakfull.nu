import { useState } from "react";
import { Logo } from "../Icons/Logo";

import "./navbar.scss";
import { Link } from "react-router-dom";

export const BN_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        {/* <a href="#" className="nav-branding">
          Matkoma
        </a> */}

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item" onClick={toggleMenu}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminCleaner" className="nav-link">
              Admin Cleaner
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminMenu" className="nav-link">
              Admin Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminOrder" className="nav-link">
              Admin Order
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};
