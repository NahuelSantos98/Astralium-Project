import updatesImage from '../../../assets/img/updatesImage.png'
import Slider from '../../Slider/Slider'
import './Updates.css'

const Updates = () => {
  return (
    <div className='containerEvrythingUpdates'>
        <div className='updatesTitleAndInformationContainer'>
            <h2>Updates</h2>
            <div className='updatesInformationAndImageContainer'>
                <div className='updatesImageContainer'>
                    <img src={updatesImage} alt='Image related to universe and astrology' className='updatesImage' />
                </div>
                
                <div className='informationUpdatesContainer'>
                    <p>Join us at our astrology center and let the stars guide your path!</p>
                    <p>We await you with open arms for a cosmic journey of self-discovery and transformation!</p>
                </div>
            </div>
        </div>
        <div className='sliderContainerInUpdates'>
        <Slider />
        </div>
    </div>
  )
}

export default Updates