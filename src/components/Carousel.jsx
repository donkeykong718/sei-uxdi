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
  const [activeSlide, setActiveSlide] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  useEffect(() => {
    const activeIntervalId = setInterval(() => {
      setActiveSlide((activeSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(activeIntervalId);
  }, [activeSlide]);

  const currentSlide = (index) => {
    setCurrentImageIndex(index - 1);
    setActiveSlide(index - 1);
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
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => currentSlide(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;