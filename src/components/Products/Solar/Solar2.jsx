import React from 'react';
import './Solar2.css'; // Import CSS file for styling

const Solar2 = () => {
  return (
    <div className="bulb-container">
      <img 
        src="./assets/ommproj1.jpeg" 
        alt="Energy Efficient Bulb" 
        className="bulb-image" 
      />
      <div className="bulb-content">
        <h2>Solar Street Light</h2>
        <p>
        This light generates energy and stores it in a high quality battery that delivers light using LUMILEDS LEDs.
        </p>
        <p>
        The Zorro Unplugged is an ALL-IN-ONE luminaire design that has an integrated solar panel, LED array, microwave sensor and battery all within one standalone system.
        </p>
      </div>
    </div>
  );
}

export default Solar2;
