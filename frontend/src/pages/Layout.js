import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Import the CSS file

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/email" className="nav-link">
              E-mail
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sms" className="nav-link">
              SMS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/call" className="nav-link">
              Phone Call
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
