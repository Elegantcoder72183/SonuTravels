import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="company-name">Sonu Travels</div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/tours">Tours</a>
        <a href="/flights">Flights</a>
        <a href="/passport">Passport</a>
        <a href="/visa">Visa</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </div>
  );
};

export default Navbar;
