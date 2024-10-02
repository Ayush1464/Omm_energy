import React from 'react';
import './Employee.css'; // Create a CSS file to style the section

const employees = [
  {
    name: 'MR. Manas Ranjan Acharya',
    role: 'Proprietor',
    image: '/assets/ManasRanjanAcharya_Proprietor.jpeg' // Replace with the correct image path or URL
  },
  {
    name: 'MR. Priyabrata Das',
    role: 'Operation Manager',
    image: '/assets/Operation_Manager.jpeg'
  },
  {
    name: 'MR. Ajaya Kumar Mandhata',
    role: 'Sales Manager',
    image: '/assets/Sales_Manager.jpeg'
  },
  
];

const Employee = () => {
  return (
    <section className="employee-section">
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Meet Our Team
  </span>
</h1>

      <div className="employee-container">
        {employees.map((employee, index) => (
          <div className="employee-card" key={index}>
            <img src={employee.image} alt={employee.name} />
            <b>{employee.name}</b>
            <p>{employee.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Employee;
