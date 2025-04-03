import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SeatSelection from "../Components/SeatSelection";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    email: "",
  });

  const [selectedSeat, setSelectedSeat] = useState("");

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
      const response = await axios.post("http://localhost:3000/api/booking/book", {
        ...formData,
        seat: selectedSeat,
        flightId: flight._id,
      });

      console.log("✅ Booking Successful:", response.data);

      // Redirect directly to the payment page without saving booking details in localStorage
      navigate("/payment");
    } catch (error) {
      console.error("❌ Booking Failed:", error.response?.data || error.message);
      alert("Booking failed. Please try again.");
    }
  };

  const totalFare = flight.price + 731 + 176;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Flight Booking Details</h2>
      <div className="border p-4 rounded">
        <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
        <p><strong>Flight Name:</strong> {flight.flightName}</p>
        <p><strong>Departure From:</strong> {flight.departureFrom}</p>
        <p><strong>Going To:</strong> {flight.goingTo}</p>
        <p><strong>Departure Date:</strong> {new Date(flight.departureDate).toLocaleDateString()}</p>
        <p><strong>Price:</strong> ₹{flight.price}</p>
        <p><strong>Departure Time:</strong> {flight.departureTime}</p>
        <p><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
        <p><strong>Duration:</strong> {flight.duration}</p>
        <p><strong>Stop:</strong> {flight.stop}</p>
      </div>

      <h3 className="text-lg font-semibold mt-6">Passenger Details</h3>
      <div className="mt-4 space-y-3">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />

        <h3 className="text-lg font-semibold mt-6">Select a Seat</h3>
        <SeatSelection selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />

        {selectedSeat && <p className="text-green-500 font-bold mt-2">Selected Seat: {selectedSeat}</p>}

        <div className="bg-gray-100 p-4 rounded shadow mt-4">
          <p><strong>Flight Price:</strong> ₹{flight.price}</p>
          <p>Fee & Surcharges: ₹731</p>
          <p>Travel Insurance: ₹176</p>
          <p className="font-bold">You Pay: ₹{totalFare}</p>
        </div>

        <button
          type="button"
          onClick={handleBookNowClick}
          className={`w-full text-white p-2 rounded mt-4 ${selectedSeat ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={!selectedSeat}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
