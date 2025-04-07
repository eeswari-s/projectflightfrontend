import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-6">
    
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => navigate("navbar")}
      >
        Back
      </button>

      {/* Contact Us Heading */}
      <h1 className="text-red-500 text-3xl font-bold mb-2">Contact Us</h1>

      {/* Head Office Working Hours */}
      <h1 className="text-black text-2xl font-bold mb-4">Head Office Working Hours</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Line Of Business</th>
              <th className="border border-gray-400 px-4 py-2">Working Days</th>
              <th className="border border-gray-400 px-4 py-2">Monday - Saturday</th>
              <th className="border border-gray-400 px-4 py-2">Sunday</th>
              <th className="border border-gray-400 px-4 py-2">Email Address</th>
              <th className="border border-gray-400 px-4 py-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Flights</td>
              <td className="border border-gray-400 px-4 py-2">All Days</td>
              <td className="border border-gray-400 px-4 py-2">24*7</td>
              <td className="border border-gray-400 px-4 py-2">07:00 - 00:30</td>
              <td className="border border-gray-400 px-4 py-2">gdsho@suki.com</td>
              <td className="border border-gray-400 px-4 py-2">0124 - 6999900</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Refund Team</td>
              <td className="border border-gray-400 px-4 py-2">All Days</td>
              <td className="border border-gray-400 px-4 py-2">10:00 - 21:00</td>
              <td className="border border-gray-400 px-4 py-2">10:00 - 19:00</td>
              <td className="border border-gray-400 px-4 py-2">refundho@suki.com</td>
              <td className="border border-gray-400 px-4 py-2">0124 - 6999900</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">cabbooking services</td>
              <td className="border border-gray-400 px-4 py-2">Monday - Saturday</td>
              <td className="border border-gray-400 px-4 py-2">10:00 - 19:00</td>
              <td className="border border-gray-400 px-4 py-2">Closed</td>
              <td className="border border-gray-400 px-4 py-2">holidays.tsi@suki.com</td>
              <td className="border border-gray-400 px-4 py-2">0124 - 674562</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Spacing */}
      <div className="mt-6"></div>

      {/* How can we help? */}
      <h1 className="text-2xl font-bold mb-4">How can we help?</h1>

      {/* Contact Button */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={() => setShowPopup(true)}
      >
        Contact
      </button>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Contact Form</h2>
            
            <label className="block mb-2">Name:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-2" />

            <label className="block mb-2">Contact Number:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-2" />

            <label className="block mb-2">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md mb-4" />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => setShowPopup(false)}
            >
              Submit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
