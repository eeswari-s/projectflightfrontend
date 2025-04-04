import axios from "axios";

const API_URL = "https://projectflightbackend.onrender.com/api/booking";

export const bookSeat = async (userId, flightId, seatNumber) => {
  return axios.post(`${API_URL}/book-seat`, { userId, flightId, seatNumber });
};

export const getBookedSeats = async (flightId) => {
  return axios.get(`${API_URL}/get-booked-seats/${flightId}`);
};

export const confirmPayment = async (bookingId) => {
  return axios.post(`${API_URL}/confirm-payment/${bookingId}`);
};
