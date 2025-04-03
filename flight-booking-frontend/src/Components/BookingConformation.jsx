import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = ({ bookingDetails }) => {
  const navigate = useNavigate();

  const handleBookingComplete = () => {
    // Store the flightId and bookingId in localStorage
    localStorage.setItem('flightId', bookingDetails.flightId);
    localStorage.setItem('bookingId', bookingDetails.bookingId);

    // Redirect to Payment Page
    navigate('/payment');
  };

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Flight: {bookingDetails.flightName}</p>
      <p>Booking ID: {bookingDetails.bookingId}</p>
      <button onClick={handleBookingComplete}>Proceed to Payment</button>
    </div>
  );
};

export default BookingConfirmation;
