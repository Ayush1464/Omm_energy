import React from 'react'
import Home_part1 from './Home_part1'
import Home_part2 from './Home_part2'
import Home_part3 from './Home_part3'
import Home_part4 from './Home_part4'
import Home_part5 from './Home_part5'
import Video from './Ommvideo'
import Ommvideo from './Ommvideo'
import Home_part6 from './Home_part6'
import Employee from './Employee'
import ClientSection from './ClientSection'
import Valuedcustomer from './Valuedcustomer'
import Brands from './Brands'

const Home = () => {
  return (
    <>
        {/* <Home_part1/> */}
        <Ommvideo/>
        <Home_part4/>
        <Home_part2/>
        <Home_part3/>
        <Home_part5/>
        {/* <Home_part6/> */}
        <ClientSection/>
        <Valuedcustomer/>
        
        <Employee/>
        <Brands/>

    </>
  )
}

export default Home