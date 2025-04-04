import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-2 animate-fadeIn">
        Why Users Love Us?
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-8 text-center">
        Let India's top business travel brand handle your organization's travel needs!
      </p>

      {/* Animated Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Box 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold text-blue-500 animate-bounce">6,645,591</h2>
          <p className="text-gray-600">Flights</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold text-green-500 animate-bounce">4,500</h2>
          <p className="text-gray-600">5-Star Ratings</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold text-red-500 animate-bounce">400,000</h2>
          <p className="text-gray-600">Customers</p>
        </div>

        {/* Box 4 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold text-purple-500 animate-bounce">100</h2>
          <p className="text-gray-600">workspaces</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Success;
