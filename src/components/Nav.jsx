import React from 'react';
import './Nav.css';
import logo from '../images/logo.svg';
import navbar from '../images/menu.svg';

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="" />
            <p>Pet Care</p>
        </div>
        <div className='nav-bar' id='nav-bar'>
          <img src={navbar} alt="" />
        </div>
        <div className="nav-menu" id='nav-menu'>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#footer">Contact</a>
        </div>
    </div>
  )


}

export default Nav