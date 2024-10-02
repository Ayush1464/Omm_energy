import React, { useState } from 'react';
import './Home_part5.css';
import { Link } from 'react-router-dom';


const Home_part5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: 'Kell Dawx',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      image: '/assets/sl4.jpg',
    },
    {
      name: 'Lotw Fox',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      image: '/assets/sl4.jpg',
    },
    {
      name: 'Sara Mit',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      image: '/assets/sl4.jpg',
    },
    {
      name: 'Jenny Wert',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      image: '/assets/sl4.jpg',
    },
    {
      name: 'Lexa Kin',
      description: 'Passionate about development and design, I carry out projects at the request of users.',
      image: '/assets/sl4.jpg',
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="card__containerHome2">
      <div className='services'>
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Services
  </span>
</h1>

        <p>We offer customized solar panel installations, energy storage solutions, and maintenance services for both homes and businesses. Our expert team designs efficient solar systems to lower energy costs while promoting sustainability. We also assist with government incentives and financing, making the switch to solar easy and affordable.</p>

      </div>
      <div className="card__contentHome2">
        <div
          className="swiper-wrapperHome"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)`, transition: 'transform 0.5s ease' }}
        >
          {slides.map((slide, index) => (
            <article key={index} className="card__articleHome2 swiper-slide">
              <div className="card__image">
                <img src={slide.image} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__dataHome2">
                <h3 className="card__nameHome2">{slide.name}</h3>
                <p className="card__descriptionHome2">{slide.description}</p>
                
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="swiper-button-next" onClick={nextSlide}>
      <i class='bx bx-chevron-right'></i>
      </div>

      <div className="swiper-button-prev" onClick={prevSlide}>
      <i class='bx bx-chevron-left'></i>
      </div>
      <Link to="/Product">
      <button className='service_button'>Other Services</button>
      </Link>


    </div>
  );
};

export default Home_part5;
