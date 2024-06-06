import { useState } from "react";
import { Logo } from "../Icons/Logo";

import "./navbar.scss";
import { Link } from "react-router-dom";

export const BN_Navbar_Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">

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
            <Link to="/BN_Main_Mobile" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_Main_Order" className="nav-link">
              Book Service
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_Payment" className="nav-link">
              Payment
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_Cleaner" className="nav-link">
              Cleaner Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_Menu" className="nav-link">
              Restaurant Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminCleaner" className="nav-link">
              Admin
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};
