import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";





const cityOptions = [
  "chennai", "Mumbai", "new delhi", "madurai", "trichy", "pondichery",
  "hydrabad", "Visakhapatnam", "agra", "lucknow", "kolkatta", "pune",
  "jaipure", "kochin", "salem", "coibature"
];

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
      const response = await axios.get(
        `https://projectflightbackend.onrender.com/api/flights/search?departureFrom=${departureFrom}&goingTo=${goingTo}&departureDate=${departureDate}`
      );
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights", error);
    }
  };

  const handleBookNow = (flight) => {
    navigate("/booking", { state: { flight } });
  };

  return (
    <>
   <Navbar/>
    <div className="w-full p-6 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 text-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div>
          <label className="block text-sm font-semibold">Departure From</label>
          <select
            value={departureFrom}
            onChange={(e) => setDepartureFrom(e.target.value)}
            className="p-3 w-full md:w-auto border border-gray-300 rounded-lg text-black bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <option value="">Select city</option>
            {cityOptions.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Going To</label>
          <select
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
            className="p-3 w-full md:w-auto border border-gray-300 rounded-lg text-black bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            <option value="">Select city</option>
            {cityOptions.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="p-3 w-full md:w-auto border border-gray-300 rounded-lg text-black bg-white shadow-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
            min="2025-04-01"
            max="2025-04-30"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-700 hover:bg-green-500 p-3 mt-6 px-6 rounded-lg text-white font-bold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </div>

      <div>
        {flights.map((flight) => (
          <div
            key={flight._id}
            className="bg-white p-6 rounded-xl text-gray-900 flex flex-col md:flex-row justify-between items-center border border-gray-300 mt-4"
          >
            <div className="w-full md:w-1/4 flex flex-row items-center p-4 rounded-lg shadow-lg bg-white border border-gray-300">
              <div>
                <img
                  src="/assets/flight-logo.png"
                  alt="Flight Logo"
                  className="w-50 h-30 rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-800 tracking-wide">
                  {flight.flightName}
                </p>
                <p className="text-sm">{flight.flightNumber}</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 ml-8 flex flex-row items-center p-4 rounded-lg shadow-lg bg-white border border-gray-300">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 tracking-wide leading-relaxed">
                  {flight.departureFrom}
                </p>
                <p className="text-sm">{flight.departureDate}</p>
                <p className="text-sm">{flight.departureTime}</p>
              </div>

              <div className="flex flex-col mx-6">
                <p className="text-sm text-center">
                  Duration: {flight.duration}
                </p>
                <div className="border-t border-gray-500 w-64 md:w-48 lg:w-64 xl:w-80 my-2"></div>
                <p className="text-sm text-center">Stops: {flight.stop}</p>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 tracking-wide md:text-xl lg:text-2xl">
                  {flight.goingTo}
                </p>
                <p className="text-sm">{flight.arrivalTime}</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 text-center">
              <button
                onClick={() => handleBookNow(flight)}
                className="mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 md:px-8 lg:px-10 lg:py-3"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchFlights;
