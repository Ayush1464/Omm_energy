import React from 'react';
import './Fan2.css'; // Import CSS file for styling

const Fan2 = () => {
  return (
    <div className="fan2-container">
      <img 
        src="./assets/fan2.jpg" // Make sure to update the image path
        alt="5 Star BLDC Ceiling Fan" 
        className="fan2-image" 
      />
      <div className="fan2-content">
        <h2>5 Star BLDC Ceiling Fan (Without Remote)</h2>
        
        <ul className="fan2-features">
          <li>Power Consumption ≈ 28-30 Watt</li>
          <li>Over and Under Voltage Protection</li>
          <li>Airflow ≥ 220 CMM</li>
          <li>Better Specification & Market Price</li>
          <li>Best Quality Assurance</li>
          <li>High Energy Efficient</li>
          <li>Long Lasting, Reliable Customer Support</li>
          <li>Warranty – 03 years Onsite</li>
          <li>Annual Energy Savings up to 211 kWh</li>
          <li>Annual Monetary Savings up to INR 1269</li>
          <li>Payback period ≈ 26 months</li>
        </ul>
      </div>
    </div>
  );
}

export default Fan2;
