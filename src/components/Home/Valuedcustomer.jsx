import React from 'react';
import './Valuedcustomer.css'; // Add custom CSS for styling

const Valuedcustomer = () => {
  return (
    <div className="valued-customer-section">
      <h2 className="valued-customer-heading">Our Key Customers</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          <img src="./assets/customer1.jpg" alt="Customer 1" />
          <img src="./assets/customer2.png" alt="Customer 2" />
          <img src="./assets/customer3.png" alt="Customer 3" />
          <img src="./assets/customer4.jpg" alt="Customer 4" />
          <img src="./assets/customer5.png" alt="Customer 5" />
          <img src="./assets/customer6.png" alt="Customer 6" />
          <img src="./assets/customer7.png" alt="Customer 7" />
          <img src="./assets/customer8.jpg" alt="Customer 8" />
          <img src="./assets/customer9.png" alt="Customer 9" />
        </div>
      </div>
    </div>
  );
};

export default Valuedcustomer;
