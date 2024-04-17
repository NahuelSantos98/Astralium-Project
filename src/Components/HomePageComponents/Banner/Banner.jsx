import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {

    return (
        <div className='containerBanner'>
            <div className='bannerInformation'>
                <div className='bannerTitle'>
                        <h1>Let the stars guide you!</h1>
                </div>
                <div className='bannerButton'>
                <Link to='/findAstrologers'><Button text="Schedule appointment"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner

