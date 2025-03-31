import axios from "axios";

const API_URL = "http://localhost:3000/api/flights";

export const fetchFlights = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const searchFlights = async (query) => {
  const response = await axios.get(`${API_URL}/search`, { params: query });
  return response.data;
};
