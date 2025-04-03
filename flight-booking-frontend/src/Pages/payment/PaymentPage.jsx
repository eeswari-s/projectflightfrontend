import { useState } from "react";
import axios from "axios";

const PaymentPage = ({ bookingId, amount }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/create-checkout-session", {
        bookingId,
        amount,
      });

      if (res.data.url) {
        window.location.href = res.data.url; // ✅ Stripe Checkout ku redirect
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-green-500"
      >
        {loading ? "Processing..." : "Pay " + amount}
      </button>
    </div>
  );
};

export default PaymentPage;
