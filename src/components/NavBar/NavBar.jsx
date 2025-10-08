import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/image.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
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
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
