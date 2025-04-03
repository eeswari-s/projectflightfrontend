import React, { useState, useEffect } from 'react';

const BookingConfirmation = () => {
  const [flightId, setFlightId] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    // Mock data for demonstration
    const fetchedFlightId = 'your-flight-id';  // Replace with actual flight ID from your booking system
    const fetchedBookingId = 'your-booking-id';  // Replace with actual booking ID from your booking system

    // Set the flightId and bookingId in the component state
    setFlightId(fetchedFlightId);
    setBookingId(fetchedBookingId);

    // Store the values in localStorage for later use
    localStorage.setItem('flightId', fetchedFlightId);
    localStorage.setItem('bookingId', fetchedBookingId);
  }, []);

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your booking is confirmed. Proceed to payment.</p>
    </div>
  );
};

export default BookingConfirmation;
