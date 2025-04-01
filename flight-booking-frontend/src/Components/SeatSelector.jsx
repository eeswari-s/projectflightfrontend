import React from "react";

const SeatSelector = ({ bookedSeats, onSelectSeat, onClose }) => {
    const totalSeats = 60;  // Total seats available

    // Function to handle the seat click
    const handleSeatClick = (seatNumber) => {
        if (bookedSeats.includes(seatNumber)) {
            alert("Sorry, this seat is already booked.");
        } else {
            onSelectSeat(seatNumber);
        }
    };

    // Generate seat numbers and check if booked
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
        seats.push(i);
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Select a Seat</h2>
                <div className="grid grid-cols-6 gap-4 mb-4">
                    {seats.map((seatNumber) => (
                        <button
                            key={seatNumber}
                            onClick={() => handleSeatClick(seatNumber)}
                            className={`seat-btn ${bookedSeats.includes(seatNumber) ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                            disabled={bookedSeats.includes(seatNumber)}
                        >
                            {seatNumber}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelector;
