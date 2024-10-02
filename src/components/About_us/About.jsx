import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='underline'></div>
      <h1 className='mvv'>MISSION VISION <span className='values-span'>VALUES</span></h1>
      <div className='about_content'>
        <div className='mission'>
        <img src="./assets/mission.webp" alt="" />
          <h1>MISSION</h1>
          
          <p>
          To complete 1.5MW of rooftop solar installations in next three years by installing all type of solar products, energy efficient products and double our business year on year
          </p>

        </div>
        <div className='vision'>
          <img src="./assets/vision.avif" alt="" />
          <h1>VISION</h1>
          <p>To Became a Leading Solar EPC player in Eastern India by delivering innovative, reliable and cost effective renewable energy solutions for supporting towards net zero carbon emission & Climate Change.</p>

        </div>
        <div className='values'>
          <img src="./assets/values.png" alt="" />
          <h1>VALUES</h1>
          <p>
          <ul>
      <li>1. Trust & Integrity</li>
      <li>2. Qualitative Products</li>
      <li>3. Speed of Execution</li>
      <li>4. Training and Development</li>
      <li>5. Customer Centricity</li>
    </ul>
          </p>

        </div>
      </div>
    </div>
  )
}

export default About