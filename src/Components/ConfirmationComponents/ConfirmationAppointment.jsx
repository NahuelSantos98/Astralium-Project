import React from 'react';
import './ConfirmationAppointment.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ConfirmationAppointment = ({ appointment, idAppointment }) => {
  const formattedDate = appointment && appointment.appointmentDate ? new Date(appointment.appointmentDate).toLocaleDateString() : '';

  return (
    <div className='containerConfirmationAppointment'>
        <div className='textConfirmation'>
        <h2>Your appointment has just been confirmed.</h2>
      <h4>Thank you for scheduling your astrology session on Astralium!</h4>
      <p>The id of your session is:<span>{idAppointment}</span> </p>
      <p>Your appointment has been confirmed for: <span>{formattedDate}</span></p>
      <p>The appointment information has been sent to the email: <span>{appointment && appointment.userEmail}</span></p>
      <p>If you have any questions or need to reschedule your appointment, feel free to contact us at support@astralium.com.ar or by phone at 0800-2317.</p>
        </div>

        <div className='buttonsNavigationConfirmation'>
        <Link to='/home'><Button text="Back to Home" /></Link>  
        </div>
    </div>
  );
};

export default ConfirmationAppointment;
