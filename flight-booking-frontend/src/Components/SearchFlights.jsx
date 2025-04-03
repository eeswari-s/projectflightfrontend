import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchFlights = () => {
  const [departureFrom, setDepartureFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!departureFrom || !goingTo || !departureDate) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/api/flights/search?departureFrom=${departureFrom}&goingTo=${goingTo}&departureDate=${departureDate}`);
      
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights", error);
    }
  };

  const handleBookNow = (flight) => {
    navigate("/booking", { state: { flight } });
  };

  return (
    <div className="w-full p-6 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 text-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div>
          <label className="block text-sm font-semibold">Departure From</label>
          <input
            type="text"
            placeholder="Enter city"
            value={departureFrom}
            onChange={(e) => setDepartureFrom(e.target.value)}
            className="p-2 w-full md:w-auto border rounded text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Going To</label>
          <input
            type="text"
            placeholder="Enter destination"
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
            className="p-2 w-full md:w-auto border rounded text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="p-2 w-full md:w-auto border rounded text-black"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-700 hover:bg-green-500 p-3 px-6 rounded text-white font-bold"
        >
          Search
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {flights.map((flight) => (
          <div key={flight._id} className="bg-white p-4 rounded-lg shadow-md text-black flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <img src="/flight-logo.png" alt="Flight Logo" className="w-12 h-12" />
              <p className="font-bold">{flight.flightName}</p>
              <p className="text-sm">{flight.flightNumber}</p>
            </div>

            <div className="w-full md:w-1/3 flex justify-between items-center">
              <div className="text-center">
                <p className="text-lg font-semibold">{flight.departureFrom}</p>
                <p className="text-sm">{flight.departureDate}</p>
                <p className="text-sm">{flight.departureTime}</p>
              </div>

              <div className="border-t border-gray-500 w-16 my-2"></div>

              <div className="text-center">
                <p className="text-lg font-semibold">{flight.goingTo}</p>
                <p className="text-sm">{flight.arrivalTime}</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 text-center">
              <p className="text-sm">Duration: {flight.duration}</p>
              <p className="text-sm">Stops: {flight.stop}</p>
              <button
                onClick={() => handleBookNow(flight)}
                className="mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFlights;
