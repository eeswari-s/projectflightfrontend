import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
 
    const flightId = localStorage.getItem('flightId');
    const bookingId = localStorage.getItem('bookingId');

    if (!flightId || !bookingId) {
      console.error('No valid flightId or bookingId available');
      alert('Missing flight or booking information. Please try again.');
      return;
    }

    try {
      setLoading(true);
      
      
      const response = await axios.post('https://projectflightbackend.onrender.com/api/create-checkout-session', {
        flightId: flightId,
        bookingId: bookingId,
      });

      const { sessionId } = response.data;

      
      const stripe = window.Stripe('VITE_STRIPE_PUBLIC_KEY');  
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Error redirecting to checkout:', error);
        alert('Payment checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('An error occurred during payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Complete Your Payment</h2>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentPage;
