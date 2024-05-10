import React from 'react';
import './Header.css';
import Navbar from '../../molecules/Navbar';

const Header = () => {
  return (
    <>
    <Navbar />
    <div className="header-container">
      <video autoPlay loop muted className="header-video">
        <source src="/images/header-video.mp4" type="video/mp4" />
      </video>
    </div>
    </>
  );
};

export default Header;
