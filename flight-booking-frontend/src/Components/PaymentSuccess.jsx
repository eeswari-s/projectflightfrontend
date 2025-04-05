import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state; // Get passed booking details

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 p-6">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h2>
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
      </div>
    </div>
  );
};

export default PaymentSuccess;
