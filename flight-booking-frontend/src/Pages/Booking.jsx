import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SeatSelection from "../Components/SeatSelection";
import { createCheckoutSession } from "../api/payAPI.js";

const BookingPage = () => {
  const location = useLocation();
  const flight = location.state?.flight;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    email: "",
  });

  const [selectedSeat, setSelectedSeat] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  if (!flight) {
    return <div className="text-center text-red-500">No flight selected!</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookNowClick = async (e) => {
    e.preventDefault();
    if (!selectedSeat) {
      alert("Please select a seat before proceeding.");
      return;
    }

    try {
      const response = await axios.post("https://projectflightbackend.onrender.com/api/booking/book", {
        ...formData,
        seat: selectedSeat,
        flightId: flight._id,
      });

      console.log("Booking Successful:", response.data);
      setIsBooked(true);
      alert("Booking Successful! Now proceed to payment.");
    } catch (error) {
      console.error("Booking Failed:", error.response?.data || error.message);
      alert("Booking failed. Please try again.");
    }
  };

  const handlePayNowClick = async () => {
    if (!isBooked) {
      alert("Complete the booking process first!");
      return;
    }

    const totalFare = flight.price + 731 + 176;
    const result = await createCheckoutSession(totalFare);

    if (result.success && result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
    } else {
      alert("Payment failed! Try again.");
    }
  };

  const totalFare = flight.price + 731 + 176;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Flight Details and Booking Form */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Flight Booking Details</h2>
            <h3 className="text-xl mt-2 text-green-500"><strong>Flight Number:</strong> {flight.flightNumber}</h3>
            <h3 className="text-xl text-green-500"><strong>Flight Name:</strong> {flight.flightName}</h3>
            <h3 className="text-xl text-green-500"><strong>Departure From:</strong> {flight.departureFrom}</h3>
            <h3 className="text-xl text-green-500"><strong>Going To:</strong> {flight.goingTo}</h3>
            <h3 className="text-xl text-green-500"><strong>Departure Date:</strong> {new Date(flight.departureDate).toLocaleDateString()}</h3>
            <h3 className="text-xl text-green-500"><strong>Price:</strong> ₹{flight.price}</h3>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Passenger Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Column: Seat Selection, Price Details, and Buttons */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-500">Select a Seat</h3>
            <SeatSelection selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
            {selectedSeat && <p className="text-green-500 font-bold mt-2">Selected Seat: {selectedSeat}</p>}
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Fare Breakdown</h3>
            <p><strong>Flight Price:</strong> ₹{flight.price}</p>
            <p>Fee & Surcharges: ₹731</p>
            <p>Travel Insurance: ₹176</p>
            <p className="font-bold">Total You Pay: ₹{totalFare}</p>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <button
              onClick={handleBookNowClick}
              className={`w-full py-2 text-white rounded-lg ${selectedSeat ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
              disabled={!selectedSeat}
            >
              Book Now
            </button>
            <button
              onClick={handlePayNowClick}
              className={`w-full py-2 text-white rounded-lg ${isBooked ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`}
              disabled={!isBooked}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
