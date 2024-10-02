import React from 'react';
import './Ac.css'; // Import CSS file for styling

const Ac = () => {
  return (
    <div className="ac-container">
      <img 
        src="./assets/ac.jpg" 
        alt="Energy Efficient AC" 
        className="ac-image" 
      />
      <div className="ac-content">
        <h2>1.0 TR Super-Efficient 5 Star Rated Split AC</h2>
        <p>
          Our Energy Efficient Air Conditioner is designed to provide optimal cooling while 
          minimizing energy consumption. With advanced inverter technology, this AC adjusts 
          its cooling power based on the room temperature, ensuring maximum comfort and energy savings.
        </p>
        <p>
          Ideal for both residential and commercial spaces, it operates quietly and effectively 
          while maintaining the desired temperature. Enjoy a cool and refreshing environment 
          while being environmentally conscious with our energy-efficient AC solution.
        </p>
        <p className="assumptions">
          <strong>Assumptions:</strong> In comparison to old 3 star AC 2018 model (3.1 ISEER) operated for maximum days (240 days) with 8 hours usage a day.
        </p>


        <ul className="ac-features">
          <li>6.2 ISEER Rating, 19% more efficient than 5 Star</li>
          <li>Saves up to 600 units electricity annually</li>
          <li>Triple Inverter & Self-Cleaning Technology</li>
          <li>Copper Condenser coil for enhanced heat transfer</li>
          <li>Hydrophilic & Nano coating for improved durability</li>
          <li>Automatic built-in voltage stabilizer for reliability</li>
          <li>Warranty – Comprehensive 01 year for overall AC unit Onsite</li>
          <li>Additional: For PCB (1 + 4 years), For Compressor (1 + 9 years)</li>
        </ul>
      </div>
    </div>
  );
}

export default Ac;
