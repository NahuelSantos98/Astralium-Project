import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import {useParams} from 'react-router-dom'
import './Calendar.css';
import ConfirmationAppointment from '../../ConfirmationComponents/ConfirmationAppointment';


const Calendar = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [email, setEmail] = useState('');
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [idAppointment, setIdAppointment] = useState(null);
  const {id} = useParams();

  const minDate = new Date();
  const maxDate = new Date("2024-12-24");
  const minTime = new Date();
  minTime.setHours(7, 30, 0);
  const maxTime = new Date();
  maxTime.setHours(19, 0, 0);

  const handleDateChange = date => {
    setAppointmentDate(date);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendAppointmentToFirebase = () => {
    const appointmentRef = collection(db, "appointments");

    const appointmentData = {
      astrologerId: id,
      userEmail: email,
      appointmentDate: appointmentDate
    };

    addDoc(appointmentRef, appointmentData)
      .then(res => {
        console.log(`Document added with ID: ${res.id}`);
        setAppointment(appointmentData);
        setConfirmationVisible(true);
        setIdAppointment(res.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
        alert('We could not schedule the appointment, retry')
      });
  };

  const onClickHandler = e => {
    e.preventDefault();
    if (appointmentDate && email) {
      if (validateEmail(email)) {
        sendAppointmentToFirebase();
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Please select appointment date and provide email.");
    }
  };

  return (
    <div>
      {confirmationVisible ? (
        <ConfirmationAppointment appointment={appointment} idAppointment={idAppointment} />
      ) : (
        <form>
          <div className='formCalendarAppointment'>
            <input
              type='email'
              placeholder='Confirm email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <DatePicker
              showTimeSelect
              selected={appointmentDate}
              onChange={handleDateChange}
              timeIntervals={30}
              timeFormat='HH:mm'
              dateFormat="yyyy/MM/dd; HH:mm"
              minDate={minDate}
              maxDate={maxDate}
              minTime={minTime}
              maxTime={maxTime}
              placeholderText='Date'
              required
            />
          </div>
          <div className='buttonConfirmationAppointment'>
            <button type='button' onClick={onClickHandler}>Confirm</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Calendar;
