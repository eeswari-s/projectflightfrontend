import axios from "axios";

const API_BASE_URL = "https://projectflightbackend.onrender.com/api/payment"; // Backend Base URL

export const createCheckoutSession = async (amount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create-checkout-session`, { amount });
    return response.data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return { success: false };
  }
};
