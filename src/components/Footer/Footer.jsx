import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };
  return (
    <>
    
    <div className="main_footer">
        <div className="footer1">
            <img src="/assets/om.png" alt="" />
            <p><b>OMM Energy Solutions</b> provides sustainable energy solutions, specializing in solar system design, procurement, installation, and maintenance.</p>
            <div className='social-icons'>
              <i className='bx bxl-instagram'></i>
              <i className='bx bxl-facebook-circle'></i>
              <i className='bx bxl-linkedin'></i>
            </div>
        </div> 
        <div className="footer2">
            <h2>Address</h2>
            <p>Shop No. - 40 , Barabhuja Complex  <br /> Khandagiri, 751030</p>

            <br />
            
            <p>0674-20170207</p>
            <br />
            abc@gmail.com
        </div>   
        <div className="footer3">
            <h2>Top Menu</h2>
            <div className="topmenu"> 
            <p>Home</p>
            <p>About</p>
            <p>Products & Services</p>
            <p>Projects</p>
            <p>Contacts</p>
            <p>Gallery</p>
            <p>FAQS</p>

            </div>
            
        </div>  
        

        

        
    </div>
    <div className="lowerfooter">
    <p>&copy; {new Date().getFullYear()} OMM Energy Solutions. All rights reserved.</p>
    <div className="top">
      <img
        src={'/assets/up.png'}
        alt="Scroll to top"
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }} // Optional: change cursor to pointer
      />
    </div>
    </div>

    

    </>
  );
};

export default Footer;
