import React, { useState} from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="company-name">Sonu Travels</div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/">Tours</a>
        <a href="/">Flights</a>
        <a href="/">Passport</a>
        <a href="/">Visa</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span>&#9776;</span> 
      </div>
    </div>
  );
};

export default Navbar;
