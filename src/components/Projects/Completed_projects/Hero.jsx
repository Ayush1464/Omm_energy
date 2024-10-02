import React from 'react'
import img from '/assets/gallery3.jpeg'


const Hero = () => {
  return (
    <>
    
    <div className="bg-cover bg-center h-[600px] flex flex-col justify-center items-center text-white"
    style={{ backgroundImage: `url(${img})` }}>
    <h1 className="text-5xl p-5  font-bold mb-4">Our Projects</h1>
    

    
    </div>
    <div className="relative -mt-20 z-10 flex justify-center space-x-4">
                    <img src={img} alt="Solar Installation 1" className="w-56 h-36 object-cover border-4 border-white shadow-lg" />
                    <img src={img} alt="Solar Installation 2" className="w-56 h-36 object-cover border-4 border-white shadow-lg" />
                    <img src={img} alt="Solar Installation 3" className="w-56 h-36 object-cover border-4 border-white shadow-lg" />
                    <img src={img} alt="Solar Installation 4" className="w-56 h-36 object-cover border-4 border-white shadow-lg" />
                </div>

    </>


  )
}

export default Hero