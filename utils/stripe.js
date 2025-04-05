// utils/stripe.js
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = window.Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

export default getStripe;
