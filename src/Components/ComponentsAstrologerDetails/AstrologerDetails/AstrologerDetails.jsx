/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { RiStarSFill } from "react-icons/ri";
import "./AstrologerDetails.css"
import Calendar from '../Calendar/Calendar';


const AstrologerDetails = ({ astrologer }) => {
  return (
    <div className='astrologerDetailContainerTotal'>
      <div className='astrologerDetailCalendarAndPresentation'>
      <div className='astrologerDetailImageTitlePresentation'>
          <div className='imgAndValoration'>
            <img src={astrologer.img} alt='Astrologuer profile picture' />
            <p>Valoration</p>
            <div className='starsValidation'>
              <p>{astrologer.rating}/5</p>
              <p><RiStarSFill color='#f6ff00' size={'1.6rem'} /></p>
            </div>
          </div>
          <div className='astrologerDetailsText'>
            <h2>{astrologer.name + " " + astrologer.surname}</h2>
            <p>{astrologer.info}</p>
            <p>{astrologer.info2}</p>
          </div>
        </div>

      <Calendar />

      </div>
    </div>

  );
}

export default AstrologerDetails;
