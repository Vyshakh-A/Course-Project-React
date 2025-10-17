import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/image.png";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/resources" className="nav-link">
              Resources
            </Link>
          </li>
        </ul>
      </div>
      <div className="loginbtn">
        {auth && auth.user ? (
          <button onClick={handleLogout} className="nav-cta">
            Logout
          </button>
        ) : (
          <button onClick={handleLoginClick} className="nav-cta">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
