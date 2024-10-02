import React from 'react';
import './Brands.css'; // Add custom CSS for styling

const Brands = () => {
  return (
    <div className="brands-section">
      <h2 className="brands-heading">Our Partnered Brands</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          <img src="./assets/brand1.png" alt="Brand 1" />
          <img src="./assets/brand2.png" alt="Brand 2" />
          <img src="./assets/brand3.jpg" alt="Brand 3" />
          <img src="./assets/brand4.png" alt="Brand 4" />
          <img src="./assets/brand5.png" alt="Brand 5" />
          <img src="./assets/brand6.jpg" alt="Brand 6" />
          <img src="./assets/brand7.png" alt="Brand 7" />
          <img src="./assets/brand8.png" alt="Brand 8" />
          <img src="./assets/brand9.png" alt="Brand 9" />
          <img src="./assets/brand10.png" alt="Brand 10" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
