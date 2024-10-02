import React from 'react';
import './Solar5.css'; // Import CSS file for styling

const Solar5 = () => {
  return (
    <div className="induction-container">
      <img 
        src="./assets/ommproj1.jpeg" 
        alt="Energy Efficient Induction Cooker" 
        className="induction-image" 
      />
      <div className="induction-content">
        <h2>Ongrid Solar system</h2>
        <p>
        On-grid means your solar system is tied to your local utility's GRID. This is what most residential homes will use because you are covered if your solar system under or over-produces in regard to your varying energy needs. All this means for you is that your utility system acts as your battery space.
        </p>
        <p>
        These systems do not need any batteries and are connected to the utility grid power. It is best suited for customers with stable grid power and minimal power cuts.
        </p>
      </div>
    </div>
  );
}

export default Solar5;
