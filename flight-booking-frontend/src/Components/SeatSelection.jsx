import React, { useState, useEffect } from "react";
import axios from "axios";

const SeatSelection = ({ selectedSeat, setSelectedSeat }) => {
  const [seats, setSeats] = useState(Array(60).fill("available")); // 60 seats, all available initially

  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/booking/booked-seats");
        const bookedSeats = response.data;
        const updatedSeats = [...seats];

        bookedSeats.forEach((seatNumber) => {
          updatedSeats[seatNumber - 1] = "booked"; // Mark booked seats
        });

        setSeats(updatedSeats);
      } catch (error) {
        console.error("Failed to fetch booked seats", error);
      }
    };

    fetchBookedSeats();
  }, []);

  const handleSeatClick = (index) => {
    if (seats[index] === "booked") return; // Prevent selecting booked seats

    setSelectedSeat(index + 1);
  };

  return (
    <div className="grid grid-cols-10 gap-2 p-4 border rounded bg-gray-100">
      {seats.map((status, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded ${
            status === "booked"
              ? "bg-gray-500 cursor-not-allowed"
              : selectedSeat === index + 1
              ? "bg-green-500"
              : "bg-blue-400 hover:bg-blue-600"
          }`}
          onClick={() => handleSeatClick(index)}
          disabled={status === "booked"}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SeatSelection;
