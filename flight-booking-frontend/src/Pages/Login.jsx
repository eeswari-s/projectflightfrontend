import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://projectflightbackend.onrender.com/api/auth/login", formData);
      console.log("Response:", response.data);

      if (response.data.message === "User logged in successfully (No Token)") {
        alert("Login successful!");
        setIsAuthenticated(true); 
        navigate("/navbar"); 
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);
      alert("Invalid email or password! Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/logingairport.jpeg')" }}>
     <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-[0px_15px_40px_rgba(0,0,0,0.5)] w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 border border-gray-300 rounded-lg text-white text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-300"

            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
           className="p-3 mb-4 border border-gray-300 rounded-lg text-white text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-300"

            required
          />
          <button
            type="submit"
           className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:from-green-500 hover:to-green-700"

          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
