import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import './Slider.css';

const Slider = () => {
  const slides = [
    {
      title: "Astrological Chart",
      info: "Discover the cosmic energies surrounding you with our astrological chart readings. Gain detailed insights into your personality, relationships, and life path. Let yourself be amazed by what the cosmos has in store for you!",
      text: "Get your first Astrological Chart today!",
      path: "/astrologicalChart"
    },
    {
      title: "Horoscope Reading",
      info: "What do the stars hold for you today? Consult our daily horoscopes for guidance on love, work, health, and more! Let yourself be inspired by celestial influences and make every day count.",
      text : "Discover what the stars hold for you!",
      path : "/horoscopeReading"
    },
    {
      title: "Astrological Events",
      info: "Explore the upcoming astrological events on the horizon. See where, at what time, and when the closest natural phenomena will occur to you.",
      text : "Locate nearby astrological events",
      path: "/astrologicalEvents"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='sliderContainer'>
      <div className='sliderContainerInfo'>
        <h2>{slides[currentIndex].title}</h2>
        <p className='slideInfo'>{slides[currentIndex].info}</p>
        <div className='navigateButtonSlide'>
        <Link to={slides[currentIndex].path}><Button text={slides[currentIndex].text}/></Link>
        </div>
        <div className='containerButtons'>
          <button onClick={handlePrevSlide}><GoArrowLeft /></button>
          <button onClick={handleNextSlide}><GoArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
