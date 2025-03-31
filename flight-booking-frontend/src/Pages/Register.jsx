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
    try {
      await axios.post("http://localhost:3000/api/auth/register", formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Error registering! Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-2 border" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-green-500">Submit</button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
