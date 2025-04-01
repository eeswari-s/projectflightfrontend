import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FlightCard.css";

const FlightCard = ({ flight }) => {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate("/booking", { state: { flight } });  // Pass flight details
    };

    return (
        <div className="flight-card">
            <div className="flight-info">
                <div className="flight-logo">
                    <img src="/flight-logo.png" alt="Flight Logo" />
                    <div>
                        <h3>{flight.name}</h3>
                        <p>Flight No: {flight.flightNumber}</p>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-time">
                        <p>From: {flight.from}</p>
                        <p>Departure: {flight.departureTime}</p>
                        <p>Date: {flight.date}</p>
                    </div>

                    <div className="duration">
                        <p>{flight.duration}</p>
                        <p>Non-stop</p>
                    </div>

                    <div className="flight-time">
                        <p>To: {flight.to}</p>
                        <p>Arrival: {flight.arrivalTime}</p>
                        <p>Date: {flight.date}</p>
                    </div>
                </div>

                <div className="price-booking">
                    <h3 className="flight-price">₹{flight.price}</h3>
                    <button className="book-now" onClick={handleBooking}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
