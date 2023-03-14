import React, { useState, useEffect } from 'react';

import Image1 from '../assets/Hero Image Carousel/Group 1.png'
import Image2 from '../assets/Hero Image Carousel/Group 2.png'
import Image3 from '../assets/Hero Image Carousel/Group 3.png'
import Image4 from '../assets/Hero Image Carousel/Group 4.png'
import Image5 from '../assets/Hero Image Carousel/Group 5.png'
import './Carousel.css'

const images = [
  {
    src: Image1,
    elements: [
      {
        text: ['Vegan, Sorbets & Seasonal Flavors'],
        style: {
          position: 'absolute',
          top: '50%'
        }
      }
    ]
  },
  {
    src: Image2,
    elements: [
      {
        text: ['Our Location'],
        style: {
          position: 'absolute',
        }
      }
    ],
  },
  {
    src: Image3,
    elements: [
      {
        text: ['MooChaCha', 'Moo-ve Over Boring Ice Cream'],
        style: {
          position: 'absolute',
        }
      }
    ],
  },
  {
    src: Image4,
    elements: [
      {
        text: ['Pricing Menu'],
        style: {
          position: 'absolute',
        }
      }
    ],
  },
  {
    src: Image5,
    elements: [
      {
        text: ['Events and Catering'],
        style: {
          position: 'absolute',
        }
      }
    ],
  }
]



const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex,]);

  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const currentSlide = (n) => {
    setCurrentImageIndex(n - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        <img
          className="carousel__image"
          src={images[currentImageIndex].src}
          alt="carousel"
          onClick={handleImageClick}
        />

        <div className='select'>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(5)}></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
