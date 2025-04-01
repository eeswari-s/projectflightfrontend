import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeatPicker from "../Components/SeatPicker";
import axios from "axios";

const Booking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [showSeatPicker, setShowSeatPicker] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();

  const flightDetails = {
    flightNo: "AI-2025",
    flightName: "Air India",
    departurePlace: "Chennai",
    departureDate: "2025-04-10",
    departureTime: "10:00 AM",
    destination: "Delhi",
    reachingTime: "12:30 PM",
    price: 5000,
  };

  const handleBookSeat = (seat) => {
    setSelectedSeat(seat);
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    if (!selectedSeat || !userDetails.name || !userDetails.age || !userDetails.address || !userDetails.phone) {
      alert("Please fill all details and select a seat.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/bookings/book", {
        ...userDetails,
        seat: selectedSeat,
        flightId: flightDetails.flightNo,  
      });

      navigate("/payment");
    } catch (error) {
      console.error("Booking failed", error);
      alert("Booking failed! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Flight Booking</h1>

        {/* Flight Details */}
        <div className="border p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">Flight Details</h2>
          <p><strong>Flight No:</strong> {flightDetails.flightNo}</p>
          <p><strong>Flight Name:</strong> {flightDetails.flightName}</p>
          <p><strong>Departure:</strong> {flightDetails.departurePlace} - {flightDetails.departureTime}</p>
          <p><strong>Destination:</strong> {flightDetails.destination} - {flightDetails.reachingTime}</p>
          <p><strong>Date:</strong> {flightDetails.departureDate}</p>
          <p><strong>Price:</strong> ₹{flightDetails.price}</p>
          <p><strong>Selected Seat:</strong> {selectedSeat ? selectedSeat : "None"}</p>
        </div>

        {/* Seat Selection */}
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 mb-4"
          onClick={() => setShowSeatPicker(true)}
        >
          Select Seat
        </button>

        {/* User Details */}
        <div className="border p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">Passenger Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded mb-2"
            value={userDetails.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full p-2 border rounded mb-2"
            value={userDetails.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-2 border rounded mb-2"
            value={userDetails.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-2"
            value={userDetails.phone}
            onChange={handleChange}
          />
        </div>

        {/* Pricing Summary */}
        <div className="border p-4 rounded-lg bg-green-100 mb-4">
          <h2 className="text-xl font-semibold">Price Breakdown</h2>
          <p><strong>Base Price:</strong> ₹{flightDetails.price}</p>
          <p><strong>Fees & Surcharges:</strong> ₹600</p>
          <p className="font-bold text-lg"><strong>Total:</strong> ₹{flightDetails.price + 600}</p>
        </div>

        {/* Pay Now Button */}
        <button 
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-800"
          onClick={handleBooking}
        >
          Pay Now
        </button>
      </div>

      {/* Seat Picker Popup */}
      {showSeatPicker && (
        <SeatPicker onClose={() => setShowSeatPicker(false)} onSelectSeat={handleBookSeat} />
      )}
    </div>
  );
};

export default Booking;
