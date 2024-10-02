import React from 'react'
import './Home_part2.css'

const Home_part3 = () => {
  return (
    <div className='homepara3'>
         <div className='part3' style={{width:'80%',marginLeft:'10%'}}>
         <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Latest Posts
  </span>
</h1>

       <div><p className='home5para'>Stay updated with our latest insights and developments in the renewable energy sector. Our recent blog posts cover a range of topics, including advancements in solar technology, tips for maximizing energy efficiency at home, and the impact of government policies on sustainable energy initiatives. Join us as we explore innovative solutions and share expert advice to help you navigate the evolving landscape of renewable energy. Don’t miss out on valuable information to empower your energy choices!</p></div>
    <div className='card_container'>
       
        <div className='cardHome'>
          <img src={"/assets/sl4.jpg"} alt="" />
        </div>
        <div className='cardHome'>
          <img src={"/assets/sl4.jpg"} alt="" />
        </div>
        <div className='cardHome'>
          <img src={"/assets/sl4.jpg"} alt="" />
        </div>
       
    </div>
    </div>

    </div>
  )
}

export default Home_part3