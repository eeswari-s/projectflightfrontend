import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600">Payment Successful! 🎉</h2>
        <p className="mt-2">Your booking has been confirmed.</p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
