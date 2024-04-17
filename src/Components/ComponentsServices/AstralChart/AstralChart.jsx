import React, { useState } from 'react';
import './astralChart.css';
import zodiacSigns from '../../../assets/zodiacSignsData';

const AstralChart = () => {
  const [userInfo, setUserInfo] = useState({
    sign: '',
    infoAstralChart: ''
  });

  const onClickHandler = e => {
    e.preventDefault();
    const dateOfBirth = new Date(document.getElementById('dateBirth').value);
    const userMonth = dateOfBirth.getMonth() + 1;
    const userDay = dateOfBirth.getDate();

    const userSign = zodiacSigns.find(sign => {
      if (
        (userMonth === sign.start.month && userDay >= sign.start.day) ||
        (userMonth === sign.end.month && userDay <= sign.end.day)
      ) {
        return sign;
      }
      return null;
    });

    if (userSign) {
      setUserInfo({
        sign: userSign.name,
        infoAstralChart: userSign.infoAstralChart
      });
    } else {
      setUserInfo({
        sign: 'Unknown',
        infoAstralChart: 'Sorry, we couldn\'t determine your zodiac sign based on the provided date of birth.'
      });
    }
  };

  return (
    <div>
      <div className='cardAstralChart'>
        <div className='containerInfoAstralChart'>
          <div className='textAstralChart'>
            <p>Discover the cosmic energies surrounding you with our astrological chart readings. Gain detailed insights into your personality, relationships, and life path. Let yourself be amazed by what the cosmos has in store for you!</p>
          </div>
          <div>
            <form className='formAstralChart'>
              <label>Date of Birth</label>
              <input id='dateBirth' type='date' required/>

              <label>Time of Birth</label>
              <input id='timeBirth' type='time' required />

              <label>Place of Birth</label>
              <input id='placeBirth' type='text' required />

              <button onClick={onClickHandler}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {userInfo.sign && (
        <div className='responseAstralChartCard'>
                <h2>Your Zodiac Sign: {userInfo.sign}</h2>
                <p>{userInfo.infoAstralChart}</p>
        </div>
      )}
    </div>
  );
};

export default AstralChart;
