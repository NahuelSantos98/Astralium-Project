import React from 'react';
import './AstrologicalEvents.css'
import { events } from '../../../assets/astrologicalEvents';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';


const AstrologicalEvents = () => {
  return (
    <div className='containerAstrologicalEvents'>
    <div className="astrological-events">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>{event.event}</td>
              <td>{event.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='buttonAstrologicalEvents'>
      <Link to='/findAstrologers'><Button text='Scheddule Appointment' /></Link>
      </div>
    </div>
  );
};

export default AstrologicalEvents;
