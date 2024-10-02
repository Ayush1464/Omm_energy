import React, { useState, useEffect } from 'react';
import "./Ommvideo.css"; // Ensure you have necessary styles

const images = [
  '/assets/ommproj1.jpeg',
  '/assets/ommproj1.jpeg',
  '/assets/ommproj1.jpeg',
  '/assets/ommproj1.jpeg',
];

const Ommvideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Previous and Next Buttons with Boxicons */}
      <button className="carousel-button prev" onClick={goToPrevious}>
        <i className='bx bx-chevron-left'></i> {/* Boxicon for left arrow */}
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        <i className='bx bx-chevron-right'></i> {/* Boxicon for right arrow */}
      </button>
    </div>
  );
}

export default Ommvideo;
