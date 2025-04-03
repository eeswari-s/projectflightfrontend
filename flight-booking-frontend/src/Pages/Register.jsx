import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Sent:", formData); // 🔍 Debugging purpose

    // 🔹 Basic Validation (Frontend)
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } } // 🔹 Ensure correct data format
      );

      console.log("Response:", response.data);
      alert("Registration successful!");
      navigate("/login"); // ✅ Redirect to Login page after successful registration

    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error registering! Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-green-500 transition"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
