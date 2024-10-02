import React from 'react';
import './Tube.css'; // Import CSS file for styling

const Tube = () => {
  return (
    <div className="tube-container">
      <img 
        src="./assets/tube.jpg" 
        alt="Energy Efficient Tube Light" 
        className="tube-image" 
      />
      <div className="tube-content">
        <h2>Energy Efficient Tube Light</h2>
        

        <p className="assumptions">
          <strong>Assumptions:</strong> Comparison is made with respect to 40 T5 Fluorescent tube lights, 
          used for 8 hours per day.
        </p>

        <ul className="tube-features">
          <li>20-Watt Integrated Batten Tube light</li>
          <li>2200 lumen output</li>
          <li>~10% brighter than conventional LED</li>
          <li>20 W Power consumption, Highly Energy Efficient</li>
          <li>4 kV surge protection and high voltage safeguards</li>
          <li>Reduced Carbon emissions - Electricity Savings</li>
          <li>Quality Product, Reliable Customer Support</li>
          <li>Warranty – 01 year</li>
          <li>Annual Energy Savings up to 58 kWh</li>
          <li>Annual Monetary savings up to INR 350</li>
          <li>Payback period ≈ 06 months</li>
        </ul>
      </div>
    </div>
  );
}

export default Tube;
