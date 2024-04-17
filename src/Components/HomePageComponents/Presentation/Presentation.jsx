
import firstImageHome from '../../../assets/img/firstImageHome.png'
import secondImageHome from '../../../assets/img/secondImageHome.png'
import Button from '../../Button/Button'
import OurMission from '../OurMission/OurMission'
import { Link } from 'react-router-dom'
import './Presentation.css'


const Presentation = () => {
return (
    <div className='presentationContainer'>
        <div className='titleAndInformationContainer'>
        <h2>Who are we?</h2>
        <div className='containerInformations'>
        <div className='InformationAndImageContainer'>
                <div>
                    <p>We are a group of astrology enthusiasts that are dedicated to spreading knowledge and interest in the field. We want to share with you our knowledge and passion.</p>
                </div>
                <div>                
                    <img src={firstImageHome} alt='Image related to universe and astrology' className='imageHomePage' />
                </div>
            </div>
        </div>

        <div className='InformationAndImageContainer' >
            <div>
            <img src={secondImageHome} alt='Image related to universe and astrology'  className='imageHomePage'/>
            </div>
            
            <div>
            <p>On this website, you will be able to learn about our offerings and explore life beyond Earth. Get to know more with us!</p>
            </div>
        </div>
        
        <div className='informationButton'>
        <Link to='/findAstrologers'><Button text='Schedule appointment'/></Link>
        </div>
        </div>



    <OurMission />
        
    </div>
  )
}

export default Presentation