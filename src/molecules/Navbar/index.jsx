import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="company-name">Sonu Travels</div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/">Tours</a>
        <a href="/">Flights</a>
        <a href="/">Passport</a>
        <a href="/">Visa</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
