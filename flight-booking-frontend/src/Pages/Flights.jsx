import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Flights = () => {
  const location = useLocation();
  const [flights, setFlights] = useState([]);
  
  // Extract search parameters
  const searchParams = new URLSearchParams(location.search);
  const departureFrom = searchParams.get("departureFrom");
  const goingTo = searchParams.get("goingTo");
  const date = searchParams.get("date");

  useEffect(() => {
    if (departureFrom && goingTo && date) {
      axios
        .get(
          `https://projectflightbackend.onrender.com/api/flights?departureFrom=${departureFrom}&goingTo=${goingTo}&date=${date}`
        )
        .then((response) => {
          setFlights(response.data);
        })
        .catch((error) => {
          console.error("Error fetching flights:", error);
        });
    }
  }, [departureFrom, goingTo, date]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">Available Flights</h2>
      {flights.length > 0 ? (
        <div className="mt-4">
          {flights.map((flight) => (
            <div key={flight._id} className="bg-gray-100 p-4 my-2 rounded shadow-md">
              <h3 className="text-lg font-semibold">{flight.flightName}</h3>
              <p>{flight.departureFrom} ➝ {flight.goingTo}</p>
              <p>Departure: {flight.departureTime}, Arrival: {flight.arrivalTime}</p>
              <p>Duration: {flight.duration}</p>
              <p className="font-bold">Price: ₹{flight.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 mt-4">No flights found!</p>
      )}
    </div>
  );
};

export default Flights;
