import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful! 🎉</h2>
        <p>Your flight booking is confirmed.</p>
        <button
          onClick={() => navigate("/flights")}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Go to Flight Search
        </button>
      </div>
    </div>
  );
};

export default Success;
