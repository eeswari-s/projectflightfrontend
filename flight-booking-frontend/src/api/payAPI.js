import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('VITE_STRIPE_PUBLIC_KEY'); // Use your secret key from Stripe
const app = express();

app.post('/api/create-checkout-session', async (req, res) => {
  const { flightId, bookingId } = req.body;

  // Here you can fetch the flight details from your database using flightId and bookingId

  // Create a Stripe checkout session
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Flight Booking',
              description: `Booking ID: ${bookingId}, Flight ID: ${flightId}`,
            },
            unit_amount: 1000, // The amount to be paid (in cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Error creating checkout session');
  }
});

export default app;
