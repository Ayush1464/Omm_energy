import React from 'react';
import './Solar4.css'; // Import CSS file for styling

const Solar4 = () => {
  return (
    <div className="fan-container">
      <img 
        src="./assets/ommproj1.jpeg" 
        alt="Energy Efficient Fan" 
        className="fan-image" 
      />
      <div className="fan-content">
        <h2>Photovoltaic Panels</h2>
        <p>
        Solar technologies convert sunlight into electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation. 
        </p>
        <p>
        This energy can be used to generate electricity or be stored in batteries or thermal storage.
        </p>
      </div>
    </div>
  );
}

export default Solar4;
