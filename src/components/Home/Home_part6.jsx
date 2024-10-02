import React from 'react'


const Home_part6 = () => {
  return (
    <div className='body11'>
    <div className='card_homeSlider_Container'>
    <span className='sliderCard_home' id='Slider_Home1'></span>
    <span className='sliderCard_home' id='Slider_Home2'></span>
    <span className='sliderCard_home' id='Slider_Home3'></span>
    <span className='sliderCard_home' id='Slider_Home4'></span>
    <span className='sliderCard_home' id='Slider_Home5'></span>
    <span className='sliderCard_home' id='Slider_Home6'></span>
    <span className='sliderCard_home' id='Slider_Home7'></span>

    <div className="imgHome_Contain">
     
      <div className="Slide_div_cont" id="Slide_home1">
        <img src="./assets/SLOM1.jpg" alt="" className='im' id='img1'/>
        <a href="Slider_Home1" className="buttonHome_Slide" id="buttonS1"></a>
      </div>
      
      
      
      <div className="Slide_div_cont" id="Slide_home4">
        <img src="./assets/SLOM2.jpg" alt="" className='im' id='img4'/>
        <a href="Slider_Home4" className="buttonHome_Slide" id="buttonS4"></a>
      </div>
      
      <div className="Slide_div_cont" id="Slide_home5">
        <img src="./assets/SLOM1.jpg" alt="" className='im' id='img5'/>
        <a href="Slider_Home5" className="buttonHome_Slide" id="buttonS5"></a>
      </div>
      
    
     
      
      </div>
   </div>
 </div>
  )
}

export default Home_part6