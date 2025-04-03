import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("your_stripe_public_key");

const PaymentForm = ({ bookingDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:3000/api/booking/book", bookingDetails);
      const clientSecret = data.clientSecret;
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        alert("Payment Failed");
      } else {
        await axios.post("http://localhost:3000/api/payment-success", { paymentIntent });
        navigate("/success");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment} className="p-4 border rounded shadow-lg">
      <CardElement className="p-2 border rounded" />
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded w-full" disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("bookingDetails"));
    setBookingDetails(storedData);
  }, []);

  if (!bookingDetails) return <p>Loading...</p>;

  return (
    <Elements stripe={stripePromise}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-lg flex w-2/3">
          {/* Left Side: Booking Details */}
          <div className="w-1/2 p-4 border-r">
            <h2 className="text-xl font-bold">Booking Details</h2>
            <p><strong>Flight:</strong> {bookingDetails.flightName} ({bookingDetails.flightNumber})</p>
            <p><strong>From:</strong> {bookingDetails.departure} → <strong>To:</strong> {bookingDetails.destination}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>Seat:</strong> {bookingDetails.seatNumber}</p>
            <p className="mt-2 text-xl font-bold">Total: ₹{bookingDetails.price}</p>
          </div>
          {/* Right Side: Payment Section */}
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold">Payment</h2>
            <PaymentForm bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default PaymentPage;
