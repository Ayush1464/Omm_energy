import React from 'react';
import './Induction.css'; // Import CSS file for styling

const Induction = () => {
  return (
    <div className="induction-container">
      <img 
        src="./assets/induction.jpeg" 
        alt="Energy Efficient Induction Cooker" 
        className="induction-image" 
      />
      <div className="induction-content">
        <h2>1200W Induction Cooktop</h2>
        
        
        <p className="assumptions">
          <strong>Assumptions:</strong>Family of 04 persons, with 08 nos. LPG refilling at cost of INR 899 each annually gets replaced by Induction cooktop with Annual cost of INR 5352 (i.e. Family of 04, per day cooking on 1200 W IC for 1.88 hours, Average Electricity tariff of 6.5, Annual cost = [1.88 hrs per day * 365 days*(1200/1000) kW]
        </p>
        <ul className="induction-features">
          <li>Promoted under National Efficient Cooking Program (NECP)</li>
          <li>Power Consumption Display</li>
          <li>Pre-set cooking function, Child Lock</li>
          <li>Portable & Light weight</li>
          <li>Environmental Benefits: Cleaner fuel</li>
          <li>Warranty – 02 years onsite</li>
        </ul>
      </div>
    </div>
  );
}

export default Induction;
