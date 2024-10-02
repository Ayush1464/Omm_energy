import React from 'react';
import './Fan.css'; // Import CSS file for styling

const Fan = () => {
  return (
    <div className="fan-container">
      <img 
        src="./assets/fan.jpg" 
        alt="Energy Efficient Fan" 
        className="fan-image" 
      />
      <div className="fan-content">
        <h2>5 Star BLDC Ceiling Fan (With Remote)</h2>
        

        <p className="assumptions">
          <strong>Assumptions:</strong> In comparison to Conventional Fan (70 W) operated for maximum days (300 days) with 15 hours usage a day
        </p>

        <ul className="fan-features">
          <li>Power Consumption ≈ 28-30 Watt</li>
          <li>Over and Under Voltage protection</li>
          <li>Airflow ≥ 220 CMM</li>
          <li>Better Specification & Market Price</li>
          <li>Best Quality Assurance, Highly Energy Efficient</li>
          <li>Long Lasting, Reliable Customer Support</li>
          <li>Warranty – 03 years Onsite</li>
          <li>Annual Energy Savings up to 211 kWh</li>
          <li>Annual Monetary savings up to INR 1269</li>
          <li>Payback period ≈ 26 months</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Fan;
