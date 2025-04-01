import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeatSelector from "../Components/SeatSelector";  // Ensure this is the correct path

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const flight = location.state?.flight;

    const [selectedSeat, setSelectedSeat] = useState(null);
    const [isSeatSelectorOpen, setIsSeatSelectorOpen] = useState(false);

    // Dummy booked seats (replace with API data later)
    const bookedSeats = [5, 12, 18, 25, 30, 40];

    if (!flight) {
        return <h2 className="text-center mt-10 text-xl">No flight selected!</h2>;
    }

    const basePrice = flight.price;
    const surcharges = 600; // You can modify this surcharge if needed
    const totalPrice = basePrice + surcharges;

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeat(seatNumber);
        setIsSeatSelectorOpen(false); // Close popup after selection
    };

    const handlePayment = () => {
        if (!selectedSeat) {
            alert("Please select a seat before proceeding to payment.");
            return;
        }

        // Navigate to Payment Page with flight + seat details
        navigate("/payment", {
            state: {
                flight,
                selectedSeat,
                totalPrice
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold text-center mb-4">Booking Details</h2>
                
                {/* Flight Details */}
                <div className="mb-4">
                    <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
                    <p><strong>Flight Name:</strong> {flight.flightName}</p>
                    <p><strong>Departure From:</strong> {flight.departureFrom}</p>
                    <p><strong>Going To:</strong> {flight.goingTo}</p>
                    <p><strong>Departure Date:</strong> {new Date(flight.departureDate).toLocaleDateString()}</p>
                    <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleTimeString()}</p>
                    <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleTimeString()}</p>
                    <p><strong>Duration:</strong> {flight.duration}</p>
                    <p><strong>Stops:</strong> {flight.stops || "Direct"}</p>
                    <p><strong>Price:</strong> ₹{flight.price}</p>
                </div>

                {/* Select Seat */}
                <button 
                    onClick={() => setIsSeatSelectorOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
                >
                    {selectedSeat ? `Selected Seat: ${selectedSeat}` : "Select Seat"}
                </button>

                {/* Seat Selector Popup */}
                {isSeatSelectorOpen && (
                    <SeatSelector 
                        bookedSeats={bookedSeats} 
                        onSelectSeat={handleSeatSelection}
                        onClose={() => setIsSeatSelectorOpen(false)}
                    />
                )}

                {/* Price Calculation */}
                <div className="border-t pt-4 mb-4">
                    <p><strong>Base Fees:</strong> ₹{basePrice}</p>
                    <p><strong>Surcharges:</strong> ₹{surcharges}</p>
                    <p className="text-lg font-bold"><strong>Total:</strong> ₹{totalPrice}</p>
                </div>

                {/* Pay Now Button */}
                <button 
                    onClick={handlePayment} 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Booking;
