import React from 'react';
import "./Solarproducts.css";
import { Link } from 'react-router-dom';


const Solarproducts = () => {
  return (
    <>
      <div className='product'>
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Solar  Products
  </span>
</h1>
        <p className="support-info">
          These products are supported by EESL under the Government of India.
        </p>
      </div>
      
      <section className="ongoing-projects">
        <div className="project-list">
          <div className="project-card">
            <Link to="/Solar1">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>Solar 1</h3>
                <p>
                This light generates energy and stores it in a high quality battery
                 that delivers light using LUMILEDS LEDs.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Solar2">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>Solar 2</h3>
                <p>
                Energy shines with its broad range of offerings.
                 Their goal is to make solar power both dependable and efficient for all.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Solar3">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>solar 3</h3>
                <p>
                Solar technologies convert sunlight into electrical energy either through
                 photovoltaic (PV) panels or through mirrors that concentrate solar radiation.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Solar4">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>solar 4</h3>
                <p>
                solar photovoltaic (PV) systems, the voltage output of the PV panels typically falls in the range of 12 to 24 volts.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Solar5">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>solar 5</h3>
                <p>
                These systems do not need any batteries and are connected to the utility grid power.
                 It is best suited for customers with stable grid power and minimal power cuts.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Solar6">
              <img src="./assets/sl4.jpg" alt="Project Image" />
              <div className="project-content">
                <h3>solar 6</h3>
                <p>
                When sunlight hits the photovoltaic (PV) tiles in your Solar Roof, 
                it is absorbed by solar cells, creating a flow of electric current.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solarproducts;
