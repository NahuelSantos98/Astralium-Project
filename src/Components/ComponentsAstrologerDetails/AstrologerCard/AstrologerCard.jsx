import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import './AstrologerCard.css'
import astrologers from '../../../assets/astrologersData';

const AstrologerCard = () => {


  return (
  <>
    <div className='infoAstrologersContainer'>
      {astrologers.map(astrologer => (
        <div  id={astrologer.idName} key={astrologer.id} className='astrologerCardContainer'>
          <div className='imgAstrologuerCardContainer'>
            <img src={astrologer.img} alt='Astrologer Profile' />
          </div>
          <div className="textAndButtonAstrologerCardContainer">
            <h3>{astrologer.name}</h3>
            <div className="textAstrologerCard">
              <p>{astrologer.info}</p>
            </div>
            <Link to={`/astrologer/${astrologer.id}`}>
              <Button text="See more"/>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AstrologerCard;
