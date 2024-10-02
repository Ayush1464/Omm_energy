import React from 'react'
import './Home_part2.css'
import { Link } from 'react-router-dom'


const Home_part2 = () => {
  return (
    <div>
        <div>
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Latest Completed Projects
  </span>
</h1>

       <div><p className='home5para'>At OM Energy, we proudly showcase our recent achievements in sustainable energy solutions. Our latest project involved the installation of a solar power system for a manufacturing facility, resulting in a 30% reduction in energy costs and significant carbon emissions savings. Additionally, we launched a community solar initiative, making renewable energy accessible to local households. These projects reflect our commitment to innovation and a greener future.</p></div>
    <div className='card_container'>
       
        <div className='cardHome'>
          <img src={"/assets/ommproj1.jpeg"} alt="" />
          
        </div>
        <div className='cardHome'>
          <img src={"/assets/ommproj2.jpeg"} alt="" />
          
        </div>
        <div className='cardHome'>
          <img src={"/assets/ommproj3.jpeg"} alt="" />
          
        </div>
        
    </div>
    <Link to="/Complete">
    <div className="button-container">
  <button className="service_button">See All Projects</button>
</div>
    </Link>
    
   
    </div>
    </div>
  )
}

export default Home_part2