import React from 'react';
import './Bulb.css'; // Import CSS file for styling

const Bulb = () => {
  return (
    <div className="bulb-container">
      <img 
        src="./assets/bulb.jpg" 
        alt="Energy Efficient Bulb" 
        className="bulb-image" 
      />
      <div className="bulb-content">
        <h2>6W LED BULB (5 Star Rated)</h2>
        <p className="assumptions">
          <strong>Assumptions:</strong> comparison in respect of 15 W CFL bulb assuming same lumens, usage – 8 hours/day
        </p>
        

        <ul className="bulb-features">
          <li> 150 Lumens/Watt luminous efficacy</li>
          <li> 900 lumens in just 6 watts (≈ equivalent to 9W or 10W general LED)</li>
          <li> Reduced Carbon emissions – Electricity Savings</li>
          <li> Quality Product, Reliable Customer Support</li>
          <li> Warranty – 01 year</li>
          <li> Annual Energy Savings up to 26 kWh</li>
          <li> Annual Monetary savings up to INR 160</li>
          <li> Payback period ≈ 06 months</li>
        </ul>
      </div>
    </div>
  );
}

export default Bulb;
