import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/itoshie_logo.png";

const Header = () => {
  return (
    <header className="header">
      {/* Left Logo */}
      <div className="logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>

      </div>

      {/* Center Menu */}
      <nav className="nav">
        <Link to="/">PRODUCTS</Link>
        <Link to="/">ABOUT US</Link>
      </nav>
    </header>
  );
};

export default Header;