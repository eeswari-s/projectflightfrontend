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

            console.log('Sending request to create checkout session...');
            console.log('flightId:', flightId);
            console.log('bookingId:', bookingId);

            const response = await axios.post('http://localhost:3000/api/create-checkout-session', {
                flightId: flightId,
                bookingId: bookingId,
            });

            console.log('Backend response:', response.data);

            if (!response.data || !response.data.sessionId) {
                console.error('Invalid response from backend:', response.data);
                alert('Payment processing failed. Please try again.');
                return;
            }

            const { sessionId } = response.data;
            const stripe = window.Stripe('your-publishable-key-here'); // Replace with your Stripe Publishable Key

            console.log('Redirecting to Stripe checkout...');

            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                console.error('Error redirecting to checkout:', error);
                alert('Payment checkout failed. Please try again.');
            } else {
                console.log('Stripe redirect successful.');
            }

        } catch (error) {
            console.error('Error creating checkout session:', error);
            console.error('Full error object:', error);
            alert('An error occurred during payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-page">
            <h2>Complete Your Payment</h2>
            <button
                onClick={handlePayment}
                disabled={loading}
                className="pay-now-button"
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default PaymentPage;