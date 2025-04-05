import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Processing payment...");
  const [confirmed, setConfirmed] = useState(false);

  const bookingDetails = location.state;

  useEffect(() => {
    const confirmPayment = async () => {
      const bookingId = searchParams.get("bookingId");
      const transactionId = searchParams.get("transactionId");
      const amount = searchParams.get("amount");

      if (!bookingId || !transactionId || !amount) {
        setMessage("Missing payment details.");
        return;
      }

      try {
        const res = await axios.post("http://localhost:3000/api/payment/payment-success", {
          bookingId,
          transactionDetails: {
            id: transactionId,
            amount: parseInt(amount),
          },
        });

        setMessage(res.data.message || "Payment successful!");
        setConfirmed(true);
      } catch (err) {
        console.error("Payment confirmation error:", err.response?.data || err.message);
        setMessage("Payment confirmation failed. Please contact support.");
      }
    };

    confirmPayment();
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 p-6">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-green-600">🎉 {message}</h2>
        {confirmed && (
          <>
            <p className="mt-2 text-gray-600">Thank you for booking your flight!</p>
            {bookingDetails && (
              <div className="mt-4 text-left">
                <p><strong>Passenger Name:</strong> {bookingDetails.name}</p>
                <p><strong>Flight Number:</strong> {bookingDetails.flightNumber}</p>
                <p><strong>Seat Number:</strong> {bookingDetails.seat}</p>
                <p><strong>Total Paid:</strong> ₹{bookingDetails.totalFare}</p>
              </div>
            )}
            <button
              onClick={() => navigate("/search-flights")}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
