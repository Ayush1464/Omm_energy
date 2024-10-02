import React from 'react';
import "./Services.css"
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Services = () => {
  return (
    <div className="services-container">
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Services
  </span>
</h1>

      <div className="services-grid">
        {/* Solar Services Card */}
        <div className="service-card">
          <h2>Solar Services</h2>
          <p>
            Explore our comprehensive solar services, including residential installations and large-scale solar projects.
          </p>
          <Link to="/Solar" className="service-link">
            Learn More
          </Link>
        </div>

        {/* Energy-Efficient Products Card */}
        <div className="service-card">
          <h2>Energy-Efficient Products</h2>
          <p>
            Discover our range of energy-efficient products designed to reduce consumption and save costs.
          </p>
          <Link to="/Product" className="service-link">
            Learn More
          </Link>
        </div>

        {/* Bio Gas Card */}
        <div className="service-card">
          <h2>Bio Gas</h2>
          <p>
            Learn about our bio gas solutions that convert organic waste into clean, renewable energy.
          </p>
          <Link to="/Biogas" className="service-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
