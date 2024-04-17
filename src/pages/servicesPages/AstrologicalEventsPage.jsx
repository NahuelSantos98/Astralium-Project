import React from 'react'
import AstrologicalEvents from '../../Components/ComponentsServices/AstrologicalEvents/AstrologicalEvents'
import '../../Components/ComponentsServices/AstrologicalEvents/AstrologicalEvents.css'

const AstrologicalEventsPage = () => {
  return (
    <div className='containerAstrologicalEvents'>
        <h1>Astrological Events</h1>
        <AstrologicalEvents />
    </div>
  )
}

export default AstrologicalEventsPage