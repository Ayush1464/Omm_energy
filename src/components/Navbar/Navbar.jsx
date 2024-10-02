import React, { useState } from "react";
import "./Navbar.css"; // Ensure the path is correct
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="nav-upper">
        <div className="nav-upper-right">
          {/* Social Media Links */}
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-whatsapp'></i></a>
          <div className="indiamart"> 
            <a href="https://www.indiamart.com/omm-energy-solutions/profile.html" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
              <p> We are also available at Indiamart</p>
            </a>
          </div>
        </div>
      </div>
      
      <div className="nav_middle">
        <div className="logo_ham">
        <div className="nav_logo">
          <img src={'./assets/om.png'} alt="Logo" />
          <h1>Omm Energy <br /> Solutions</h1>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </div>
       
        <div className="nav_content">
          {/* Information Sections */}
          <div className="nav_info">
            <i className='bx bxs-location-plus'></i>
            <div className="info-text">
              <h4>Address</h4>
              <p className="address">Shop No. - 40 <br /> Barabhuja complex, Khandagiri <br /> Pin-751030</p>
            </div>
          </div>
          <div className="nav_info">
            <i className='bx bxs-time-five'></i>
            <div className="info-text">
              <h4>Timing</h4>
              <p>Mon-Fri: 9 AM - 6 PM<br />Sat: 10 AM - 4 PM <br /> Sunday closed</p>
            </div>
          </div>
          <div className="nav_info">
            <i className='bx bxs-phone'></i>
            <div className="info-text">
              <h4>Call</h4>
              <p>0674-20170207</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li className="dropdown">
            <Link to="/Services" className="dropdown-toggle">
              Products & Services <i className='bx bxs-down-arrow'></i>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/Solar">Solar</Link></li>
              <li><Link to="/Product">Energy Efficient products</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/Complete" className="dropdown-toggle">
              Projects <i className='bx bxs-down-arrow'></i>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/Ongoing">Ongoing Projects</Link></li>
              <li><Link to="/Completed_projects">Completed Projects</Link></li>
            </ul>
          </li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/ImageGallery">Gallery</Link></li>
          <li><Link to="/Faq">FAQ</Link></li>
        </ul>
      </div>

      <marquee behavior="scroll" direction="left" className="marquee-text">
        Welcome to OMM Energy Solutions
      </marquee>
    </nav>
  );
};

export default Navbar;
