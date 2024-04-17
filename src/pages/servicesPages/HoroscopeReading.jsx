import React from 'react'
import zodiacSigns from '../../assets/zodiacSignsData'
import '../../Components/ComponentsServices/HoroscopeReadingCard/HoroscopeReadingCard.css'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'

const HoroscopeReading = () => {
  return (
    
    <div className="horoscopeReadingPage">
      <h3>Horoscope</h3>
      <div className='cardHoroscope'>
        {zodiacSigns.map((sign, index) => (
          <div key={index} className='contenedorCardHoroscope'>
            <img src={sign.img} alt={sign.name} />
            <h2>{sign.name}</h2>
            <p><strong>Introduction:</strong> {sign.introduction}</p>
            <p><strong>Love:</strong> {sign.Love}</p>
            <p><strong>Wealth:</strong> {sign.wealth}</p>
            <p><strong>Welfare:</strong> {sign.welfare}</p>
          </div>
      ))}
      </div>
      <div className='buttonsHoroscope'>
      <Link to={'/findAstrologers'}><Button text='Schedule Appointment'/></Link> 
      <Link to={'/'} ><Button text='Return home' /></Link>
      
      </div>
    </div>
  )
}

export default HoroscopeReading