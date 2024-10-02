import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import About from './components/About_us/About'

import Complete from './components/Projects/Completed_projects/Complete'
import Ongoing from './components/Projects/Ongoing_projects/Ongoing'
import ScrollToTop from './components/ScrollToTop'
import Product from './components/Products/Product'
import Bulb from './components/Products/Bulb'
import Tube from './components/Products/Tube'
import Fan from './components/Products/Fan'
import Ac from './components/Products/Ac'
import Induction from './components/Products/Induction'
import Ebicycle from './components/Products/Ebicycle'
import Faq from './components/Faq/Faq'
import Completed_projects from './components/Projects/Complete/Completed_projects'
import ImageGallery from './components/Gallery/ImageGallery'
import Services from './components/Products/Services/Services'
import Solar from './components/Products/Solar/Solar'
import Solar1 from './components/Products/Solar/Solar1'
import Solar2 from './components/Products/Solar/Solar2'
import Solar3 from './components/Products/Solar/Solar3'
import Solar4 from './components/Products/Solar/Solar4'
import Solar5 from './components/Products/Solar/Solar5'
import Solar6 from './components/Products/Solar/Solar6'
import Biogas from './components/Products/Solar/Biogas/BIogas'
import Bulb2 from './components/Products/Bulb2'
import Fan2 from './components/Products/Fan2'
import Ac2 from './components/Products/Ac2'



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Complete" element={<Complete />} />
      <Route path="/Ongoing" element={<Ongoing />} />
      <Route path="/Completed_projects" element={<Completed_projects />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Bulb" element={<Bulb />} />
      <Route path="/Bulb2" element={<Bulb2 />} />
      <Route path="/Tube" element={<Tube />} />
      <Route path="/Fan" element={<Fan />} />
      <Route path="/Fan2" element={<Fan2 />} />
      <Route path="/Ac" element={<Ac />} />
      <Route path="/Ac2" element={<Ac2 />} />
      <Route path="/Induction" element={<Induction />} />
      <Route path="/Ebicycle" element={<Ebicycle />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/ImageGallery" element={<ImageGallery />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Solar" element={<Solar />} />
      <Route path="/Solar1" element={<Solar1 />} />
      <Route path="/Solar2" element={<Solar2 />} />
      <Route path="/Solar3" element={<Solar3 />} />
      <Route path="/Solar4" element={<Solar4 />} />
      <Route path="/Solar5" element={<Solar5 />} />
      <Route path="/Solar6" element={<Solar6 />} />
      <Route path="/Biogas" element={<Biogas />} />



        

        

      </Routes>
      <Footer/>  
              
    </Router>
  )
}

export default App