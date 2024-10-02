import React from 'react';
import './Solar1.css'; // Import CSS file for styling

const Solar1 = () => {
  return (
    <div className="ac-container">
      <img 
        src="./assets/pmmproj1.jpeg" 
        alt="Energy Efficient AC" 
        className="ac-image" 
      />
      <div className="ac-content">
        <h2>Volts solar panels</h2>
        <p>
        The most common type of rooftop solar panel uses a direct current (DC) and produces a low voltage. This low voltage is typically between 20 and 40 volts, depending on the
        </p>
        <p>
        solar photovoltaic (PV) systems, the voltage output of the PV panels typically falls in the range of 12 to 24 volts.
        </p>
      </div>
    </div>
  );
}

export default Solar1;
