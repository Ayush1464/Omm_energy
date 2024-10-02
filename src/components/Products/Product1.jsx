import React from 'react';
import "./Product1.css";
import { Link } from 'react-router-dom';

const Product1 = () => {
  return (
    <>
      <div className='product'>
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
          <span className="heading-underline" style={{ color: '#007bff' }}>
            Energy Efficient Products
          </span>
        </h1>
        <p className="support-info">
          These products are supported by EESL under the Government of India.
        </p>
      </div>

      <section className="ongoing-projects">
        <div className="project-list">
          <div className="project-card">
            <Link to="/Bulb">
              <img src="./assets/bulb.jpg" alt="6W LED BULB" />
              <div className="project-content">
                <h3>6W LED BULB (5 Star Rated)</h3>
                <p>
                  This energy-efficient 6W LED bulb is designed to reduce electricity consumption while providing excellent brightness, making it ideal for households looking to save energy.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Bulb2">
              <img src="./assets/bulb2.jpg" alt="6W LED BULB" />
              <div className="project-content">
                <h3>Emergency LED Bulb - 10 Watt</h3>
                <p>
  This 10 Watt Emergency LED Bulb delivers outstanding brightness while ensuring energy efficiency. It is an ideal solution for households aiming to reduce electricity costs without compromising on light quality, making it a practical choice for any home.
</p>

              </div>
            </Link>
          </div>

          <div className="project-card">
            <Link to="/Tube">
              <img src="./assets/tube.jpg" alt="Tube Light 200W" />
              <div className="project-content">
                <h3>Tube Light 200W</h3>
                <p>
                  A high-performance tube light that provides superior lighting while using less power. Perfect for both homes and commercial spaces, it contributes to lower energy bills.
                </p>
              </div>
            </Link>
          </div>

          <div className="project-card">
            <Link to="/Fan">
              <img src="./assets/fan.jpg" alt="FAN (BLDE) 5W - 20W" />
              <div className="project-content">
                <h3>5 Star BLDC Ceiling Fan, (With Remote)</h3>
                <p>
                  This energy-efficient BLDE fan offers optimal air circulation while consuming significantly less power, helping you reduce energy costs over time.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Fan2">
              <img src="./assets/fan2.jpg" alt="FAN (BLDE) 5W - 20W" />
              <div className="project-content">
                <h3>5 Star BLDC Ceiling Fan, 3 years onsite warranty
(Without Remote)
</h3>
                <p>
                  This energy-efficient BLDE fan offers optimal air circulation while consuming significantly less power, helping you reduce energy costs over time.
                </p>
              </div>
            </Link>
          </div>

          <div className="project-card">
            <Link to="/Ac">
              <img src="./assets/ac.jpg" alt="AC 1.5 Ton 750W" />
              <div className="project-content">
                <h3>1.0 TR Super-Efficient 5 Star Rated Split AC</h3>
                <p>
                  This highly efficient air conditioner consumes only 750W of power, providing powerful cooling while minimizing energy usage, perfect for eco-conscious homes.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Ac2">
              <img src="./assets/ac.jpg" alt="AC 1.5 Ton 750W" />
              <div className="project-content">
                <h3>1.5	TR Super-Efficient 5 Star Rated Split AC</h3>
                <p>
                  This highly efficient air conditioner consumes only 750W of power, providing powerful cooling while minimizing energy usage, perfect for eco-conscious homes.
                </p>
              </div>
            </Link>
          </div>

          <div className="project-card">
            <Link to="/Induction">
              <img src="./assets/induction.jpg" alt="Induction Cooker 1200W" />
              <div className="project-content">
                <h3>1200W Induction Cooktop</h3>
                <p>
                  The 1200W induction cooker is a smart cooking solution that uses electromagnetic energy to cook food faster and more efficiently, reducing overall energy consumption.
                </p>
              </div>
            </Link>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Product1;
