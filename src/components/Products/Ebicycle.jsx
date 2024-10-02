import React from 'react';
import './Ebicycle.css'; // Import CSS file for styling

const Ebicycle = () => {
  return (
    <div className="ebicycle-container">
      <img 
        src="./assets/ecycle.jpeg" 
        alt="Energy Efficient E-Bicycle" 
        className="ebicycle-image" 
      />
      <div className="ebicycle-content">
        <h2>Energy Efficient E-Bicycle</h2>
        <p>
          The Energy Efficient E-Bicycle is designed to provide a sustainable and eco-friendly 
          mode of transportation. With its advanced electric motor, this e-bicycle allows you 
          to travel longer distances with ease, while reducing your carbon footprint.
        </p>
        <p>
          Equipped with a rechargeable battery and multiple speed settings, it offers 
          a smooth and enjoyable riding experience for both urban commuting and recreational 
          adventures. Embrace a greener lifestyle with our e-bicycle, perfect for 
          environmentally conscious individuals.
        </p>
      </div>
    </div>
  );
}

export default Ebicycle;
