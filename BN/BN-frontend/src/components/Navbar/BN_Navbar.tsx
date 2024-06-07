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

        <li className="nav-item">
            <Link to="/" className="nav-link">
            Home
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/BN_AdminCleaner" className="nav-link">
              Cleaner | Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminMenu" className="nav-link">
              Menu | Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_AdminOrder" className="nav-link">
              Order | Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/BN_SpecialAdminOrder" className="nav-link">
              Special | Admin
            </Link>
          </li>

          <li className="nav-item" onClick={toggleMenu}>
          <Link to="/BN_Main_Mobile" className="nav-link">
              Customer page
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

        </ul>
      </nav>
    </header>
  );
};
