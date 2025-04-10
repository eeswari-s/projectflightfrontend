import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const CompareFlights = () => {
  const [flights, setFlights] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  const fetchData = async () => {
    try {
      const [res1, res2] = await Promise.all([
        axios.get("https://newapi-596u.onrender.com/api/flights"), // Suki
        axios.get("https://projectflightbackend-1.onrender.com/api/flights"), // Repo
      ]);

      const sukiFlights = res1.data
        .filter(f => f.departureFrom && f.goingTo && f.price)
        .map(flight => ({ ...flight, source: "Suki" }));

      const repoFlights = res2.data
        .filter(f => f.departureFrom && f.goingTo && f.price)
        .map(flight => ({ ...flight, source: "Repo" }));

      setFlights([...sukiFlights, ...repoFlights]);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const groupedFlights = {};
  flights.forEach((flight) => {
    const key = `${flight.departureFrom.toLowerCase()}-${flight.goingTo.toLowerCase()}`;
    if (!groupedFlights[key]) groupedFlights[key] = [];
    groupedFlights[key].push(flight);
  });

  const filteredKeys = Object.keys(groupedFlights).filter((key) =>
    key.includes(searchFrom.toLowerCase()) && key.includes(searchTo.toLowerCase())
  );

  const places = [
    "chennai", "mumbai", "new delhi", "madurai", "trichy", "pondichery",
    "hydrabad", "visakhapatnam", "agra", "lucknow", "kolkatta", "pune",
    "jaipure", "kochin", "salem", "coibature"
  ];

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Compare Flights - Suki vs Repo
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 items-center bg-indigo-50 p-4 rounded-xl shadow">
          {/* Departure From */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              list="from-options"
              placeholder="Departure From"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
            />
            <span className="absolute left-3 top-2.5 text-indigo-500">📍</span>
            <datalist id="from-options">
              {places.map((place, i) => (
                <option key={i} value={place} />
              ))}
            </datalist>
          </div>

          {/* Going To */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              list="to-options"
              placeholder="Going To"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
            />
            <span className="absolute left-3 top-2.5 text-indigo-500">🛬</span>
            <datalist id="to-options">
              {places.map((place, i) => (
                <option key={i} value={place} />
              ))}
            </datalist>
          </div>
        </div>

        {filteredKeys.length === 0 && (
          <p className="text-center text-red-500">No matching flights found.</p>
        )}

        {filteredKeys.map((key, idx) => {
          const group = groupedFlights[key];
          const suki = group.find((f) => f.source === "Suki");
          const repo = group.find((f) => f.source === "Repo");

          let priceDiffText = "";
          if (suki && repo) {
            const diff = suki.price - repo.price;
            if (diff > 0) priceDiffText = `Suki is ₹${diff} costlier than Repo`;
            else if (diff < 0) priceDiffText = `Suki is ₹${Math.abs(diff)} cheaper than Repo`;
            else priceDiffText = "Suki and Repo have the same price";
          }

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-indigo-200"
            >
              <table className="w-full text-center rounded-lg overflow-hidden">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    <th className="px-4 py-2">Flight Name</th>
                    <th className="px-4 py-2">Departure</th>
                    <th className="px-4 py-2">Destination</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {suki && (
                    <tr className="hover:bg-indigo-100 transition-colors">
                      <td className="px-4 py-2">{suki.flightName}</td>
                      <td className="px-4 py-2">{suki.departureFrom}</td>
                      <td className="px-4 py-2">{suki.goingTo}</td>
                      <td className="px-4 py-2 text-green-700 font-semibold">
                        ₹{suki.price}
                      </td>
                    </tr>
                  )}
                  {repo && (
                    <tr className="hover:bg-purple-100 transition-colors">
                      <td className="px-4 py-2">{repo.flightName}</td>
                      <td className="px-4 py-2">{repo.departureFrom}</td>
                      <td className="px-4 py-2">{repo.goingTo}</td>
                      <td className="px-4 py-2 text-blue-700 font-semibold">
                        ₹{repo.price}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="4" className="py-3 text-center text-indigo-700 font-medium">
                      {priceDiffText}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-2 text-gray-300 text-xl">
                ....................................................
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompareFlights;
