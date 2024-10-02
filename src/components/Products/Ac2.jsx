import React from 'react';
import './Ac2.css'; // Import CSS file for styling

const Ac2 = () => {
  return (
    <div className="ac2-container">
      <img 
        src="./assets/ac.jpg" // Make sure to update the image path
        alt="1.5 TR Super-Efficient 5 Star Rated Split AC" 
        className="ac2-image" 
      />
      <div className="ac2-content">
        <h2>1.5 TR Super-Efficient 5 Star Rated Split AC</h2>
       
        <ul className="ac2-features">
          <li>5.8 ISEER Rating, 14% more efficient than 5 Star</li>
          <li>Saves up to 640 units of electricity annually</li>
          <li>Triple Inverter & Self-Cleaning Technology</li>
          <li>Copper Condenser coil for enhanced heat transfer</li>
          <li>Hydrophilic & Nano coating for improved durability</li>
          <li>Automatic built-in voltage stabilizer for reliability</li>
          <li>Warranty – Comprehensive 01 year for overall AC unit Onsite</li>
          <li>Additional: For PCB (1 + 4 years), For Compressor (1 + 9 years)</li>
          <li>Annual Energy Savings up to 1050 kWh (up to INR 6300) compared to conventional 3 star AC</li>
        </ul>
      </div>
    </div>
  );
}

export default Ac2;
