import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Sent:", formData); 

   
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://projectflightbackend.onrender.com/api/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } } 
      );

      console.log("Response:", response.data);
      alert("Registration successful!");
      navigate("/login"); 

    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error registering! Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/logingairport.jpeg')" }}>
     <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-[0px_20px_50px_rgba(0,0,0,0.6)] w-96">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
           className="w-full p-3 mb-3 border border-gray-300 rounded-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white/10 backdrop-blur-md"

            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
           className="w-full p-3 mb-3 border border-gray-300 rounded-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white/10 backdrop-blur-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
           className="w-full p-3 mb-3 border border-gray-300 rounded-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white/10 backdrop-blur-md"

            required
          />
          <button
            type="submit"
           className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:bg-green-500 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl active:scale-95"

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
