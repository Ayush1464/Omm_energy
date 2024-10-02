import React from 'react';
import './Solar3.css'; // Import CSS file for styling

const Solar3 = () => {
  return (
    <div className="ebicycle-container">
      <img 
        src="./assets/ommproj1.jpeg" 
        alt="Energy Efficient E-Bicycle" 
        className="ebicycle-image" 
      />
      <div className="ebicycle-content">
        <h2>Roof top solar power system</h2>
        <p>
        A roof top solar power system, also known as a rooftop PV system, is a photovoltaic (PV) system with solar panels that generate electricity and are mounted on the roof of buildings, civil or commercial structures.
        </p>
        <p>
        When sunlight hits the photovoltaic (PV) tiles in your Solar Roof, it is absorbed by solar cells, creating a flow of electric current. This direct current (DC) energy is then sent to your solar inverter, which converts it to the alternating current (AC) energy that can power your home.
        </p>
      </div>
    </div>
  );
}

export default Solar3;
