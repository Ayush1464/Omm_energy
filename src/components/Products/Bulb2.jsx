import React from 'react';
import './Bulb2.css'; // Import CSS file for styling (if needed)

const Bulb2 = () => {
  return (
    <div className="bulb2-container">
      
      <img 
        src="./assets/bulb2.jpg" 
        alt="Emergency LED Bulb" 
        className="bulb2-image" 
      />
      <div className="bulb2-content">
      <h2>Emergency LED Bulb - 10 Watt</h2>
        

        <ul className="bulb2-features">
          <li>10-Watt LED Bulb with 1050 Lumens</li>
          <li>Rechargeable battery up to 4-hour battery backup</li>
          <li>Emergency functionality</li>
          <li>Warranty – 01 Year</li>
        </ul>
      </div>
    </div>
  );
}

export default Bulb2;
